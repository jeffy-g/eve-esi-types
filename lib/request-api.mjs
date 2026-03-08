/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../dist/v2"/>
import * as util from "./rq-util.mjs";
const log = util.getUniversalLogger("[request-api]: ");
const DEBUG = util.isDebug();
/**
 * @typedef {import("../dist/v2").IESIRequestFunction2<util.ESIRequestOptions>} IESIRequestFunction2
 * @typedef {import("../dist/v2").TESIRequestFunctionMethods2<util.ESIRequestOptions>} TESIRequestFunctionMethods2
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
export const request2 = /** @type {IESIRequestFunction2} */ (async (method, endpoint, opt) => {
    const nOpt = util.normalizeOptions([opt]);
    if (util.hasPathParams(nOpt)) {
        const pathParams = Array.isArray(nOpt.pathParams) ? nOpt.pathParams : [nOpt.pathParams];
        endpoint = util.replaceCbt(endpoint, pathParams);
    }
    const { rqopt, qss } = util.initOptions(method, nOpt);
    const endpointUrl = util.curl(endpoint);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    DEBUG && log(url);
    try {
        const res = await fetch(url, rqopt);
        if (util.isSuccess(res.status)) {
            return util.handleSuccessResponse(res, endpointUrl, rqopt, up);
        }
        throw await util.handleESIError(res, endpointUrl, nOpt.cancelable);
    }
    catch (e) {
        log(e);
    }
});
/** @type {TESIEntryMethod[]} */ (["get", "post", "put", "delete"]).forEach((method) => {
    request2[method] = /** @type {TESIRequestFunctionEachMethod2<typeof method, util.ESIRequestOptions>} */ ((endpoint, ...opt) => {
        // @ts-expect-error TODO: ts(2345)
        return request2(method, endpoint, ...opt);
    });
});