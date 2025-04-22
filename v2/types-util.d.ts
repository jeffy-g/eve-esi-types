/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * THIS DTS IS AUTO GENERATED, DO NOT EDIT
 * 
 * @file eve-esi-types/v2/types-util.d.ts
 * @summary This file is auto-generated and defines version 3.2.4 of the EVE Online ESI response types.
 */
import type { TESIResponseOKMap } from "./response-map.d.ts";


/**
 * Represents a function that can make ESI requests with various HTTP methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * ```ts
 * // @ ts-expect-error
 * export const request: IESIRequestFunction2<ESIRequestOptions> = (method, endpoint, opt) => {
 * // Implementation for "get" | "post" | "put" | "delete" request
 * };
 * // You can easily implement "get" | "post" | "put" | "delete" requests
 * // with code like the following:
 * (["get", "post", "put", "delete"] as (keyof typeof request)[]).forEach((method) => {
 *     request[method] = function (this: typeof request, endpoint, opt) {
 *         return this(method, endpoint, opt);
 *     } as TESIRequestFunctionEachMethod2<typeof method>;
 * });
 * ```
 */
export interface IESIRequestFunction2<ActualOpt extends Record<string, unknown>>
  extends TESIRequestFunctionSignature2<ActualOpt>, TESIRequestFunctionMethods2<ActualOpt> {
}

/**
 * Represents the methods available for making ESI requests.
 * 
 *  + This interface is used when you already have implementation code such as  
 *    TESIRequestFunctionSignature2 and you want to implement additional shorthand methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * @example
 * ```ts
 * export const request: TESIRequestFunctionSignature2<ESIRequestOptions> = (method, endpoint, opt) => {
 * // Implementation for "get" | "post" | "put" | "delete" request
 * };
 * // You can easily implement "get" | "post" | "put" | "delete" requests
 * // with code like the following:
 * const esiMethods = {} as TESIRequestFunctionMethods2<ESIRequestOptions>;
 * (["get", "post", "put", "delete"] as (keyof TESIRequestFunctionMethods2)[]).forEach((method) => {
 *     esiMethods[method] = function (endpoint, opt) {
 *         return request(method, endpoint, opt);
 *     } as TESIRequestFunctionEachMethod2<typeof method>;
 * });
 * ```
 */
export type TESIRequestFunctionMethods2<ActualOpt extends Record<string, unknown>> = {
  [method in TESIEntryMethod]: TESIRequestFunctionEachMethod2<method, ActualOpt>;
}

/**
 * List of "x-cached-seconds"
 * 
 * ```ts
 * // const cacheSecGet: 3600 | 300 | 604800 | 120 | 5 | 600 | 86400 | 60 | 30 | 1200 | 1800 | 30758400
 * const cacheSecGet: TESICachedSeconds<"get">;
 * // const cache5sec: 5
 * const cache5s: TESICachedSeconds<"put">;
 * // const cache3600s: 3600
 * const cache3600s: TESICachedSeconds<"post">;
 * // "/characters/affiliation/"
 * const cache3600sEndpoint: TESICachedSeconds<"post", 1>;
 * ```
 */
export declare type TESICachedSeconds<
  Method extends TESIEntryMethod, AsEndpoint = 0
> = {
  [M in TESIEntryMethod]: {
    [EP in ESIEndpointOf<M>]: TESIResponseOKMap[M][EP] extends { cachedSeconds: number }
      ? AsEndpoint extends 0
        ? TESIResponseOKMap[M][EP]["cachedSeconds"]: EP
      : never
  }[ESIEndpointOf<M>];
}[Method];

/**
 * Indicates that no path parameters are allowed.
 *
 * This type serves as a compile-time signal for endpoints that do not support dynamic URL segments.  
 * By using this type, it is clear that no path parameters should be provided.
 */
export declare type TPathParamsNever = { /* pathParams?: never */ };

// local types
/**
 * Infers the response type of an ESI request based on the HTTP method and endpoint.
 * 
 * This type extracts the response type from the `TESIResponseOKMap` based on the provided
 * HTTP method and endpoint.
 * 
 * @template M - The HTTP method to use for the request.
 * @template EPx - The endpoint path.  
 *  include `string` in the `EPx` constraints to avoid breaking typescript inference.
 * 
 * @example
 * ```ts
 * type ResponseType = _ESIResponseType<"get", "/characters/{character_id}/">;
 * // Result: The inferred response type for the given method and endpoint.
 * ```
 * @internal
 * @see {@link ESIEndpointOf}
 */
export type _ESIResponseType<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
> = TESIResponseOKMap[M][Extract<EPx, ESIEndpointOf<M>>];
// type XOK = _ESIResponseType<"get", "/status/"> extends global._ESIResponseType<"get", "/status/"> ? 1 : 0;
/**
 * Determines if the endpoint requires path parameters.
 * 
 * @template EP - The string representing the endpoint path.
 * @returns {TPathParamsNever | { pathParams: IfParameterizedPath<EP> }}
 * Returns an object with `pathParams` if the endpoint requires parameters, otherwise returns `TPathParamsNever`.
 * @example
 * ```ts
 * type Example = IfNeedPathParams<"/characters/{character_id}/fittings/{fitting_id}/">;
 * // Result: { pathParams: [number, number] }
 * ```
 * @internal
 * @see {@link IfParameterizedPath}
 * @see {@link ReplacePathParams}
 */
export type _IfNeedPathParams<
  EP extends unknown,
  // will be `never` when cached
  // Parameterized extends IfParameterizedPath<EP> = IfParameterizedPath<EP>
> = IfParameterizedPath<EP> extends never
  ? TPathParamsNever :
    EP extends ReplacePathParams<EP>
      ? TPathParamsNever : { pathParams: IfParameterizedPath<EP> };

/**
 * Infer the result type of an ESI response based on the method and endpoint.
 * 
 * @template M - The HTTP method (e.g., "get", "post").
 * @template EP - The endpoint path.
 * @deprecated 2025/3/17
 */
export type __InferESIResponseResult<
  M extends TESIEntryMethod,
  EP extends ESIEndpointOf<M>
> = TESIResponseOKMap[M][EP] extends { result: infer U } ? U : never;
/**
 * Identifies the required parameters for a given entry type.
 *
 * @template Entry - The entry type to identify parameters for.
 * @template Opt - The type of the parameters.
 * @type {Opt & Pick<Entry, Exclude<keyof Entry, "result">>}
 * @deprecated 2025/3/17
 */
export type __IdentifyParameters<
  Entry, Opt,
  Keys = Exclude<keyof Entry, "result" | "tag" | "cachedSeconds">
  // @ts-expect-error 
> = RequireThese<Opt, Keys> & Pick<Entry, Keys>;
