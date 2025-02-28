/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import "colors.ts";
import type { TESIRequestFunctionMethods } from "../v2";
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
export declare const isDebug: () => boolean;
export declare const is: (opt: string) => boolean;
/**
 * @param {string} method
 * @param {ESIRequestOptions} opt
 * @returns
 */
export declare const initOptions: (method: string, opt: ESIRequestOptions) => {
    rqopt: RequestInit;
    qss: Record<string, string>;
};
/**
 * fetch the extra pages
 *
 *   + if the `x-pages` header property ware more than 1
 *
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {URLSearchParams} rqp queries
 * @param {number} pc pageCount
 * @param {(minus?: number) => void=} increment
 */
export declare const fetchP: <T extends unknown>(endpointUrl: string, rqopt: RequestInit, rqp: URLSearchParams, pc: number, increment?: (minus?: Truthy) => void) => Promise<T | null>;
/** ### replace (C)urly (B)races (T)oken
 *
 * @example
 * "/characters/{character_id}/skills"
 * // ->
 * "/characters/<char.character_id>/skills"
 *
 * @param {string} endpoint e.g - "/characters/{character_id}/"
 * @param {number[]} ids
 * @returns fragment of qualified endpoint uri or null.
 */
export declare const replaceCbt: (endpoint: string, ids: number[]) => string;
/**
 *
 * @param {string} endp this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter is forced to apply `latest`
 */
export declare const curl: (endp: string) => string;
/**
 * @date 2020/03/31
 * @version 2.1
 * @type {() => Promise<string>}
 */
export declare function getSDEVersion(): Promise<string>;
export declare function getLogger(): {
    clog: (...args: any[]) => void;
    rlog: (...args: any[]) => void;
};
/**
 * #### Fire a request that does not require authentication.
 *
 * @param {TESIRequestFunctionSignature<ESIRequestOptions> | TESIRequestFunctionMethods} fn
 */
export declare function fireRequestsDoesNotRequireAuth(fn: TESIRequestFunctionSignature<ESIRequestOptions> | TESIRequestFunctionMethods<ESIRequestOptions>): Promise<void>;
