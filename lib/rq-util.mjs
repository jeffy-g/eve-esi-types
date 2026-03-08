/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../dist/v2"/>
import { isNode } from "./constants.mjs";
export { isNode } from "./constants.mjs";
export { getSDEVersion } from "./sde-util.mjs";
import * as consoleUtil from "./console-util.mjs";
if (isNode) {
    const stdout = process.stdout;
    while ("".green === void 0) {
        stdout.write("Wait for colors initialize...");
        await new Promise(r => setTimeout(r, 200));
    }
    stdout.write("Now colors is availabe!\n");
}
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
 * @import * as ESIUtil from "./rq-util.mjs";
 * @typedef {ESIUtil.Truthy} Truthy
 * @typedef {ESIUtil.TAccessToken} TAccessToken
 * @typedef {ESIUtil.TJWTPayload} TJWTPayload
 * @typedef {ESIUtil.ESIRequestOptions} ESIRequestOptions
 */
/**
 * simple named error class.
 */
export class ESIRequestError extends Error {
}
/**
 * throws when x-esi-error-limit-remain header value is "0". (http status: 420)
 */
export class ESIErrorLimitReachedError extends ESIRequestError {
    constructor() {
        super("Cannot continue ESI request because 'x-esi-error-limit-remain' is zero!");
    }
    valueOf() {
        return 420;
    }
}
/**
 * @template T
 * @template {Record<string, unknown>} O
 * @param {[T] | [(T | undefined)?]} opt
 * @returns {NonNullable<T> & O}
 */
export const normalizeOptions = (opt) => {
    return /** @type {NonNullable<T> & O} */ (opt.length ? (opt[0] ?? {}) : {});
};
/**
 * #### status: 200 | 201 | 204
 *
 *  + Returns a json object only if the status is `200` or `201`.
 *
 * @param {Response} response
 * @param {string} endpointUrl
 * @param {RequestInit} requestOpt
 * @param {URLSearchParams} urlParams
 * @param {(minus?: Truthy) => void=} progress
 * @returns {Promise<any>}
 */
export const handleSuccessResponse = async (response, endpointUrl, requestOpt, urlParams, progress = () => { }) => {
    if (response.status === 204)
        return {};
    /** @type {any} */
    const data = await response.json();
    // @ts-expect-error becouse +null is 0
    const pc = +response.headers.get("x-pages");
    if (pc > 1) {
        LOG && log('found "x-pages" header, pages: %d', pc);
        const remData = await fetchP(endpointUrl, requestOpt, urlParams, pc, progress);
        if (isArray(data) && isArray(remData)) {
            return data.concat(remData);
        }
        else {
            if (remData) {
                Object.assign(data, remData);
                console.warn("maybe data is invalid, remain data:", remData);
            }
        }
    }
    return data;
};
const AdditionalUnauthorizedMessage = `
  ${"TIP".green}: By setting the token in ${"env.OAUTH_TOKEN".blue} you can make requests that require authentication.
`;
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
 * @throws {ESIRequestError}
 * @returns {Promise<never>}
 */
export const handleESIError = async (res, endpointUrl, abortable) => {
    const status = /** @type {TESIErrorStats} */ (res.status);
    /** @type {TESIErrorStatMap[typeof status]} */
    const esiError = await res.json();
    /** @type {TESIErrorWithStat<typeof status>} */
    const errorType = {
        status, ...esiError
    };
    log(errorType);
    if (status === 420) {
        abortable && abortable.abort();
        throw new ESIErrorLimitReachedError();
    }
    else {
        throw new ESIRequestError(`${res.statusText} (status=${status}, url=${endpointUrl})${status === 401 ? AdditionalUnauthorizedMessage : ""}`);
    }
};
/** @satisfies {TESIErrorStats[]} */
const ESIErrorStats = [
    400,
    401,
    403,
    404,
    420,
    422,
    500,
    503,
    504,
    520,
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
export function is(opt) {
    if (isNode) {
        return process.argv.includes(`-${opt}`);
    }
    else {
        const q = location.search || location.hash;
        if (q) {
            const entries = q.slice(1).split("&");
            for (const entry of entries) {
                const [key, /*value*/] = entry.split("=");
                if (key === opt)
                    return true;
            }
        }
    }
    return false;
}
/**
 * @template [T=undefined] - A specific string literal type to allow for type-safe return values.
 * @template {(select?: T) => unknown} [CB=(select?: T) => unknown]
 * @param {string} key
 * @param {CB} cb
 * @returns {ReturnType<CB>}
 */
export const selectFromEnv = (key, cb) => {
    /** @type {T=} */
    let select;
    if (isNode) {
        select = /** @type {T} */ (process.env[key]);
    }
    else if (typeof globalThis !== "undefined" && /** @type {any} */ (globalThis)[key]) {
        select = /** @type {any} */ (globalThis)[key];
    }
    return /** @type {ReturnType<CB>} */ (cb(select));
};
/**
 * NOTE: In `initOptions`, if `auth=true`, then `token` can be set to a valid `accessToken` to successfully complete an authenticated request.
 *
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
    };
    /** @type {Record<string, any>} */
    const qss = {
        language: "en",
    };
    /** @type {Record<string, string>} */
    const headers = {};
    if (opt.query) {
        const oqs = opt.query;
        for (const key in oqs)
            qss[key] = oqs[key];
    }
    if (opt.auth) {
        if (!opt.token) {
            throw new Error("Authentication required: missing `token`");
        }
        headers.authorization = `Bearer ${opt.token}`;
    }
    if (opt.body) {
        headers["content-type"] = "application/json";
        rqopt.body = JSON.stringify(opt.body);
    }
    if (opt.compatDate) {
        qss.compatibility_date = opt.compatDate;
    }
    rqopt.headers = headers;
    return { rqopt, qss };
};
/**
 * fetch the extra pages
 *
 *   + if the `x-pages` header property ware more than 1
 * @template {unknown} T
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {URLSearchParams} usp queries
 * @param {number} pc pageCount
 * @param {(minus?: number) => void=} progress
 * @returns {Promise<T | null>}
 */
