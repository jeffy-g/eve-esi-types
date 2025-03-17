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
import { request2 } from "./request-api.mjs";
/**
 * @import { TESIRequestFunctionMethods2 } from "../v2"
 */
/**
 * @typedef {`${string}${"" | `,${string}`}`} TMethodList
 */
/** @satisfies {`${XESI.ESITags}:${TMethodList}`[]} */
const ESITagMethodMapping = [
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
 * Decorates the ESI request body into a tagged ESI request map.
 *
 * @example
 *    import * as taggedApi from "eve-esi-types/lib/tagged-request-api.mjs";
 *
 *    const esiRequest = taggedApi.decoreateESIRequestBody(...);
 *    const ret = await esiRequest.universe.get("/universe/structures/", { query: { filter: "market" }});
 *
 * @template {Record<string, unknown>} Opt - The options type for the request.
 * @param {TESIRequestFunctionSignature2<Opt>} requestBody - The function signature for the ESI request.
 * @returns {XESI.TaggedESIRequestMap2<Opt>} - The tagged ESI request map.
 */
export function decoreateESIRequestBody(requestBody) {
    const rq = /** @type {XESI.TaggedESIRequestMap2<Opt>} */ ({});
    // DEVNOTE: 2025/03/08 - In reality, you only need one function instance for each of "get", "post", "put", and "delete",
    // so you can just refer to the cached functions as a map.
    const methodMap = /** @type {TESIRequestFunctionMethods2<Opt>} */ ({});
    /** @satisfies {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
        methodMap[method] = /** @type {TESIRequestFunctionEachMethod2<typeof method, Opt>} */ (
        // @ts-expect-error Type peeling due to differences in inference process
        (e, opt) => requestBody(method, e, opt));
    });
    for (const tagEntry of ESITagMethodMapping) {
        const [tag, methodList] = /** @type {[tag: XESI.ESITags, methods: TMethodList]} */ (tagEntry.split(":"));
        const methods = /** @type {TESIEntryMethod[]} */ (methodList.split(","));
        const entry = /** @type {XESI.ESITaggedEndpointRequest2<typeof tag, Opt>} */ ({});
        for (const method of methods) {
            // However, from the point of view of type annotation, the parameters are different, so you need to cast it as `as type` instead of `satisfies`.
            // @ts-expect-error
            entry[method] = /** @type {XESI.TaggedEndpointRequestFunction2<typeof method, typeof tag, Opt>} */ (methodMap[method]);
        }
        const camelCased = /** @type {XESI.LCamelCase<XESI.ESITags>} */ (tag[0].toLowerCase() + tag.slice(1).replace(/\s(.)/g, "$1"));
        rq[camelCased] = entry;
    }
    return Object.freeze(rq);
}
/**
 * @import { ESIRequestOptions } from "./rq-util.mjs";
 */
/**
 * Injects the minimal implementation of ESI requests into `XESI.TaggedESIRequestMap2`.
 *
 * @since 2.x
 * @type {XESI.TaggedESIRequestMap2<ESIRequestOptions>}
 */
export const esi = decoreateESIRequestBody(request2);
