/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../v2/esi-tagged-types"/>
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
export declare function injectESIRequestBody(requestBody: TESIRequestFunctionSignature<{}>): XESI.TaggedESIRequestMap;
/**
 * Injects the minimal implementation of ESI requests into `XESI.TaggedESIRequestMap`.
 * @since 2.3
 */
export declare const esi: XESI.TaggedESIRequestMap;
