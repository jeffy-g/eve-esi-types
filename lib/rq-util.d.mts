/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="../dist/v2"/>
// - - - - - - - - - - - - - - - - - - - -
//               imports
// - - - - - - - - - - - - - - - - - - - -
/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import type { TESIRequestFunctionMethods2 } from "../dist/v2";
import type { TESIErrorStats } from "./esi-error-types";
export { isNode } from "./constants.mjs";
/**
 * this always `https://esi.evetech.net`
 */
export declare const BASE = "https://esi.evetech.net";
export type Truthy = string | number | boolean;
/**
 * __{Header}.{Payload}.{Signature}__
 */
export type TAccessToken = `${string}.${string}.${string}`;
export type ESIRequestOptions = {
    /**
     * query params for ESI request.
     */
    query?: Record<string, any>;
    /**
     * will need it for `POST` request etc.
     */
    body?: any;
    /**
     * whether an authorization header is required
     *
     *   + When using the `Web Fetch API`, avoid extra `OPTIONS` requests and reduce extra http requests
     *
     * @date 2020/1/23
     */
    auth?: true;
    /**
     * @date 2025/3/13
     * @since v3.0.0
     */
    pathParams?: number | [number, number];
    /**
     * Can be an empty object if no authentication is required.description
     */
    token?: TAccessToken;
    /**
     * cancel request immediately
     */
    cancelable?: AbortController;
};
/**
 * type of the JWT token `payload` section
 */
export declare type TJWTPayload = {
    /** scopes. */
    scp: string[];
    /** uuid of the token */
    jti: string;
    /** jwt type */
    kid: string;
    /** contains EVE character ID.
     * ```
     * "CHARACTER:EVE:<character_id>"
     * ```
     */
    sub: `CHARACTER:EVE:${number}`;
    /** Application client ID. */
    azp: string;
    /** EVE character name. */
    name: string;
    /** owner hash. */
    owner: string;
    /** expire date as 1/1000. (UNIX timestamp) */
    exp: number;
    /** issuer host name. */
    iss: string;
};
/**
 * @import * as ESIUtil from "./rq-util.mjs";
 * @typedef {ESIUtil.Truthy} Truthy
 * @typedef {ESIUtil.TAccessToken} TAccessToken
 * @typedef {ESIUtil.TJWTPayload} TJWTPayload
 * @typedef {ESIUtil.ESIRequestOptions} ESIRequestOptions
 */
/**
 * simple named error class.
 */
export declare class ESIRequestError extends Error {
}
/**
 * throws when x-esi-error-limit-remain header value is "0". (http status: 420)
 */
export declare class ESIErrorLimitReachedError extends ESIRequestError {
    constructor();
    valueOf(): number;
}
/**
 * @template T
 * @template {Record<string, unknown>} O
 * @param {[T] | [(T | undefined)?]} opt
 * @returns {NonNullable<T> & O}
 */
export declare const normalizeOptions: <T extends unknown, O extends Record<string, unknown> = ESIRequestOptions>(opt: [T] | [(T | undefined)?]) => (NonNullable<T> & O);
/**
 * #### status: 200 | 201 | 204
 *
 *  + Returns a json object only if the status is `200` or `201`.
 *
 * @param {Response} response
 * @param {string} endpointUrl
 * @param {RequestInit} requestOpt
 * @param {URLSearchParams} urlParams
 * @param {(minus?: Truthy) => void=} progress
 * @param {true=} allowFetchPages 2025/4/26
 * @returns {Promise<any>}
 */
export declare const handleSuccessResponse: (response: Response, endpointUrl: string, requestOpt: RequestInit, urlParams: URLSearchParams, progress?: (minus?: Truthy) => void, allowFetchPages?: true) => Promise<any>;
/**
 * @import {
 *     TESIErrorStats,
 *     TESIErrorStatMap,
 *     TESIErrorWithStat
 * } from "./esi-error-types";
 */
/**
 * #### status: (400 | 401 | 403 | 404 | 420 | 422) or (500 | 503 | 504 | 520)
 *
 * @param {Response} res
 * @param {string} endpointUrl
 * @param {AbortController=} abortable
 * @throws {ESIRequestError}
 * @returns {Promise<never>}
 */
