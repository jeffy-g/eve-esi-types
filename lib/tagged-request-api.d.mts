/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../dist/v2/esi-tagged-types"/>
import type { ESIRequestOptions } from "./rq-util.mjs";
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
export declare function decoreateESIRequestBody<Opt extends Record<string, unknown>>(requestBody: TESIRequestFunctionSignature2<Opt>): XESI.TaggedESIRequestMap2<Opt>;
/**
 * @import { ESIRequestOptions } from "./rq-util.mjs";
 */
/**
 * Injects the minimal implementation of ESI requests into `XESI.TaggedESIRequestMap2`.
 *
 * @since 2.x
 * @type {XESI.TaggedESIRequestMap2<ESIRequestOptions>}
 */
export declare const esi: import("../dist/v2/esi-tagged-types").TaggedESIRequestMap2<ESIRequestOptions>;
