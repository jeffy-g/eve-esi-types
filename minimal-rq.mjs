/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="./v2"/>
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
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
 * @typedef {import("./rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 */
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
// node scripts/minimal-rq.mjs
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
export const request = (method, endpoint, pathParams, opt) => {
    if (typeof pathParams === "number") {
        // @ts-ignore 
        pathParams = [pathParams];
    }
    if (Array.isArray(pathParams)) {
        // @ts-ignore actualy endp is string
        endpoint = util.replaceCbt(endpoint, pathParams);
    }
    // When only options are provided
    // @ts-ignore
    const actualOpt = /** @type {ESIRequestOptions} */ (opt || pathParams || {});
    const { rqopt, qss } = util.initOptions(method, actualOpt);
    // @ts-ignore actualy endp is string
    const endpointUrl = util.curl(endpoint);
    const url = `${endpointUrl}?${new URLSearchParams(qss) + ""}`;
    DEBUG && log(url);
    return fetch(url, rqopt).then(res => res.json()).catch(reason => {
        throw new util.ESIRequesError(reason.message ? reason.message : reason);
    });
};
// It should complete correctly.
/**
 * @param {TESIRequestFunctionSignature<ESIRequestOptions>} fn
 */
async function getEVEStatus(fn) {
    const sdeVersion = await util.getSDEVersion();
    log(`sdeVersion: ${sdeVersion}`.blue);
    await util.fireRequestsDoesNotRequireAuth(fn);
    return fn("get", "/status/");
}
// type following and run
// node minimal-rq.mjs
getEVEStatus(request).then(eveStatus => log(eveStatus));
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
