/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="./v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
import * as util from "./rq-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const DEBUG = util.isDebug();
/**
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
 * @typedef {import("./rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 * @typedef {import("./v2").IESIRequestFunction<util.ESIRequestOptions>} IESIRequestFunction
 * @typedef {import("./v2").TESIRequestFunctionMethods<util.ESIRequestOptions>} TESIRequestFunctionMethods
 */
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
/** #### Sample of `TESIRequestFunctionSignature`
 *
 * + This is a minimal implementation using `TESIRequestFunctionSignature`.
 *   If the response contains "page", only the first page can be retrieved.
 *
 * @type {IESIRequestFunction}
 * @param method - The HTTP method to use for the request
 * @param endpoint - The Path of the ESI endpoint to send the request to
 * @param pathParams - An object of parameters to include in the request
 * @param options - An object of options to include in the request
 * @returns A Promise object containing the response data
 * @throws {ESIRequesError}
 */
// @ts-expect-error
export const request = (method, endpoint, pathParams, opt) => {
    if (typeof pathParams === "number") {
        // @ts-expect-error
        pathParams = [pathParams];
    }
    if (Array.isArray(pathParams)) {
        // @ts-expect-error actualy endp is string
        endpoint = util.replaceCbt(endpoint, pathParams);
    }
    // When only options are provided
    const actualOpt = /** @type {NonNullable<typeof opt>} */ (opt || pathParams || {});
    const { rqopt, qss } = util.initOptions(method, actualOpt);
    // @ts-expect-error actualy endp is string
    const endpointUrl = util.curl(endpoint);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    DEBUG && log(url);
    return fetch(url, rqopt).then(res => res.json()).catch(reason => {
        throw new util.ESIRequesError(reason.message ? reason.message : reason);
    });
};
//
// implements rest methods of `request` (IESIRequestFunction)
//
/** @type {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
    request[method] = /** @type {TESIRequestFunctionEachMethod<typeof method>} */ (function (endpoint, params, opt) {
        return this(method, endpoint, params, opt);
    });
});
//
// Delegates implementation to `request` (TESIRequestFunctionMethods)
//
const esiMethods = /** @type {TESIRequestFunctionMethods} */ ({});
["get", "post", "put", "delete"].forEach((method) => {
    esiMethods[method] = function (endpoint, params, opt) {
        // @ts-ignore
        return request(method, endpoint, params, opt);
    };
});
// It should complete correctly.
/**
 * @param {IESIRequestFunction} fn
 */
async function getEVEStatus(fn) {
    await util.getSDEVersion().then(sdeVersion => log(`sdeVersion: ${sdeVersion}`.blue));
    await util.fireRequestsDoesNotRequireAuth(fn);
    CaseIESIRequestFunctionMethods: {
        await util.fireRequestsDoesNotRequireAuth(esiMethods);
    }
    const { clog, rlog } = util.getLogger();
    CaseIESIRequestFunction: {
        // - - - - - - - - - - - -
        //       Character
        // - - - - - - - - - - - -
        // Here, I borrow data from "CCP Zoetrope".
        rlog("- - - - - - - > run as IESIRequestFunction<ESIRequestOptions>".red);
        clog();
        await fn.get("/characters/{character_id}/", 2112625428).then(log);
        clog('(portrait)');
        await fn.get("/characters/{character_id}/portrait/", 2112625428).then(log);
        clog('(affiliation)');
        const affiliation = await fn.post("/characters/affiliation/", { body: [2112625428] });
        log(affiliation);
        clog('(corporation)');
        await fn.get("/corporations/{corporation_id}/", affiliation[0].corporation_id).then(log);
        rlog("get:/incursions/".green);
        await fn.get("/incursions/").then(log);
        // - - - - - - - - - - - -
        //     Miscellaneous
        // - - - - - - - - - - - -
        rlog("post:/universe/ids/".green);
        const ids = await fn.post("/universe/ids/", { body: ["the forge", "plex"] });
        log(ids.inventory_types, ids.regions);
        rlog(`get:/markets/${ids?.regions?.[0].id}/orders/?type_id=${ids?.inventory_types?.[0].id}, item PLEX`.green);
        const orders = await fn.get("/markets/{region_id}/orders/", ids?.regions?.[0].id, {
            query: {
                // page: 1,
                order_type: "sell",
                type_id: ids?.inventory_types?.[0].id
            }
        });
        log(orders.sort((a, b) => a.price - b.price).slice(0, 2));
    }
    return fn.get("/status/");
}
// type following and run
// node minimal-rq.mjs -debug
getEVEStatus(request).then(eveStatus => log(eveStatus));
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
