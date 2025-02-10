// import type { TESIResponseOKMap } from "eve-esi-types";
import { curl, fetchP, replaceCbt, getSDEVersion, ESIRequesError, initOptions, isDebug, ESIErrorLimitReachedError, fireRequestsDoesNotRequireAuth } from "./rq-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const isArray = Array.isArray;
/**
 * enable/disable console.log
 */
let LOG = isDebug();
/**
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
 * @typedef {import("./rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 */
// - - - - - - - - - - - - - - - - - - - -
//        module vars, functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * Get the number of currently executing ESI requests
 */
let ax = 0;
const incrementAx = (minus) => minus ? ax-- : ax++;
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * fire ESI request
 * @template {TESIEntryMethod} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {IfParameterizedPath<EP, Opt>} P2
 * @template {IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>} Opt
 * @template {InferESIResponseResult<M, EP>} R
 *
 * @param {M} mthd
 * @param {EP} endp - The endpoint to request.
 * @param {Opt} [opt] - default is empty object {}. `body` is json string
 * @param {P2} [pathParams] - Optional path parameters.
 * @returns {Promise<R>} - The response from the endpoint.
 * @throws
 * @async
 */
export async function fire(mthd, endp, pathParams, opt) {
    if (typeof pathParams === "number") {
        // @ts-expect-error
        pathParams = [pathParams]; // as unknown as P2;
    }
    if (isArray(pathParams)) {
        // @ts-expect-error actualy endp is string
        endp = replaceCbt(endp, pathParams);
    }
    // When only options are provided
    /** @type {Opt} */
    // @ts-ignore
    const actualOpt = opt || pathParams || {};
    const { rqopt, qss } = initOptions(mthd, actualOpt);
    // @ts-expect-error actualy endp is string
    const endpointUrl = curl(endp);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    LOG && log(url);
    ax++;
    try {
        const res = await fetch(url, rqopt).finally(() => ax--);
        const { status } = res;
        if (!res.ok && !actualOpt.ignoreError) {
            if (status === 420) {
                actualOpt.cancelable && actualOpt.cancelable.abort();
                throw new ESIErrorLimitReachedError();
            }
            else {
                // console.log(res);
                throw new ESIRequesError(`${res.statusText} (status=${status})`);
            }
        }
        else {
            // DEVNOTE: - 204 No Content
            if (status === 204) {
                // this result is empty, decided to return status code.
                return /** @type {R} */ ({ status });
            }
            /** @type {R} */
            const data = await res.json();
            if (actualOpt.ignoreError) {
                // meaning `forceJson`?
                return data;
            }
            // - - - - x-pages response.
            // +undefined is NaN
            // @ts-expect-error becouse +null is 0
            const pc = +res.headers.get("x-pages");
            // has remaining pages? NaN > 1 === false !isNaN(pageCount)
            if (pc > 1) {
                LOG && log('found "x-pages" header, pages: %d', pc);
                const remData = await fetchP(endpointUrl, rqopt, up, pc, incrementAx);
                // finally, decide product data.
                if (isArray(data) && isArray(remData)) {
                    // DEVNOTE: 2019/7/23 15:01:48 - types
                    return /** @type {R} */ (data.concat(remData));
                }
                else {
                    // @ts-expect-error TODO: fix type
                    remData && Object.assign(data, remData);
                }
            }
            return data;
        }
    }
    catch (e) {
        // @ts-expect-error actualy endp is string
        throw new ESIRequesError(`message: ${e.message}, endpoint=${endp}`);
    }
}
// It should complete correctly.
/**
 * @param {TESIRequestFunctionSignature<ESIRequestOptions>} fn
 */
async function getEVEStatus(fn) {
    const sdeVersion = await getSDEVersion();
    log(`sdeVersion: ${sdeVersion}`.blue);
    await fireRequestsDoesNotRequireAuth(fn);
    return fn("get", "/status/");
}
// type following and run
// node v2.mjs
// or yarn test
getEVEStatus(fire).then(eveStatus => console.log(eveStatus));
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
