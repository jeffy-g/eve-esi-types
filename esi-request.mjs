// import type { TESIResponseOKMap } from "eve-esi-types";
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
 * this always `https://esi.evetech.net`
 */
const BASE = "https://esi.evetech.net";
/**
 * @typedef {import("./src").TESIResponseOKMap} TESIResponseOKMap
 * @typedef {`${string}.${string}.${string}`} TAcccessToken __{Header}.{Payload}.{Signature}__
 */
/**
 * @typedef ESIRequestOptions
 * @prop {Record<string, any>} [query] query params for ESI request.
 * @prop {any} [body] will need it for `POST` request etc.
 * @prop {boolean} [ignoreError]  if want response data with ignore error then can be set to `true`.
 * @prop {AbortController} [cancelable] cancel request immediately
 * @prop {TAcccessToken} [token] Can be an empty object if no authentication is required.description
 */
// - - - - - - - - - - - - - - - - - - - -
//        module vars, functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * Get the number of currently executing ESI requests
 */
let ax = 0;
/**
 * simple named error class.
 */
class ESIRequesError extends Error {
}
/**
 * throws when x-esi-error-limit-remain header value is "0". (http status: 420)
 */
class ESIErrorLimitReachedError extends Error {
    constructor() {
        super("Cannot continue ESI request because 'x-esi-error-limit-remain' is zero!");
    }
    valueOf() {
        return 420;
    }
}
/**
 * fetch the extra pages
 *
 *   + if the `x-pages` header property ware more than 1
 *
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {Record<string, any>} qs queries
 * @param {number} pc pageCount
 */
const fetchP = async (endpointUrl, rqopt, qs, pc) => {
    const rqs = [];
    const rqp = new URLSearchParams(qs);
    for (let i = 2; i <= pc;) {
        rqp.set("page", (i++) + "");
        ax++;
        rqs.push(fetch(`${endpointUrl}?${rqp + ""}`, rqopt).then(res => res.json()).catch(reason => {
            console.warn(reason);
            return [];
        }).finally(() => {
            ax--;
        }));
    }
    return Promise.all(rqs).then(jsons => {
        // DEVNOTE: let check the page 2, type is array?
        if (isArray(jsons[0])) {
            let combined = [];
            for (let i = 0, end = jsons.length; i < end;) {
                combined = combined.concat(jsons[i++]);
            }
            return combined;
        }
        LOG && log("> > > pages result are object < < < --", jsons);
        return null;
    });
};
/** ### replace (C)urly (B)races (T)oken
 *
 * @example
 * "/characters/{character_id}/skills"
 * // ->
 * "/characters/<char.character_id>/skills"
 *
 * @param {string} endpoint e.g - "/characters/{character_id}/"
 * @param {number[]} ids
 * @returns fragment of qualified endpoint uri or null.
 */
const replaceCbt = (endpoint, ids) => {
    const re = /{([\w]+)}/g;
    /** @type {RegExpExecArray?} */
    let m;
    let idx = 0;
    while (m = re.exec(endpoint)) {
        endpoint = endpoint.replace(m[0], ids[idx++] + "");
    }
    return endpoint;
};
/**
 *
 * @param {string} endp this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter can be omitted by using `<version>/<endpoint>`
 */
const curl = (endp) => {
    endp = endp.replace(/^\/+|\/+$/g, "");
    return `${BASE}/latest/${endp}/`;
};
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * fire ESI request
 * @template {"get" | "post" | "put" | "delete"} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {number | number[] | ESIRequestOptions} Opt
 * @template {TESIResponseOKMap[M][EP]} R
 *
 * @param {M} mthd
 * @param {EP} endp - The endpoint to request.
 * @param {Opt} [pathParams] - Optional path parameters.
 * @param {ESIRequestOptions} [opt] - default is empty object {}. `body` is json string
 * @returns {Promise<R>} - The response from the endpoint.
 * @throws
 * @async
 */
export async function fire(mthd, endp, pathParams, opt = {}) {
    if (typeof pathParams === "number") {
        // @ts-expect-error 
        pathParams = [pathParams];
    }
    if (isArray(pathParams)) {
        // @ts-ignore actualy endp is string
        endp = replaceCbt(endp, pathParams);
    }
    else {
        // When only options are provided
        opt = /** @type {ESIRequestOptions} */ (pathParams) || opt;
    }
    /** @type {RequestInit} */
    const rqopt = {
        method: mthd,
        mode: "cors",
        cache: "no-cache",
        signal: opt.cancelable?.signal,
        headers: {}
    };
    const qss = {
    // language: "en",
    };
    if (opt.query) {
        // Object.assign(queries, options.queries); Object.assign is too slow
        const oqs = opt.query;
        for (const k of Object.keys(oqs)) {
            qss[k] = oqs[k];
        }
    }
    // DEVNOTE: when datasource is not empty string. (e.g - "singularity"
    // in this case must specify datasource.
    // disabled since `REMOVING DATASOURCE SINGULARITY`
    // if (opt.datasource === "singularity") {
    //     opt.datasource = "tranquility";
    // }
    if (opt.token) {
        // @ts-ignore The header is indeed an object
        rqopt.headers.authorization = `Bearer ${opt.token}`;
    }
    if (opt.body) { // means "POST" method etc
        // @ts-ignore The header is indeed an object
        rqopt.headers["content-type"] = "application/json";
        rqopt.body = JSON.stringify(opt.body);
    }
    // @ts-ignore actualy endp is string
    const endpointUrl = curl(endp);
    ax++;
    try {
        // @ts-ignore A silly type error will appear, but ignore it.
        const res = await fetch(`${endpointUrl}?${new URLSearchParams(qss) + ""}`, rqopt).finally(() => {
            ax--;
        });
        const stat = res.status;
        if (!res.ok && !opt.ignoreError) {
            if (stat === 420) {
                opt.cancelable && opt.cancelable.abort();
                throw new ESIErrorLimitReachedError();
            }
            else {
                // @ts-ignore actualy endp is string
                throw new ESIRequesError(`maybe network disconneted or otherwise request data are invalid. (endpoint=${endp}, http status=${stat})`);
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
            if (opt.ignoreError) {
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
                const remData = await fetchP(endpointUrl, rqopt, qss, pc);
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
        throw new ESIRequesError(`unknown error occurred, message: ${e.message}, endpoint=${endp}`);
    }
}
// It should complete correctly.
async function getEVEStatus() {
    try {
        const ok = await fire("get", "/characters/{character_id}/ship/", 994562, {
            // This token is completely random, but a simple check can be done with type TAcccessToken
            token: "eyJhbGciOiJIjoiSldUIn0.YDbHqu0xPwtK5eTER7aPl8I0oYC.YDbHqu0xPwtK5eTER7aPl8I0oYC"
        });
        // query patameter `filter` is optional
        // Version 1 makes it somewhat easier to handle types,
        // but as a trade-off, it does not support query parameter completion.
        await fire("get", "/universe/structures/", {
            query: {
                filter: "market"
            }
        });
        // in this case, "categories" and "search" is required
        await fire("get", "/characters/{character_id}/search/", 994562, {
            query: {
                categories: ["agent"],
                search: "ok"
            },
            token: "eyJhbGciOiJIjoiSldUIn0.YDbHqu0xPwtK5eTER7aPl8I0oYC.YDbHqu0xPwtK5eTER7aPl8I0oYC"
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
// type following and run
// node esi-request.mjs
// or yarn test
getEVEStatus().then(eveStatus => console.log(eveStatus));
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
