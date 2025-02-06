/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import type { TESIResponseOKMap } from "./src";
type TRequestMethod = "get" | "post" | "put" | "delete";
/**
 * __{Header}.{Payload}.{Signature}__
 */
type TAcccessToken = `${string}.${string}.${string}`;
type ESIRequestOptions = {
    /**
     * query params for ESI request.
     */
    query?: Record<string, any>;
    /**
     * will need it for `POST` request etc.
     */
    body?: any;
    /**
     * if want response data with ignore error then can be set to `true`.
     */
    ignoreError?: boolean;
    /**
     * cancel request immediately
     */
    cancelable?: AbortController;
    /**
     * Can be an empty object if no authentication is required.description
     */
    token?: TAcccessToken;
};
/**
 * fire ESI request
 * @template {"get" | "post" | "put" | "delete"} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {number | number[] | ESIRequestOptions} Opt
 * @template {TESIResponseOKMap[M][EP]} R
 *
 * @param {M} mthd
 * @param {EP} endp - The endpoint to request.
 * @param {Opt} [pathParams] - Optional path parameters.
 * @param {ESIRequestOptions} [opt] - default is empty object {}. `body` is json string
 * @returns {Promise<R>} - The response from the endpoint.
 * @throws
 * @async
 */
export declare function fire<
    M extends TRequestMethod,
    EP extends keyof TESIResponseOKMap[M],
    Opt extends number | number[] | ESIRequestOptions,
    R extends TESIResponseOKMap[M][EP]
>(
    mthd: M, endp: EP, pathParams?: Opt, opt?: ESIRequestOptions
): Promise<R>;