export const fetchP = async (endpointUrl, rqopt, usp, pc, progress = () => { }) => {
    const rqs = [];
    for (let i = 2; i <= pc;) {
        usp.set("page", String(i++));
        progress();
        rqs.push(fetch(`${endpointUrl}?${usp + ""}`, rqopt).then(res => res.json()).catch(reason => {
            console.warn(reason);
            return [];
        }).finally(() => {
            progress(1);
        }));
    }
    return Promise.all(rqs).then(jsons => {
        if (isArray(jsons[0])) {
            /** @type {unknown[]} */
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
const CBT_RE = /{\w+}/g;
/** ### replace (C)urly (B)races (T)oken
 *
 * + Replace each `{…}` placeholder in the endpoint string with the corresponding ID.
 *
 * @example
 * "/characters/{character_id}/skills"
 * // ->
 * "/characters/<char.character_id>/skills"
 *
 * @template {unknown} T
 * @param {T} endpoint An endpoint template, e.g. "/characters/{character_id}/skills"
 * @param {number[]} ids An array of numbers to fill into each placeholder, in order of appearance
 * @returns {T} A fully-qualified endpoint string with all `{…}` tokens replaced by their IDs
 */
export const replaceCbt = (endpoint, ids) => {
    let idx = 0;
    return /** @type {T} */ (/** @type {string} */ (endpoint).replace(CBT_RE, () => String(ids[idx++])));
};
/**
 * @template {unknown} T
 * @param {T} endpoint this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter is forced to apply `latest`
 * @returns {string}
 */
export const curl = (endpoint) => {
    return `${BASE}/${/** @type {string} */ (endpoint).replace(/^\/+|\/+$/g, "")}/`;
};
/**
 * Type guard that checks whether the given object has a `pathParams` property
 * of type `number` or `number[]`.
 *
 * @template {Record<string, unknown>} T - The type of the object being checked.
 * @param {T} opt - The object to inspect.
 * @returns {opt is (T & { pathParams: number | number[] })}
 *   `true` if `opt` contains a `pathParams` property whose value is either
 *   a single number or an array of numbers, otherwise `false`.
 *
 * @date 2025/4/28
 */
export function hasPathParams(opt) {
    if (typeof opt !== "object" || opt === null)
        return false;
    return "pathParams" in opt && (typeof opt.pathParams === "number" || isArray(opt.pathParams));
}
/**
 *
 * @param {TAccessToken} accessToken OAuth 2.0 access token
 * @returns {TJWTPayload}
 */
export const getJWTPayload = (accessToken) => {
    const json = atob(accessToken.split(".")[1]);
    return JSON.parse(json);
};
/**
 * ### This feature is legacy
 *
 * + Use {@link getSDEVersion __`Get EVE OpenApi Static Data version`__}
 *
 * @date 2020/03/31
 * @version 2.1
 * @type {() => Promise<string>}
 */
export async function getSDEVersionLegacy() {
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
/**
 * @param {string} banner
 */
export const getUniversalLogger = (banner, logSelector = ".log-frame") => {
    return consoleUtil.getLogger(banner, logSelector);
};
export function getLogger() {
    const clog = consoleUtil.getLogger('- - -> Get the character data of "CCP Zoetrope"'.magenta);
    const rlog = consoleUtil.getLogger("- - -> Run ESI request".cyan);
    return { clog, rlog };
}
/**
 * Need typescript v5.5 later
 * @import * as ESI from "../dist/v2/index";
 * @typedef {ESI.TESIRequestFunctionMethods2<ESIRequestOptions>} TESIRequestFunctionMethods2
 */
/**
 * @typedef {TESIRequestFunctionSignature2<ESIRequestOptions> | TESIRequestFunctionMethods2} TPrependParams
 * @typedef {ReturnType<typeof fireWithoutAuth>} TFireReturn
 */
/**
 * #### Fire a request that does not require authentication.
 *
 * @type {TESIEnhancedRequestFunctionSignature<TPrependParams, ESIRequestOptions>}
 */
const fireWithoutAuth = (fn, method, endpoint, ...opt) => {
    const arg = opt.length ? opt[0] : void 0;
    if (typeof fn === "function") {
        return /** @type {TFireReturn} */ (
        // @ts-expect-error TODO: ts(2345) The argument type does not match the type of the specified parameter
        fn(method, endpoint, arg));
    }
    return /** @type {TFireReturn} */ (
    // @ts-expect-error TODO: ts(2345) The argument type does not match the type of the specified parameter
    fn[method](endpoint, arg));
};
/** @type {TAccessToken} */
const token = selectFromEnv("OAUTH_TOKEN", (/** @type {TAccessToken=} */ selected) => selected ?? "token.token.token");
const ID_SomeEVECharacter = (() => {
    if (token !== "token.token.token") {
        const payload = getJWTPayload(token);
        return +payload.sub.split(":")[2];
    }
    return 9000;
})();
/**
 * #### Fire a request that does not require authentication.
 *
 * + __CAVEAT:__ This function should only be used for testing.
 *
 * @param {TPrependParams} fn
 * @returns {Promise<void>}
 */
export async function fireRequestsDoesNotRequireAuth(fn) {
    const { clog, rlog } = getLogger();
    const ID_CCP_Zoetrope = 2112625428;
    try {
        clog();
        casefireWithoutAuth: {
            await fireWithoutAuth(fn, "get", `/characters/{character_id}/`, {
                pathParams: ID_CCP_Zoetrope
            }).then(log);
            clog('(portrait)');
            await fireWithoutAuth(fn, "get", `/characters/${ID_CCP_Zoetrope}/portrait/`).then(log);
            clog('(affiliation)');
            const affiliation = await fireWithoutAuth(fn, "post", "/characters/affiliation/", { body: [ID_CCP_Zoetrope] });
            log(affiliation);
            clog('(corporation)');
            await fireWithoutAuth(fn, "get", `/corporations/${affiliation[0].corporation_id}/`).then(log);
            rlog("get:/incursions/".green);
            await fireWithoutAuth(fn, "get", "/incursions/").then(log);
            if (is("withError")) {
                log(`Try character ${ID_SomeEVECharacter} assets request`);
                await fireWithoutAuth(fn, "get", "/characters/{character_id}/assets/", {
                    auth: true, token,
                    pathParams: ID_SomeEVECharacter,
                }).then(assets => {
                    log(assets.slice(0, 5));
                });
                log(`Try character ${ID_SomeEVECharacter} fittings request`);
                await fireWithoutAuth(fn, "get", `/characters/${ID_SomeEVECharacter}/fittings/`, {
                    auth: true,
                    token
                }).then(fittings => {
                    log(fittings.slice(0, 5));
                });
            }
        }
        rlog("post:/universe/ids/".green);
        const ids = await fireWithoutAuth(fn, "post", "/universe/ids/", { body: ["the forge", "plex"] });
        log(ids.inventory_types, ids.regions);
        const tidPLEX = ids?.inventory_types?.[0].id;
        rlog(`get:/markets/19000001/orders?type_id=${tidPLEX}, item PLEX`.green);
        const orders = await fireWithoutAuth(fn, "get", "/markets/19000001/orders/", {
            query: {
                order_type: "sell",
                type_id: tidPLEX
            }
        });
        log(orders.sort((a, b) => a.price - b.price).slice(0, 2));
        rlog("get:/universe/structures/?filter=market".green);
        const structures = await fireWithoutAuth(fn, "get", "/universe/structures/", {
            query: {
                filter: "market"
            }
        });
        log(`/universe/structures/[0]=${structures[0]}, length=${structures.length}`);
        let willFailed = await fireWithoutAuth(fn, "get", `/characters/${ID_SomeEVECharacter}/ship/`, {
            auth: true, token
        });
        log(`get:/characters/${ID_SomeEVECharacter}/ship/, returns:`, willFailed);
        await fireWithoutAuth(fn, "get", "/characters/{character_id}/search/", {
            pathParams: ID_SomeEVECharacter,
            query: {
                categories: ["inventory_type"],
                search: "plex"
            },
            auth: true,
            token
        }).then(log);
    }
    catch (e) {
        console.error("Failed to request -", e);
    }
}