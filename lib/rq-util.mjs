/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
import { isNode } from "./constants.mjs";
export { isNode } from "./constants.mjs";
import * as consoleUtil from "./console-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = consoleUtil.getLogger("[request-util]:");
const isArray = Array.isArray;
/**
 * enable/disable console.log
 */
let LOG = false;
/**
 * this always `https://esi.evetech.net`
 */
export const BASE = "https://esi.evetech.net";
/**
 * @typedef {string | number | boolean} Truthy
 */
/**
 * simple named error class.
 */
export class ESIRequesError extends Error {
}
/**
 * throws when x-esi-error-limit-remain header value is "0". (http status: 420)
 */
export class ESIErrorLimitReachedError extends ESIRequesError {
    constructor() {
        super("Cannot continue ESI request because 'x-esi-error-limit-remain' is zero!");
    }
    valueOf() {
        return 420;
    }
}
/**
 * @typedef {import("./rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 */
// - - - - - - - - - - - - - - - - - - - -
//            utility functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * #### status: 200 | 201 | 204
 *
 *  + Returns a json object only if the status is `200` or `201`.
 *
 * @param {Response} response
 * @param {string} endpointUrl
 * @param {RequestInit} requestOpt
 * @param {URLSearchParams} urlParams
 * @param {(minus?: Truthy) => void=} increment
 * @returns {Promise<any>}
 */
export const handleSuccessResponse = async (response, endpointUrl, requestOpt, urlParams, increment = () => { }) => {
    // NoContentResponse
    if (response.status === 204)
        return {};
    /** @type {any} */
    const data = await response.json();
    // - - - - x-pages response.
    // +undefined is NaN
    // @ts-expect-error becouse +null is 0
    const pc = +response.headers.get("x-pages");
    // has remaining pages? NaN > 1 === false !isNaN(pageCount)
    if (pc > 1) {
        LOG && log('found "x-pages" header, pages: %d', pc);
        const remData = await fetchP(endpointUrl, requestOpt, urlParams, pc, increment);
        // finally, decide product data.
        if (isArray(data) && isArray(remData)) {
            // DEVNOTE: 2019/7/23 15:01:48 - types
            return data.concat(remData);
        }
        else {
            remData && Object.assign(data, remData);
        }
    }
    return data;
};
/**
 * @import {
 *     TESIErrorStats,
 *     TESIErrorStatMap,
 *     TESIErrorWithStat
 * } from "./esi-error-types";
 */
/**
 * #### status: (400 | 401 | 403 | 404 | 420 | 422) or (500 | 503 | 504 | 520)
 *
 * @param {Response} res
 * @param {string} endpointUrl
 * @param {AbortController=} abortable
 * @returns {Promise<void>}
 */
export const handleESIError = async (res, endpointUrl, abortable) => {
    const status = /** @type {TESIErrorStats} */ (res.status);
    /** @type {TESIErrorStatMap[typeof status]} */
    const esiError = await res.json();
    /** @type {TESIErrorWithStat<typeof status>} */
    const errorType = {
        status, ...esiError
    };
    // log ESI Error details
    log(errorType);
    if (status === 420) {
        abortable && abortable.abort();
        throw new ESIErrorLimitReachedError();
    }
    else {
        throw new ESIRequesError(`${res.statusText} (status=${status}, url=${endpointUrl})`);
    }
};
/** @satisfies {TESIErrorStats[]} */
const ESIErrorStats = [
    // status 400
    400, // BadRequest;
    401, // Unauthorized;
    403, // Forbidden;
    404, // NotFound;
    420, // ErrorLimited;
    422, // Unprocessable;
    // status 500
    500, // InternalServerError;
    503, // ServiceUnavailable;
    504, // GatewayTimeout;
    520, // EVEServerError;
];
/**
 * @param {number} stat
 * @returns {stat is 200 | 201 | 204}
 */
export const isSuccess = (stat) => {
    return stat === 200 || stat === 201 || stat === 204;
};
/**
 * @param {number} stat
 * @returns {stat is TESIErrorStats}
 */
export const isError = (stat) => {
    return ESIErrorStats.includes(/** @type {TESIErrorStats} */ (stat));
};
/**
 * @returns {boolean}
 */
export const isDebug = () => {
    return is("debug");
};
/**
 * @param {string} opt
 * @returns {boolean}
 */
