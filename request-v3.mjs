/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file request-v3.mts
 * @command node request-v3.mjs
 */
/// <reference types="./dist/v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
import { is, curl, replaceCbt, hasPathParams, getSDEVersion, normalizeOptions, initOptions, isDebug, fireRequestsDoesNotRequireAuth, isSuccess, handleESIError, handleSuccessResponse, } from "./lib/rq-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const isArray = Array.isArray;
/**
 * enable/disable console.log
 */
const LOG = isDebug();
/**
 * @typedef {import("./lib/rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 * @typedef {import("./lib/rq-util.mjs").ESIRequestError} ESIRequestError
 * @typedef {import("./lib/rq-util.mjs").Truthy} Truthy
 */
// - - - - - - - - - - - - - - - - - - - -
//        module vars, functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * Get the number of currently executing ESI requests
 */
let ax = 0;
/** @type {function(Truthy=): number} */
const progress = (minus) => minus ? ax-- : ax++;
/**
 * @returns Get The Current ESI request pending count.
 */
export const getRequestPending = () => ax;
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * fire ESI request ESIRequestOptions
 *
 * @throws {ESIRequestError}
 * @async
 */
export const fire = /** @type {TESIRequestFunctionSignature2<ESIRequestOptions>} */ (async (mthd, endp, ...opt) => {
    // When only options are provided
    const nOpt = normalizeOptions(opt);
    if (hasPathParams(nOpt)) {
        const pathParams = Array.isArray(nOpt.pathParams) ? nOpt.pathParams : [nOpt.pathParams];
        endp = replaceCbt(endp, pathParams);
    }
    const { rqopt, qss } = initOptions(mthd, nOpt);
    const endpointUrl = curl(endp);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    LOG && log(url);
    ax++;
    try {
        const res = await fetch(url, rqopt).finally(() => ax--);
        // The parameters are different for successful and error responses.
        if (isSuccess(res.status)) {
            return handleSuccessResponse(res, endpointUrl, rqopt, up, progress);
        }
        // else if (isError(status)) {}
        // Actually, throw Error
        throw await handleESIError(res, endpointUrl, nOpt.cancelable);
    }
    catch (e) {
        throw e;
    }
});
// It should complete correctly.
/**
 * @param {TESIRequestFunctionSignature2<ESIRequestOptions>} fn
 */
async function getEVEStatus(fn) {
    const sdeVersion = await getSDEVersion();
    log(`sdeVersion: ${sdeVersion}`.blue);
    await fireRequestsDoesNotRequireAuth(fn);
    return fn("get", "/status/");
}
// type following and run
// node request-v3.mjs
// or yarn test
if (!is("x")) {
    getEVEStatus(fire).then(eveStatus => log(eveStatus));
}
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
