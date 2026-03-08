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
import { is, curl, replaceCbt, hasPathParams, getSDEVersion,
normalizeOptions, initOptions, isDebug, fireRequestsDoesNotRequireAuth, isSuccess, handleESIError, handleSuccessResponse, } from "./lib/rq-util.mjs";
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
/**
 * Get the number of currently executing ESI requests
 */
let ax = 0;
/** @type {function(Truthy=): void} */
const progress = (minus) => {
    minus ? ax-- : ax++;
};
/**
 * @returns Get The Current ESI request pending count.
 */
export const getRequestPending = () => ax;
/**
 * Executes an HTTP request to the EVE ESI endpoint (OpenAPI-based).
 *
 * @throws {ESIRequestError}
 * @async
 */
export const fire = /** @type {TESIRequestFunctionSignature2<ESIRequestOptions>} */ (async (mthd, endp, ...opt) => {
    const nOpt = normalizeOptions(opt);
    if (hasPathParams(nOpt)) {
        const pathParams = isArray(nOpt.pathParams) ? nOpt.pathParams : [nOpt.pathParams];
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
        if (isSuccess(res.status)) {
            return handleSuccessResponse(res, endpointUrl, rqopt, up, progress);
        }
        throw await handleESIError(res, endpointUrl, nOpt.cancelable);
    }
    catch (e) {
        throw e;
    }
});
export const request = fire;
/**
 * @param {TESIRequestFunctionSignature2<ESIRequestOptions>} fn
 */
async function runESIRequestTest(fn) {
    const sdeVersion = await getSDEVersion();
    log(`sdeVersion: ${sdeVersion}`.blue);
    await fireRequestsDoesNotRequireAuth(fn);
    return fn("get", "/status/");
}
if (is("x")) {
    runESIRequestTest(fire).then(eveStatus => log(eveStatus));
}