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
import type { TESIRequestFunctionMethods } from "../v2";
import type { TESIErrorStats } from "./esi-error-types";
/**
 * Dummy import
 * @import * as cc from "colors.ts";
 */
/**
 * will almost certainly be able to detect if you are in a nodejs environment
 *
 * @date 2020/5/9
 */
export declare const isNode: boolean;
/**
 * this always `https://esi.evetech.net`
 */
export declare const BASE = "https://esi.evetech.net";
export type Truthy = string | number | boolean;
/**
 * __{Header}.{Payload}.{Signature}__
 */
export type TAcccessToken = `${string}.${string}.${string}`;
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
     * cancel request immediately
     */
    cancelable?: AbortController;
    /**
     * Can be an empty object if no authentication is required.description
     */
    token?: TAcccessToken;
    /**
     * whether an authorization header is required
     *
     *   + When using the `Web Fetch API`, avoid extra `OPTIONS` requests and reduce extra http requests
     *
     * @date 2020/1/23
     */
    auth?: true;
};
/**
 * @typedef {string | number | boolean} Truthy
 */
/**
 * simple named error class.
 */
export declare class ESIRequesError extends Error {
}
/**
 * throws when x-esi-error-limit-remain header value is "0". (http status: 420)
 */
export declare class ESIErrorLimitReachedError extends ESIRequesError {
    constructor();
    valueOf(): number;
}
/**
 * @typedef {import("./rq-util.mjs").ESIRequestOptions} ESIRequestOptions
 */
/**
 * #### status: 200 | 201 | 204
 *
 *  + Returns a json object only if the status is `200` or `201`.
 *
 * @param {Response} response
 * @param {string} endpointUrl
 * @param {RequestInit} requestOpt
 * @param {URLSearchParams} urlParams
 * @param {(minus?: Truthy) => void=} increment
 * @returns {Promise<any>}
 */
export declare const handleSuccessResponse: (response: Response, endpointUrl: string, requestOpt: RequestInit, urlParams: URLSearchParams, increment?: (minus?: Truthy) => void) => Promise<any>;
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
 * @param {AbortController} abortable
 * @returns {Promise<void>}
 */
export declare const handleESIError: (res: Response, endpointUrl: string, abortable?: AbortController) => Promise<void>;
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
 * @template {any} T
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {URLSearchParams} rqp queries
 * @param {number} pc pageCount
 * @param {(minus?: number) => void=} increment
 * @returns {Promise<T | null>}
 */
export declare const fetchP: <T extends unknown>(endpointUrl: string, rqopt: RequestInit, rqp: URLSearchParams, pc: number, increment?: (minus?: Truthy) => void) => Promise<T | null>;
/** ### replace (C)urly (B)races (T)oken
 *
 * @example
 * "/characters/{character_id}/skills"
 * // ->
 * "/characters/<char.character_id>/skills"
 *
 * @template {unknown} T
 * @param {T} endpoint e.g - "/characters/{character_id}/"
 * @param {number[]} ids
 * @returns {T} fragment of qualified endpoint uri or null.
 */
export declare const replaceCbt: <T extends unknown>(endpoint: T, ids: number[]) => T;
/**
 *
 * @template {unknown} T
 * @param {T} endp this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter is forced to apply `latest`
 * @returns {string}
 */
export declare const curl: <T extends unknown>(endp: T) => string;
/**
 * @date 2020/03/31
 * @version 2.1
 * @type {() => Promise<string>}
 */
export declare function getSDEVersion(): Promise<string>;
export declare const getUniversalLogger: (banner: string) => (...args: any[]) => void;
export declare function getLogger(): {
    clog: (...args: any[]) => void;
    rlog: (...args: any[]) => void;
};
/**
 * #### Fire a request that does not require authentication.
 *
 * @param {TESIRequestFunctionSignature<ESIRequestOptions> | TESIRequestFunctionMethods} fn
 * @returns {Promise<void>}
 */
export declare function fireRequestsDoesNotRequireAuth(fn: TESIRequestFunctionSignature<ESIRequestOptions> | TESIRequestFunctionMethods<ESIRequestOptions>): Promise<void>;
