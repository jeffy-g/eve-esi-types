/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import type { TESIResponseOKMap } from "./v2";
import { type ESIRequestOptions } from "./lib/rq-util.mjs";
/**
 * @returns Get The Current ESI request pending count.
 */
export declare const getRequestPending: () => number;
/**
 * fire ESI request
 * @template {TESIEntryMethod} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {IfParameterizedPath<EP, Opt>} P2
 * @template {IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>} Opt
 * @template {InferESIResponseResult<M, EP>} R
 *
 * @param {M} mthd
 * @param {EP} endp - The endpoint to request.
 * @param {Opt} [opt] - default is empty object {}. `body` is json string
 * @param {P2} [pathParams] - Optional path parameters.
 * @returns {Promise<R>} - The response from the endpoint.
 * @throws
 * @async
 */
export declare function fire<M extends TESIEntryMethod, EP extends keyof TESIResponseOKMap[M], P2 extends IfParameterizedPath<EP, Opt>, Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>, R extends InferESIResponseResult<M, EP>>(mthd: M, endp: EP, pathParams?: P2, opt?: Opt): Promise<R>;
