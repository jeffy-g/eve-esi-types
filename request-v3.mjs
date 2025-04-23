/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="./v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
// import type { TESIResponseOKMap, TPathParamsNever } from "./v2";
// import type { TESIResponseOKMap } from "eve-esi-types";
import { is, curl, replaceCbt, getSDEVersion, initOptions, isDebug, fireRequestsDoesNotRequireAuth, isSuccess, handleESIError, handleSuccessResponse } from "./lib/rq-util.mjs";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const isArray = Array.isArray;
/**
 * enable/disable console.log
 */
let LOG = isDebug();
/**
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
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
const incrementAx = (minus) => minus ? ax-- : ax++;
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
export const fire = /** @type {TESIRequestFunctionSignature2<ESIRequestOptions>} */ (async (mthd, endp, opt) => {
    // When only options are provided
    const actualOpt = /** @type {NonNullable<typeof opt> & ESIRequestOptions} */ (opt || {});
    /** @type {number[]=} */
    let pathParams;
    if (actualOpt.pathParams) {
        pathParams = typeof actualOpt.pathParams === "number" ? [actualOpt.pathParams] : isArray(actualOpt.pathParams) ? actualOpt.pathParams : void 0;
    }
    if (isArray(pathParams)) {
        endp = replaceCbt(endp, pathParams);
    }
    const { rqopt, qss } = initOptions(mthd, actualOpt);
    const endpointUrl = curl(endp);
    const up = new URLSearchParams(qss);
    const url = `${endpointUrl}${up.size ? `?${up}` : ""}`;
    LOG && log(url);
    ax++;
    try {
        const res = await fetch(url, rqopt).finally(() => ax--);
        // The parameters are different for successful and error responses.
        if (isSuccess(res.status)) {
            return handleSuccessResponse(res, endpointUrl, rqopt, up, incrementAx);
        }
        // else if (isError(status)) {}
        // Actually, throw Error
        throw await handleESIError(res, endpointUrl, actualOpt.cancelable);
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