export declare const handleESIError: (res: Response, endpointUrl: string, abortable?: AbortController) => Promise<never>;
/**
 * @param {number} stat
 * @returns {stat is 200 | 201 | 204}
 */
export declare const isSuccess: (stat: number) => stat is 200 | 201 | 204;
/**
 * @param {number} stat
 * @returns {stat is TESIErrorStats}
 */
export declare const isError: (stat: number) => stat is TESIErrorStats;
/**
 * @returns {boolean}
 */
export declare const isDebug: () => boolean;
/**
 * @param {string} opt
 * @returns {boolean}
 */
export declare const is: (opt: string) => boolean;
/**
 * NOTE: In `initOptions`, if `auth=true`, then `token` can be set to a valid `accessToken` to successfully complete an authenticated request.
 *
 * @param {string} method
 * @param {ESIRequestOptions} opt
 * @returns {{ rqopt: RequestInit, qss: Record<string, any> }}
 */
export declare const initOptions: (method: string, opt: ESIRequestOptions) => {
    rqopt: RequestInit;
    qss: Record<string, any>;
};
/**
 * fetch the extra pages
 *
 *   + if the `x-pages` header property ware more than 1
 * @template {unknown} T
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {URLSearchParams} usp queries
 * @param {number} pc pageCount
 * @param {(minus?: number) => void=} progress
 * @returns {Promise<T | null>}
 */
export declare const fetchP: <T extends unknown>(endpointUrl: string, rqopt: RequestInit, usp: URLSearchParams, pc: number, progress?: (minus?: Truthy) => void) => Promise<T | null>;
/** ### replace (C)urly (B)races (T)oken
 *
 * + Replace each `{…}` placeholder in the endpoint string with the corresponding ID.
 *
 * @example
 * "/characters/{character_id}/skills"
 * // ->
 * "/characters/<char.character_id>/skills"
 *
 * @template {unknown} T
 * @param {T} endpoint An endpoint template, e.g. "/characters/{character_id}/skills"
 * @param {number[]} ids An array of numbers to fill into each placeholder, in order of appearance
 * @returns {T} A fully-qualified endpoint string with all `{…}` tokens replaced by their IDs
 */
export declare const replaceCbt: <T extends unknown>(endpoint: T, ids: number[]) => T;
/**
 * @template {unknown} T
 * @param {T} endpoint this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter is forced to apply `latest`
 * @returns {string}
 */
export declare const curl: <T extends unknown>(endpoint: T) => string;
/**
 * Type guard that checks whether the given object has a `pathParams` property
 * of type `number` or `number[]`.
 *
 * @template {Record<string, unknown>} T - The type of the object being checked.
 * @param {T} opt - The object to inspect.
 * @returns {opt is (T & { pathParams: number | number[] })}
 *   `true` if `opt` contains a `pathParams` property whose value is either
 *   a single number or an array of numbers, otherwise `false`.
 *
 * @date 2025/4/28
 */
export declare function hasPathParams<T extends Record<string, unknown>>(opt: T): opt is (T & {
    pathParams: number | number[];
});
/**
 *
 * @param {string} accessToken OAuth 2.0 access token
 * @returns {TJWTPayload}
 */
export declare const getJWTPayload: (accessToken: string) => TJWTPayload;
/**
 * @date 2020/03/31
 * @version 2.1
 * @type {() => Promise<string>}
 */
export declare function getSDEVersion(): Promise<string>;
/**
 * @param {string} banner
 */
export declare const getUniversalLogger: (banner: string, logSelector?: string) => (...args: any[]) => void;
export declare function getLogger(): {
    clog: (...args: any[]) => void;
    rlog: (...args: any[]) => void;
};
type TPrependParams = TESIRequestFunctionSignature2<ESIRequestOptions> | TESIRequestFunctionMethods2<ESIRequestOptions>;
/**
 * #### Fire a request that does not require authentication.
 *
 * + __CAVEAT:__ This function should only be used for testing.
 *
 * @param {TPrependParams} fn
 * @returns {Promise<void>}
 */
export declare function fireRequestsDoesNotRequireAuth(fn: TPrependParams): Promise<void>;
