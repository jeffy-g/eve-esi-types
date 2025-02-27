/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
import * as util from "./rq-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const DEBUG = util.isDebug();
/**
 * @typedef {import("../v2").IESIRequestFunction<util.ESIRequestOptions>} IESIRequestFunction
 * @typedef {import("../v2").TESIRequestFunctionMethods<util.ESIRequestOptions>} TESIRequestFunctionMethods
 */
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
/** #### Sample of `TESIRequestFunctionSignature`
 *
 * + This is a minimal implementation using `TESIRequestFunctionSignature`.
 *   If the response contains "page", only the first page can be retrieved.
 *
 * @type {IESIRequestFunction}
 * @param method - The HTTP method to use for the request
 * @param endpoint - The Path of the ESI endpoint to send the request to
 * @param pathParams - An object of parameters to include in the request
 * @param options - An object of options to include in the request
 * @returns A Promise object containing the response data
 * @throws {ESIRequesError}
 */
// @ts-expect-error
export const request = async (method, endpoint, pathParams, opt) => {
    if (typeof pathParams === "number") {
        // @ts-expect-error
        pathParams = [pathParams];
    }
    if (Array.isArray(pathParams)) {
        // @ts-expect-error actualy endp is string
        endpoint = util.replaceCbt(endpoint, pathParams);
    }
    // When only options are provided
    const actualOpt = /** @type {NonNullable<typeof opt>} */ (opt || pathParams || {});
    const { rqopt, qss } = util.initOptions(method, actualOpt);
    // @ts-expect-error actualy endp is string
    const endpointUrl = util.curl(endpoint);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    DEBUG && log(url);
    try {
        return await fetch(url, rqopt).then(res => {
            if (res.status >= 400) {
                throw new util.ESIRequesError(`${res.statusText} (status=${res.status})`);
            }
            return res.json();
        });
    }
    catch (e) {
        log(e);
    }
};
//
// implements rest methods of `request` (IESIRequestFunction)
//
/** @type {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
    request[method] = /** @type {TESIRequestFunctionEachMethod<typeof method>} */ (function (endpoint, params, opt) {
        return this(method, endpoint, params, opt);
    });
});
