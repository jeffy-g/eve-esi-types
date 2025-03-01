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
 * @typedef {`${string}${"" | `,${string}`}`} TMethodList
 */
/** @satisfies {`${XESI.ESITags}:${TMethodList}`[]} */
const ESITagsWithMethodList = [
    "Alliance:get", "Assets:get,post",
    "Calendar:get,put", "Character:get,post",
    "Clones:get", "Contacts:get,post,put,delete",
    "Contracts:get", "Corporation:get",
    "Dogma:get", "Faction Warfare:get",
    "Fittings:get,post,delete", "Fleets:get,post,put,delete",
    "Incursions:get", "Industry:get",
    "Insurance:get", "Killmails:get",
    "Location:get", "Loyalty:get",
    "Mail:get,post,put,delete", "Market:get",
    "Opportunities:get", "Planetary Interaction:get",
    "Routes:get", "Search:get",
    "Skills:get", "Sovereignty:get",
    "Status:get", "Universe:get,post",
    "User Interface:post", "Wallet:get",
    "Wars:get"
];
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
    for (const tagEntry of ESITagsWithMethodList) {
        const [tag, methodList] = /** @type {[tag: XESI.ESITags, methods: TMethodList]} */ (tagEntry.split(":"));
        const methods = /** @type {TESIEntryMethod[]} */ (methodList.split(","));
        const entry = /** @type {XESI.ESITaggedEndpointRequest<typeof tag>} */ ({});
        for (const method of methods) {
            // @ts-ignore ignore ts(2590)
            entry[method] = /** @satisfies {XESI.TaggedEndpointRequestFunction<typeof method, typeof tag>} */ ((e, params, opt) => requestBody(method, e, params, opt));
        }
        const camelCased = /** @type {XESI.LCamelCase<XESI.ESITags>} */ (tag[0].toLowerCase() + tag.slice(1).replace(/\s(.)/g, "$1"));
        rq[camelCased] = entry;
    }
    return rq;
}
/**
 * Injects the minimal implementation of ESI requests into `XESI.TaggedESIRequestMap`.
 * @since 2.3
 */
export const esi = injectESIRequestBody(request);
