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
import "colors.ts";
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
export const BASE = "https://esi.evetech.net";
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
export const isDebug = () => {
    return process.argv.includes("-debug");
};
export const is = (opt) => process.argv.includes(`-${opt}`);
/**
 * @param {string} method
 * @param {ESIRequestOptions} opt
 * @returns
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
    const qss = {
    // language: "en",
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
 *
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {URLSearchParams} rqp queries
 * @param {number} pc pageCount
 * @param {(minus?: number) => void=} increment
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
export const replaceCbt = (endpoint, ids) => {
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
 *   + The version parameter is forced to apply `latest`
 */
export const curl = (endp) => {
    endp = endp.replace(/^\/+|\/+$/g, "");
    return `${BASE}/latest/${endp}/`;
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
            const YMD = new Date(date).toLocaleDateString('en-CA').replace(/-/g, '');
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
export function getLogger() {
    const clog = console.log.bind(console, '- - -> Get the character data of "CCP Zoetrope"'.magenta);
    const rlog = console.log.bind(console, '- - -> Run ESI request'.cyan);
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
 */
export async function fireRequestsDoesNotRequireAuth(fn) {
    const { clog, rlog } = getLogger();
    try {
        // - - - - - - - - - - - -
        //       Character
        // - - - - - - - - - - - -
        // Here, I borrow data from "CCP Zoetrope".
        clog();
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/", 2112625428).then(log);
        clog('(portrait)');
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/portrait/", 2112625428).then(log);
        clog('(affiliation)');
        const affiliation = await fireWithoutAuth(fn, "post", "/characters/affiliation/", { body: [2112625428] });
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
        let ok = await fireWithoutAuth(fn, "get", "/characters/{character_id}/ship/", 994562, {
            auth: true,
            ignoreError: true,
            token: "token.token.token"
        });
        // in this case, "categories" and "search" is required
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/search/", 994562, {
            query: {
                categories: ["agent"],
                search: "ok"
            },
            auth: true
        });
        // in this case, "order_type" is required
        await fireWithoutAuth(fn, "get", "/markets/{region_id}/orders/", 994562, {
            query: {
                order_type: "all"
            },
        });
        // TODO: want TypeScript semantics to throw an error because there is a required query parameter, but it's not possible
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/search/");
        log(ok);
    }
    catch (e) {
        console.error("Failed to request -", e);
    }
}
