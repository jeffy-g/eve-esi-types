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
import * as util from "./lib/rq-util.mjs";
import { request } from "./lib/request-api.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
/**
 * @typedef {import("./v2").IESIRequestFunction<util.ESIRequestOptions>} IESIRequestFunction
 * @typedef {import("./v2").TESIRequestFunctionMethods<util.ESIRequestOptions>} TESIRequestFunctionMethods
 */
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
//
// Delegates implementation to `request` (TESIRequestFunctionMethods)
//
const esiMethods = /** @type {TESIRequestFunctionMethods} */ ({});
/** @type {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
    esiMethods[method] = /** @type {TESIRequestFunctionEachMethod<typeof method>} */ (function (endpoint, params, opt) {
        return request(method, endpoint, params, opt);
    });
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
        const ID_CCP_Zoetrope = 2112625428;
        // - - - - - - - - - - - -
        //       Character
        // - - - - - - - - - - - -
        // Here, I borrow data from "CCP Zoetrope".
        rlog("- - - - - - - > run as IESIRequestFunction<ESIRequestOptions>".red);
        clog();
        await fn.get("/characters/{character_id}/", ID_CCP_Zoetrope).then(log);
        clog('(portrait)');
        await fn.get("/characters/{character_id}/portrait/", ID_CCP_Zoetrope).then(log);
        clog('(affiliation)');
        const affiliation = await fn.post("/characters/affiliation/", { body: [ID_CCP_Zoetrope] });
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
const runTest = () => {
    getEVEStatus(request).then(eveStatus => log(eveStatus));
};
// type following and run
// node minimal-rq.mjs -debug
if (!util.is("x")) {
    runTest();
}
else {
    // @ts-ignore
    globalThis.runTest = runTest;
    if (!util.isNode) {
        const button = document.getElementById("run-test");
        if (button) {
            button.addEventListener("click", () => runTest());
        }
    }
}
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
