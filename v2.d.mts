/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import type { TESIResponseOKMap } from "./v2";
import { type ESIRequestOptions } from "./rq-util.mjs";
/**
 * fire ESI request
 * @template {TESIEntryMethod} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {IsParameterizedPath<EP, number | number[], Opt>} P2
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
export declare function fire<
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M],
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>,
    P2 extends IsParameterizedPath<EP, number | number[], Opt>,
    R extends InferESIResponseResult<M, EP>
>(mthd: M, endp: EP, pathParams?: P2, opt?: Opt): Promise<R>;