export const is = (opt) => {
    if (isNode) {
        return process.argv.includes(`-${opt}`);
    }
    else {
        const q = location.search || location.hash;
        if (q) {
            //* ctt
            const entries = q.substring(1).split("&");
            for (const entry of entries) {
                const [key, /*value*/] = entry.split("=");
                if (key === opt)
                    return true;
            }
            /*/
            const usp = new URLSearchParams(q.substring(1));
            for (const [key, value] of usp.entries()) {
                if (key === opt) return true;
            }
            //*/
        }
    }
    return false;
};
/**
 * @param {string} method
 * @param {ESIRequestOptions} opt
 * @returns {{ rqopt: RequestInit, qss: Record<string, any> }}
 */
export const initOptions = (method, opt) => {
    /** @type {RequestInit} */
    const rqopt = {
        method,
        mode: "cors",
        cache: "no-cache",
        signal: opt.cancelable?.signal,
        headers: {}
    };
    /** @type {Record<string, any>} */
    const qss = {
        // CAVEAT: If the language parameter is not set, some endpoints such as "/universe/ids/" may return incomplete results.
        // Therefore, the language parameter should always be set.
        language: "en",
    };
    if (opt.query) {
        // Object.assign(query, options.query); Object.assign is too slow
        const oqs = opt.query;
        Object.keys(oqs).forEach(k => qss[k] = oqs[k]);
    }
    if (opt.auth) {
        // @ts-ignore The header is indeed an object
        rqopt.headers.authorization = `Bearer ${opt.token}`;
    }
    if (opt.body) { // means "POST" method etc
        // @ts-ignore The header is indeed an object
        rqopt.headers["content-type"] = "application/json";
        rqopt.body = JSON.stringify(opt.body);
    }
    return { rqopt, qss };
};
/**
 * fetch the extra pages
 *
 *   + if the `x-pages` header property ware more than 1
 * @template {any} T
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {URLSearchParams} rqp queries
 * @param {number} pc pageCount
 * @param {(minus?: number) => void=} increment
 * @returns {Promise<T | null>}
 */
