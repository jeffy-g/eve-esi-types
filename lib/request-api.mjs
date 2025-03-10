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
const log = util.getUniversalLogger("[request-api]: ");
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
 * @throws {util.ESIRequestError}
 */
export const request = /** @type {IESIRequestFunction} */ (async (method, endpoint, pathParams, opt) => {
    if (typeof pathParams === "number") {
        pathParams = /** @type {typeof pathParams} */ ([pathParams]);
    }
    if (Array.isArray(pathParams)) {
        endpoint = util.replaceCbt(endpoint, pathParams);
    }
    // When only options are provided
    const actualOpt = /** @type {NonNullable<typeof opt>} */ (opt || pathParams || {});
    const { rqopt, qss } = util.initOptions(method, actualOpt);
    const endpointUrl = util.curl(endpoint);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    DEBUG && log(url);
    try {
        const res = await fetch(url, rqopt);
        // The parameters are different for successful and error responses.
        if (util.isSuccess(res.status)) {
            return util.handleSuccessResponse(res, endpointUrl, rqopt, up);
        }
        // else if (isError(status)) {}
        // Actually, throw Error
        throw await util.handleESIError(res, endpointUrl, actualOpt.cancelable);
    }
    catch (e) {
        log(e);
    }
});
//
// implements rest methods of `request` (IESIRequestFunction)
//
/** @type {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
    request[method] = /** @type {TESIRequestFunctionEachMethod<typeof method>} */ (function (endpoint, params, opt) {
        return this(method, endpoint, params, opt);
    });
});
