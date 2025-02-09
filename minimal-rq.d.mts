/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import * as util from "./rq-util.mjs";
/**
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
 * @typedef {import("./rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 */
/** #### Sample of `TESIRequestFunctionSignature`
 *
 * + This is a minimal implementation using `TESIRequestFunctionSignature`.
 *   If the response contains "page", only the first page can be retrieved.
 *
 * @type {TESIRequestFunctionSignature<ESIRequestOptions>}
 * @param method - The HTTP method to use for the request
 * @param endpoint - The Path of the ESI endpoint to send the request to
 * @param pathParams - An object of parameters to include in the request
 * @param options - An object of options to include in the request
 * @returns A Promise object containing the response data
 * @throws {ESIRequesError}
 */
export declare const request: TESIRequestFunctionSignature<util.ESIRequestOptions>;