export const fetchP = async (endpointUrl, rqopt, rqp, pc, increment = () => { }) => {
    const rqs = [];
    for (let i = 2; i <= pc;) {
        rqp.set("page", (i++) + "");
        increment();
        rqs.push(fetch(`${endpointUrl}?${rqp + ""}`, rqopt).then(res => res.json()).catch(reason => {
            console.warn(reason);
            return [];
        }).finally(() => {
            increment(1);
        }));
    }
    return Promise.all(rqs).then(jsons => {
        // DEVNOTE: let check the page 2, type is array?
        if (isArray(jsons[0])) {
            let combined = [];
            for (let i = 0, end = jsons.length; i < end;) {
                combined = combined.concat(jsons[i++]);
            }
            return /** @type {T} */ (combined);
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
 * @template {unknown} T
 * @param {T} endpoint e.g - "/characters/{character_id}/"
 * @param {number[]} ids
 * @returns {T} fragment of qualified endpoint uri or null.
 */
export const replaceCbt = (endpoint, ids) => {
    let idx = 0;
    // @ts-expect-error
    return endpoint.replace(/{([\w]+)}/g, $0 => ids[idx++] + "");
};
/**
 *
 * @template {unknown} T
 * @param {T} endp this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter is forced to apply `latest`
 * @returns {string}
 */
export const curl = (endp) => {
    // @ts-expect-error
    return `${BASE}/latest/${endp.replace(/^\/+|\/+$/g, "")}/`;
};
/**
 * @date 2020/03/31
 * @version 2.1
 * @type {() => Promise<string>}
 */
export async function getSDEVersion() {
    const sdeZipUrl = "https://eve-static-data-export.s3-eu-west-1.amazonaws.com/tranquility/sde.zip";
    try {
        const res = await fetch(sdeZipUrl, { method: "head", mode: "cors" });
        const date = res.headers.get("last-modified");
        if (date) {
            const YMD = new Date(date).toLocaleDateString("en-CA").replace(/-/g, "");
            return `sde-${YMD}-TRANQUILITY`;
        }
        else {
            console.error("Failed to retrieve 'last-modified' header.");
            return "sde-202Xxxxx-TRANQUILITY";
        }
    }
    catch (e) {
        console.error("Error fetching SDE version:", e);
        return "sde-202Xxxxx-TRANQUILITY";
    }
}
export const getUniversalLogger = (banner, logSelector = ".log-frame") => {
    return consoleUtil.getLogger(banner, logSelector);
};
export function getLogger() {
    const clog = consoleUtil.getLogger('- - -> Get the character data of "CCP Zoetrope"'.magenta);
    const rlog = consoleUtil.getLogger("- - -> Run ESI request".cyan);
    // const clog = console.log.bind(console, '- - -> Get the character data of "CCP Zoetrope"'.magenta);
    // const rlog = console.log.bind(console, "- - -> Run ESI request".cyan);
    return { clog, rlog };
}
/**
 * Need typescript v5.5 later
 * @import * as ESI from "../v2";
 * @typedef {ESI.TESIResponseOKMap} TESIResponseOKMap
 * @typedef {ESI.IESIRequestFunction<ESIRequestOptions>} IESIRequestFunction
 * @typedef {ESI.TESIRequestFunctionMethods<ESIRequestOptions>} TESIRequestFunctionMethods
 */
/**
 * #### Fire a request that does not require authentication.
 *
 * @template {TESIEntryMethod} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {IfParameterizedPath<EP, Opt>} P2
 * @template {IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>} Opt
 * @template {InferESIResponseResult<M, EP>} R
 *
 * @param {TESIRequestFunctionSignature<ESIRequestOptions> | TESIRequestFunctionMethods} fn
 * @param {M} method
 * @param {EP} endpoint
 * @param {P2} [pathParams]
 * @param {Opt} [opt]
 * @returns {Promise<R>}
 */
function fireWithoutAuth(fn, method, endpoint, pathParams, opt) {
    if (typeof fn === "function") {
        return fn(method, endpoint, pathParams, opt);
    }
    return fn[method](endpoint, pathParams, opt);
}
// It should complete correctly.
/**
 * #### Fire a request that does not require authentication.
 *
 * @param {TESIRequestFunctionSignature<ESIRequestOptions> | TESIRequestFunctionMethods} fn
 * @returns {Promise<void>}
 */
export async function fireRequestsDoesNotRequireAuth(fn) {
    const { clog, rlog } = getLogger();
    const ID_CCP_Zoetrope = 2112625428;
    try {
        // - - - - - - - - - - - -
        //       Character
        // - - - - - - - - - - - -
        // Here, I borrow data from "CCP Zoetrope".
        clog();
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/", ID_CCP_Zoetrope).then(log);
        clog('(portrait)');
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/portrait/", ID_CCP_Zoetrope).then(log);
        clog('(affiliation)');
        const affiliation = await fireWithoutAuth(fn, "post", "/characters/affiliation/", { body: [ID_CCP_Zoetrope] });
        log(affiliation);
        clog('(corporation)');
        await fireWithoutAuth(fn, "get", "/corporations/{corporation_id}/", affiliation[0].corporation_id).then(log);
        rlog("get:/incursions/".green);
        await fireWithoutAuth(fn, "get", "/incursions/").then(log);
        // - - - - - - - - - - - -
        //     Miscellaneous
        // - - - - - - - - - - - -
        rlog("post:/universe/ids/".green);
        const ids = await fireWithoutAuth(fn, "post", "/universe/ids/", { body: ["the forge", "plex"] });
        log(ids.inventory_types, ids.regions);
        rlog(`get:/markets/${ids?.regions?.[0].id}/orders/?type_id=${ids?.inventory_types?.[0].id}, item PLEX`.green);
        // in this case, "order_type" is required
        const orders = await fireWithoutAuth(fn, "get", "/markets/{region_id}/orders/", ids?.regions?.[0].id, {
            query: {
                // page: 1,
                order_type: "sell",
                type_id: ids?.inventory_types?.[0].id
            }
        });
        log(orders.sort((a, b) => a.price - b.price).slice(0, 2));
        rlog("get:/universe/structures/?filter=market".green);
        // query patameter `filter` is optional
        const structures = await fireWithoutAuth(fn, "get", "/universe/structures/", {
            query: {
                filter: "market"
            }
        });
        log(`/universe/structures/[0]=${structures[0]}, length=${structures.length}`);
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        //  The following is code to observe the behavior of completion by generics.
        //  Authentication is required, so an error will occur.
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        let ok = await fireWithoutAuth(fn, "get", "/characters/{character_id}/ship/", ID_CCP_Zoetrope, {
            auth: true,
            ignoreError: true,
            token: "token.token.token"
        });
        // in this case, "categories" and "search" is required
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/search/", ID_CCP_Zoetrope, {
            query: {
                categories: ["agent"],
                search: "ok"
            },
            auth: true
        });
        // TODO: want TypeScript semantics to throw an error because there is a required query parameter, but it's not possible
        //   Or rather, I don't know how to do it.
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/search/");
        log(ok);
    }
    catch (e) {
        console.error("Failed to request -", e);
    }
}
