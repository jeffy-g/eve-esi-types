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
 * @import { TESIRequestFunctionMethods } from "../v2"
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
 * @template {Record<string, unknown>} Opt - The options type for the request.
 * @param {TESIRequestFunctionSignature<Opt>} requestBody - The function signature for the ESI request.
 * @returns {XESI.TaggedESIRequestMap} - The tagged ESI request map.
 * @since 2.3
 */
export function injectESIRequestBody(requestBody) {
    const rq = /** @type {XESI.TaggedESIRequestMap<Opt>} */ ({});
    // DEVNOTE: 2025/03/08 - In reality, you only need one function instance for each of "get", "post", "put", and "delete",
    // so you can just refer to the cached functions as a map.
    const methodMap = /** @type {TESIRequestFunctionMethods<Opt>} */ ({});
    /** @type {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
        methodMap[method] = /** @type {TESIRequestFunctionEachMethod<typeof method, Opt>} */ ((e, params, opt) => requestBody(method, e, params, opt));
    });
    for (const tagEntry of ESITagMethodMapping) {
        const [tag, methodList] = /** @type {[tag: XESI.ESITags, methods: TMethodList]} */ (tagEntry.split(":"));
        const methods = /** @type {TESIEntryMethod[]} */ (methodList.split(","));
        const entry = /** @type {XESI.ESITaggedEndpointRequest<typeof tag, Opt>} */ ({});
        for (const method of methods) {
            // However, from the point of view of type annotation, the parameters are different, so you need to cast it as `as type` instead of `satisfies`.
            // @ts-expect-error
            entry[method] = /** @type {XESI.TaggedEndpointRequestFunction<typeof method, typeof tag, Opt>} */ (methodMap[method]);
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
 * Injects the minimal implementation of ESI requests into `XESI.TaggedESIRequestMap`.
 *
 * @since 2.3
 * @type {XESI.TaggedESIRequestMap<ESIRequestOptions>}
 */
export const esi = injectESIRequestBody(request);
