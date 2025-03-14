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
 * @file eve-esi-types/v2/index.d.ts
 * @summary This file is auto-generated and defines version 3.0.3 of the EVE Online ESI response types.
 */

import type { TESIResponseOKMap } from "./response-map.d.ts";
export type { TESIResponseOKMap } from "./response-map.d.ts";

import type { PickPathParameters, InferKeysLen } from "./util.d.ts";

/**
 * Represents a function that can make ESI requests with various HTTP methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * @example
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
export interface IESIRequestFunction2<ActualOpt>
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
export type TESIRequestFunctionMethods2<ActualOpt = {}> = {
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
  Method extends TESIEntryMethod, AsEndpoint = void
> = {
  [M in TESIEntryMethod]: {
    [EP in keyof TESIResponseOKMap[M]]: TESIResponseOKMap[M][EP]["cachedSeconds"] extends number
      ? AsEndpoint extends void
        ? TESIResponseOKMap[M][EP]["cachedSeconds"]: EP
      : never
  }[keyof TESIResponseOKMap[M]];
}[Method];
// const cacheSecGet: TESICachedSeconds<"get">;
// const cache5sec: TESICachedSeconds<"put">;
// const cache3600sEndpoint: TESICachedSeconds<"post", 1>;
export declare type TPathParamsNever = { pathParams?: never };

declare global {

  /**
   * mark a specific property as `required`
   */
  type RequireThese<T, K extends keyof T> = T & Required<Pick<T, K>>;

  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                Version 3 types
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  /**
   * ### ESI request function with real endpoint signature
   * 
   * TESIRequestFunctionSignature2 is a type that defines the signature of an ESI request function
   * where the endpoint can be a real endpoint or a parameterized endpoint.
   * 
   * This function sends a request to a specified endpoint and returns a response.
   * 
   * @template ActualOpt - The actual type of the option.
   * @template M - The HTTP method to use for the request
   * @template RealEP - The real path of the ESI endpoint to send the request to
   * @template EP - The parameterized path of the ESI endpoint to send the request to
   * @template PathParams - Parameters to include in the request if the endpoint is parameterized
   * @template Opt - Options to include in the request. If there is a required parameter, its type will be merged with `ActualOpt`
   * @template R - The response type
   * 
   * @param method - The HTTP method to use for the request (e.g., "get", "post").
   * @param endpoint - The real path of the ESI endpoint to send the request to.
   * @param options - An optional object containing additional options for the request. If the endpoint has required parameters, this parameter must be provided.
   * 
   * @returns A Promise object containing the response data, with the type inferred based on the method and endpoint.
   * 
   * @remarks
   * The `...options: HasOpt extends 1 ? [Opt] : [Opt?]` parameter is defined this way to enforce that if the endpoint has required parameters,  
   * the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.
   */
  type TESIRequestFunctionSignature2<ActualOpt> = <
    M extends TESIEntryMethod,
    // "/characters/123/fittings/456/"
    RealEP extends ReplacePathParams<keyof TESIResponseOKMap[M] & string> | keyof TESIResponseOKMap[M],
    // "/characters/{character_id}/fittings/{fitting_id}/"
    EP extends InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]> extends never ? RealEP: InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]>,
    // If RealEP points to an endpoint origin (not a replaced endpoint), the path parameter is required
    PathParams extends RealEP extends EP ? IfNeedPathParams<EP>: TPathParamsNever,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt & PathParams>,
    R extends InferESIResponseResult<M, EP>,
    HasOpt = HasRequireParams<TESIResponseOKMap[M][EP]> extends never ? 0 : 1
  >(method: M, endpoint: RealEP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<R>;

  /**
   * Represents a function that can make ESI requests for a specific HTTP method.
   *
   * This type is used to define functions that send requests to specific ESI endpoints using a given HTTP method.
   *
   * @template M - The HTTP method to use for the request.
   * @template ActualOpt - The actual type of the options.
   *
   * @template RealEP - The real path of the ESI endpoint to send the request to.
   * @template EP - The parameterized path of the ESI endpoint to send the request to.
   * @template PathParams - Parameters to include in the request if the endpoint is parameterized.
   * @template Opt - Options to include in the request. If there is a required parameter, its type will be merged with `ActualOpt`.
   * @template R - The response type.
   *
   * @param endpoint - The real path of the ESI endpoint to send the request to.
   * @param options - An optional object containing additional options for the request. If the endpoint has required parameters, this parameter must be provided.
   *
   * @returns A Promise object containing the response data, with the type inferred based on the method and endpoint.
   * 
   * @remarks
   * The `...options: HasOpt extends 1 ? [Opt] : [Opt?]` parameter is defined this way to enforce that if the endpoint has required parameters,  
   * the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.
   */
  type TESIRequestFunctionEachMethod2<M extends TESIEntryMethod, ActualOpt = {}> = <
    RealEP extends ReplacePathParams<keyof TESIResponseOKMap[M] & string> | keyof TESIResponseOKMap[M],
    EP extends InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]> extends never ? RealEP: InferEndpointOrigin<RealEP, keyof TESIResponseOKMap[M]>,
    PathParams extends RealEP extends EP ? IfNeedPathParams<EP>: TPathParamsNever,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt & PathParams>,
    R extends InferESIResponseResult<M, EP>,
    HasOpt = HasRequireParams<TESIResponseOKMap[M][EP]> extends never ? 0 : 1
  >(endpoint: RealEP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<R>;

  /**
   * Replaces path parameters in a string with numbers.
   * 
   * @template T - The string representing the endpoint path.
   * @example
   * ```ts
   * type Example = ReplacePathParams<"/characters/{character_id}/fittings/{fitting_id}/">;
   * // Result: `/characters/${number}/fittings/${number}/`
   * ```
   */
  type ReplacePathParams<T extends string> = T extends `${infer Start}{${infer Param}}${infer End}`
    ? `${Start}${number}${ReplacePathParams<End>}` : T;

  // // type Example = ReplacePathParamsX<"/characters/1234/fittings/{fitting_id}/">;
  // // Result: `characters/${number}/fittings/${number}/`
  // type ReplacePathParamsX<T extends string> =
  //   T extends `/${infer Start}/${infer Param}/${infer End}` ? `${Start}/${number}/${ReplacePathParams<End>}`
  //   : T;
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
   */
  type IfNeedPathParams<EP> = IfParameterizedPath<EP> extends never ? TPathParamsNever :
    EP extends ReplacePathParams<EP> ? TPathParamsNever : { pathParams: IfParameterizedPath<EP> };
  /**
   * Infers the original endpoint path from a real endpoint path.
   * 
   * @template RealEP - The real endpoint path.
   * @returns {string} The original endpoint path with parameters.
   * @example
   * ```ts
   * type EPOrigin = InferEndpointOrigin<"/characters/123/fittings/456/", TEndPointDelete>;
   * // Result: "/characters/{character_id}/fittings/{fitting_id}/"
   * ```
   */
  type InferEndpointOrigin<RealEP extends unknown, Endpoints> = {
    [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
      ? EP : never;
  }[Endpoints];
  // type InferEndpointOrigin<RealEP extends string> = {
  //   [Method in TESIEntryMethod]: {
  //     [EP in keyof TESIResponseOKMap[Method]]: RealEP extends ReplacePathParams<EP>
  //       ? EP : never;
  //   }[keyof TESIResponseOKMap[Method]]
  // }[TESIEntryMethod];

  /**
   * Determines if the given entry has required parameters.
   * 
   * This type checks if an entry has any required parameters by excluding the keys "result", "tag", and "cachedSeconds".
   * If any keys remain after this exclusion, it means the entry has required parameters.
   * 
   * @template Entry - The entry type to check for required parameters.
   * 
   * @example
   * ```ts
   * type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
   * type HasRequired = HasRequireParams<ExampleEntry>; // "auth"
   * ```
   */
  type HasRequireParams<Entry> = Exclude<keyof Entry, "result" | "tag" | "cachedSeconds">;

  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                Version 2 types
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  /**
   * If `EP` (endpoint) is a parameterized path, determines the required number of replacements.
   * 
   * @template EP The string representing the endpoint path.
   * @template Opt The type to return if `EP` is not parameterized.
   * @returns {number | [number, number] | Opt} 
   * Returns `number` if there is one parameter, `[number, number]` if there are two parameters, otherwise `Opt`.
   */
  type IfParameterizedPath<EP, Opt = never> = EP extends `${string}/{${string}}${string}`
    ? PickPathParameters<EP> extends never
      ? Opt : InferKeysLen<PickPathParameters<EP>> extends 1
        ? number : [number, number]
      : Opt;

  /**
   * Identifies the required parameters for a given entry type.
   *
   * @template Entry - The entry type to identify parameters for.
   * @template Opt - The type of the parameters.
   * @type {Opt & Pick<Entry, Exclude<keyof Entry, "result">>}
   */
  //* ctt
  type IdentifyParameters<
    Entry, Opt,
    Keys = Exclude<keyof Entry, "result" | "tag" | "cachedSeconds">
  > = RequireThese<Opt, Keys> & Pick<Entry, Keys>;
  /*/
  type IdentifyParameters<
    Entry, Opt,
    Keys = Exclude<keyof Entry, "result">
  > = Opt & (Keys extends keyof Entry ? Pick<Entry, Keys> : {});
  //*/

  /**
   * Infer the result type of an ESI response based on the method and endpoint.
   * 
   * @template M - The HTTP method (e.g., "get", "post").
   * @template EP - The endpoint path.
   */
  type InferESIResponseResult<
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M]
  > = TESIResponseOKMap[M][EP] extends { result: infer U } ? U : never;

  /**
   * Represents a response with no content (HTTP status 204).
   */
  type NoContentResponse = { /* status: 204 */ };

  /**
   * Represents the HTTP methods supported by ESI.
   * 
   * ```ts
   * "get" | "post" | "put" | "delete"
   * ```
   */
  type TESIEntryMethod = keyof TESIResponseOKMap;

  /**
   * Represents the endpoints for the "get" method.
   */
  type TEndPointGet = keyof TESIResponseOKMap["get"];
  /**
   * Represents the endpoints for the "post" method.
   */
  type TEndPointPost = keyof TESIResponseOKMap["post"];
  /**
   * Represents the endpoints for the "put" method.
   */
  type TEndPointPut = keyof TESIResponseOKMap["put"];
  /**
   * Represents the endpoints for the "delete" method.
   */
  type TEndPointDelete = keyof TESIResponseOKMap["delete"];

  /**
   * Represents the entry details for the "get" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponseGetEntry<K extends TEndPointGet> = TESIResponseOKMap["get"][K];
  /**
   * Represents the entry details for the "put" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponsePutEntry<K extends TEndPointPut> = TESIResponseOKMap["put"][K];
  /**
   * Represents the entry details for the "post" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponsePostEntry<K extends TEndPointPost> = TESIResponseOKMap["post"][K];
  /**
   * Represents the entry details for the "delete" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponseDeleteEntry<K extends TEndPointDelete> = TESIResponseOKMap["delete"][K];
}
