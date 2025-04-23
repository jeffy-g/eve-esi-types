/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import * as util from "./rq-util.mjs";
import type { IESIRequestFunction2 } from "../v2";
/**
 * @typedef {import("../v2").IESIRequestFunction2<util.ESIRequestOptions>} IESIRequestFunction2
 * @typedef {import("../v2").TESIRequestFunctionMethods2<util.ESIRequestOptions>} TESIRequestFunctionMethods2
 */
/** #### Sample of `TESIRequestFunctionSignature`
 *
 * + This is a minimal implementation using `TESIRequestFunctionSignature`.
 *   If the response contains "page", only the first page can be retrieved.
 *
 * @type {IESIRequestFunction2}
 * @param method - The HTTP method to use for the request
 * @param endpoint - The Path of the ESI endpoint to send the request to
 * @param opt - An object of options to include in the request
 * @returns A Promise object containing the response data
 * @throws {util.ESIRequestError}
 */
export declare const request2: IESIRequestFunction2<util.ESIRequestOptions>;
