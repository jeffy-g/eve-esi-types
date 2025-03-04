// import type { TESIResponseOKMap } from "eve-esi-types";
import { is, curl, replaceCbt, getSDEVersion, initOptions, isDebug, fireRequestsDoesNotRequireAuth, isSuccess, handleESIError, handleSuccessResponse } from "./lib/rq-util.mjs";
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
 * @typedef {import("./lib/rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 */
// - - - - - - - - - - - - - - - - - - - -
//        module vars, functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * Get the number of currently executing ESI requests
 */
let ax = 0;
const incrementAx = (minus) => minus ? ax-- : ax++;
/**
 * @returns Get The Current ESI request pending count.
 */
export const getRequestPending = () => ax;
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
        // The parameters are different for successful and error responses.
        if (isSuccess(status)) {
            return handleSuccessResponse(res, endpointUrl, rqopt, up, incrementAx);
        }
        // else if (isError(status)) {}
        // Actually, throw Error
        throw await handleESIError(res, endpointUrl, actualOpt.cancelable);
    }
    catch (e) {
        throw e;
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
if (!is("x")) {
    getEVEStatus(fire).then(eveStatus => log(eveStatus));
}
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
