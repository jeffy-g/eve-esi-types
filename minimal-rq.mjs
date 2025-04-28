/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="./dist/v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
import * as util from "./lib/rq-util.mjs";
import { request2 } from "./lib/request-api.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = util.getUniversalLogger("[request-mini]: ");
/**
 * @typedef {import("./dist/v2").IESIRequestFunction2<util.ESIRequestOptions>} IESIRequestFunction2
 * @typedef {import("./dist/v2").TESIRequestFunctionMethods2<util.ESIRequestOptions>} TESIRequestFunctionMethods2
 */
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
//
// Delegates implementation to `request` (TESIRequestFunctionMethods2)
//
const esiMethods = /** @type {TESIRequestFunctionMethods2} */ ({});
/** @satisfies {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
    esiMethods[method] = /** @type {TESIRequestFunctionEachMethod2<typeof method, util.ESIRequestOptions>} */ ((endpoint, opt) => {
        // @ts-expect-error ts(2345)
        return request2(method, endpoint, opt);
    });
});
// It should complete correctly.
/**
 * @param {IESIRequestFunction2} fn
 */
async function getEVEStatus2(fn) {
    await util.getSDEVersion().then(sdeVersion => log(`sdeVersion: ${sdeVersion}`.blue));
    const { clog, rlog } = util.getLogger();
    rlog("- - - - - - - > run as IESIRequestFunction2<ESIRequestOptions>".red, fn);
    await util.fireRequestsDoesNotRequireAuth(fn);
    CaseIESIRequestFunctionMethods: {
        rlog("- - - - - - - > run as TESIRequestFunctionMethods2<ESIRequestOptions>".red, esiMethods);
        await util.fireRequestsDoesNotRequireAuth(esiMethods);
    }
    CaseIESIRequestFunction2: {
        const ID_CCP_Zoetrope = 2112625428;
        // - - - - - - - - - - - -
        //       Character
        // - - - - - - - - - - - -
        // Here, I borrow data from "CCP Zoetrope".
        rlog("- - - - - - - > run as IESIRequestFunction2::TESIRequestFunctionMethods2<ESIRequestOptions>".red, fn);
        clog();
        await fn.get("/characters/{character_id}/", { pathParams: ID_CCP_Zoetrope }).then(log);
        clog('(portrait)');
        await fn.get(`/characters/${ID_CCP_Zoetrope}/portrait/`).then(log);
        clog('(affiliation)');
        const affiliation = await fn.post("/characters/affiliation/", { body: [ID_CCP_Zoetrope] });
        log(affiliation);
        clog('(corporation)');
        await fn.get(`/corporations/${affiliation[0].corporation_id}/`).then(log);
        rlog("get:/incursions/".green);
        await fn.get("/incursions/").then(log);
        // - - - - - - - - - - - -
        //     Miscellaneous
        // - - - - - - - - - - - -
        rlog("post:/universe/ids/".green);
        const ids = await fn.post("/universe/ids/", { body: ["the forge", "plex"] });
        log(ids.inventory_types, ids.regions);
        rlog(`get:/markets/${ids?.regions?.[0].id}/orders/?type_id=${ids?.inventory_types?.[0].id}, item PLEX`.green);
        const orders = await fn.get("/markets/{region_id}/orders/", {
            pathParams: ids?.regions?.[0].id || 0,
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
    getEVEStatus2(request2).then(eveStatus => log(eveStatus));
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
