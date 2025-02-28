/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../v2/esi-tagged-types"/>
/**
 * @file eve-esi-types/lib/tagged-request-api.mts
 */
import { request } from "./request-api.mjs";
/**
 * @typedef {import("../v2/esi-tagged-types")} Dummy
 */
/** @satisfies {XESI.ESITags[]} */
const ESI_TAGs = [
    "Alliance", "Assets",
    "Calendar", "Character",
    "Clones", "Contacts",
    "Contracts", "Corporation",
    "Dogma", "Faction Warfare",
    "Fittings", "Fleets",
    "Incursions", "Industry",
    "Insurance", "Killmails",
    "Location", "Loyalty",
    "Mail", "Market",
    "Opportunities", "Planetary Interaction",
    "Routes", "Search",
    "Skills", "Sovereignty",
    "Status", "Universe",
    "User Interface", "Wallet",
    "Wars"
];
/** @satisfies {TESIEntryMethod[]} */
const METHODs = ["get", "post", "put", "delete"];
/**
 * `esi-tagged-types` and `injectESIRequestBody` allow for more intuitive use of ESI requests based on the "tags" defined in the EVE Swagger JSON.
 *
 * + The `ESI request API object` constructed by `injectESIRequestBody` lists narrowed endpoints by accessing the camel-cased "tags" members.
 *
 * @example
 *    import * as taggedApi from "eve-esi-types/lib/tagged-request-api.mjs";
 *
 *    const esiRequest = taggedApi.injectESIRequestBody(...);
 *    const ret = await esiRequest.universe.get("/universe/structures/", { query: { filter: "market" }});
 *
 * @param {TESIRequestFunctionSignature<{}>} requestBody
 * @returns {XESI.TaggedESIRequestMap}
 * @since 2.3
 */
// Here, functions are implemented for "get", "post", "put", and "delete" for convenience.
// However, in the completion listed by `injectESIRequestBody(<requestBody>).`, only the inferred methods will be listed.
export function injectESIRequestBody(requestBody) {
    const rq = /** @type {XESI.TaggedESIRequestMap} */ ({});
    for (const tag of ESI_TAGs) {
        const camel = 
        /** @type {XESI.LCamelCase<XESI.ESITags>} */ (tag[0].toLowerCase() + tag.slice(1).replace(/\s(\w)/g, "$1"));
        const entry = /** @type {XESI.ESITaggedEndpointRequest<typeof tag>} */ ({});
        for (const method of METHODs) {
            // @ts-ignore ignore ts(2590)
            entry[method] = /** @satisfies {XESI.TaggedEndpointRequestFunction<typeof method, typeof tag>} */ ((e, params, opt) => requestBody(method, e, params, opt));
        }
        rq[camel] = entry;
    }
    return rq;
}
/**
 * Injects the minimal implementation of ESI requests into `XESI.TaggedESIRequestMap`.
 * @since 2.3
 */
export const esi = injectESIRequestBody(request);
