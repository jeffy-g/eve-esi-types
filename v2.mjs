// import type { TESIResponseOKMap } from "eve-esi-types";
import { curl, replaceCbt, fetchP, ESIRequesError, ESIErrorLimitReachedError } from "./rq-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const isArray = Array.isArray;
/**
 * enable/disable console.log
 */
let LOG = false;
/**
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
 */
/**
 * @typedef {`${string}.${string}.${string}`} TAcccessToken __{Header}.{Payload}.{Signature}__
 * @typedef ESIRequestOptions
 * @prop {Record<string, any>} [query] query params for ESI request.
 * @prop {any} [body] will need it for `POST` request etc.
 * @prop {true=} [auth] Can be an empty object if no authentication is required.description
 * @prop {TAcccessToken} [token] Can be an empty object if no authentication is required.description
 * @prop {boolean} [ignoreError]  if want response data with ignore error then can be set to `true`.
 * @prop {AbortController} [cancelable] cancel request immediately
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
// It should complete correctly.
async function getEVEStatus() {
    try {
        const ok = await fire("get", "/characters/{character_id}/ship/", 994562, { auth: true });
        // query patameter `filter` is optional
        await fire("get", "/universe/structures/", {
            query: {
            // filter: "market"
            }
        });
        // in this case, "categories" and "search" is required
        await fire("get", "/characters/{character_id}/search/", 994562, {
            query: {
                categories: ["agent"],
                search: "ok"
            },
            auth: true
        });
        // in this case, "order_type" is required
        await fire("get", "/markets/{region_id}/orders/", 994562, {
            query: {
                order_type: "all"
            },
        });
        // TODO: want TypeScript semantics to throw an error because there is a required query parameter, but it's not possible
        await fire("get", "/characters/{character_id}/search/");
        console.log(ok);
    }
    catch (error) {
        console.error("Failed to get character ship -", error);
    }
    return fire("get", "/status/");
}
/**
 * fire ESI request
 * @template {TESIEntryMethod} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {IsParameterizedPath<EP, number | number[], Opt>} P2
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
        // @ts-ignore 
        pathParams = [pathParams]; // as unknown as P2;
    }
    if (isArray(pathParams)) {
        // @ts-ignore actualy endp is string
        endp = replaceCbt(endp, pathParams);
    }
    // When only options are provided
    /** @type {Opt} */
    // @ts-ignore
    const actualOpt = pathParams || opt || {};
    /** @type {RequestInit} */
    const rqopt = {
        method: mthd,
        mode: "cors",
        cache: "no-cache",
        // @ts-ignore 
        signal: actualOpt.cancelable?.signal,
        headers: {}
    };
    const qss = {
        language: "en",
    };
    if (actualOpt.query) {
        // Object.assign(queries, options.queries); Object.assign is too slow
        const oqs = actualOpt.query;
        for (const k of Object.keys(oqs)) {
            qss[k] = oqs[k];
        }
    }
    // DEVNOTE: when datasource is not empty string. (e.g - "singularity"
    // in this case must specify datasource.
    // disabled since `REMOVING DATASOURCE SINGULARITY`
    // if (actualOpt.datasource === "singularity") {
    //     actualOpt.datasource = "tranquility";
    // }
    if (actualOpt.auth) {
        // @ts-ignore The header is indeed an object
        rqopt.headers.authorization = `Bearer ${actualOpt.token}`;
    }
    if (actualOpt.body) { // means "POST" method etc
        // @ts-ignore The header is indeed an object
        rqopt.headers["content-type"] = "application/json";
        rqopt.body = JSON.stringify(actualOpt.body);
    }
    // @ts-ignore actualy endp is string
    const endpointUrl = curl(endp);
    ax++;
    try {
        // @ts-ignore A silly type error will appear, but ignore it.
        const res = await fetch(`${endpointUrl}?${new URLSearchParams(qss) + ""}`, rqopt).finally(() => ax--);
        const stat = res.status;
        if (!res.ok && !actualOpt.ignoreError) {
            if (stat === 420) {
                actualOpt.cancelable && actualOpt.cancelable.abort();
                throw new ESIErrorLimitReachedError();
            }
            else {
                // console.log(res);
                throw new ESIRequesError(`${res.statusText} (status=${stat})`);
            }
        }
        else {
            // DEVNOTE: - 204 No Content
            if (stat === 204) {
                // this result is empty, decided to return status code.
                return /** @type {R} */ ({ status: stat });
            }
            /** @type {R} */
            const data = await res.json();
            if (actualOpt.ignoreError) {
                // meaning `forceJson`?
                return data;
            }
            // - - - - x-pages response.
            // +undefined is NaN
            // @ts-ignore becouse +null is 0
            const pc = +res.headers.get("x-pages");
            // has remaining pages? NaN > 1 === false !isNaN(pageCount)
            if (pc > 1) {
                LOG && log('found "x-pages" header, pages: %d', pc);
                const remData = await fetchP(endpointUrl, rqopt, qss, pc, incrementAx);
                // finally, decide product data.
                if (isArray(data) && isArray(remData)) {
                    // DEVNOTE: 2019/7/23 15:01:48 - types
                    return /** @type {R} */ (data.concat(remData));
                }
                else {
                    // @ts-ignore TODO: fix type
                    remData && Object.assign(data, remData);
                }
            }
            return data;
        }
    }
    catch (e) {
        // @ts-ignore actualy endp is string
        throw new ESIRequesError(`message: ${e.message}, endpoint=${endp}`);
    }
}
// type following and run
// node v2.mjs
// or yarn test:v2
getEVEStatus().then(eveStatus => console.log(eveStatus));
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
