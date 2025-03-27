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
 * @summary This file is auto-generated and defines version 3.1.3 of the EVE Online ESI response types.
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
export type TESIRequestFunctionMethods2<ActualOpt extends Record<string, unknown> = {}> = {
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
    [EP in ESIEndpointOf<M>]: TESIResponseOKMap[M][EP] extends { cachedSeconds: number }
      ? AsEndpoint extends void
        ? TESIResponseOKMap[M][EP]["cachedSeconds"]: EP
      : never
  }[ESIEndpointOf<M>];
}[Method];
// declare const cacheSecGet: TESICachedSeconds<"get">;
// declare const cache5sec: TESICachedSeconds<"put">;
// declare const cache3600sEndpoint: TESICachedSeconds<"post", 1>;
// TODO: 2025/3/17 How do I get rid of `pathParams` completely?
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
export type _IfNeedPathParams<EP extends unknown> = IfParameterizedPath<EP> extends never ? TPathParamsNever :
  EP extends ReplacePathParams<EP> ? TPathParamsNever : { pathParams: IfParameterizedPath<EP> };

/**
 * Infer the result type of an ESI response based on the method and endpoint.
 * 
 * @template M - The HTTP method (e.g., "get", "post").
 * @template EP - The endpoint path.
 * @deprecated 2025/3/17 12:12:33
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
 * @deprecated 2025/3/17 12:12:33
 */
export type __IdentifyParameters<
  Entry, Opt,
  Keys = Exclude<keyof Entry, "result" | "tag" | "cachedSeconds">
  // @ts-expect-error 
> = RequireThese<Opt, Keys> & Pick<Entry, Keys>;

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                         Internal types
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Defines the keys used in ESI entries.
 */
type ESIEntryKeys = "auth" | "query" | "body" | "pathParams";
/**
 * Restricts the keys of a type to the specified ones while excluding extra keys.
 *
 * This utility type is designed to enforce stricter semantics by marking unwanted keys as `never`.
 *
 * @template T - The original type to be constrained.
 * @template T2 - The type to merge with the constrained type.
 * @template RequireKeys - The keys to retain in the resulting type.
 * @template Extras - Automatically derived keys to exclude from the resulting type.
 *
 * @example
 * ```ts
 * type Original = { auth?: string; query?: string; body?: string; pathParams?: string; extra?: string };
 * type Required = { auth: true; query: { test: "pen" | "pencil" } };
 * type Restricted = RestrictKeys<Original, Required, "auth" | "query">;
 * // Result: { auth: true; query: { test: "pen" | "pencil" }; body?: undefined; pathParams?: undefined; extra?: string | undefined }
 * ```
 */
//* ctt
type RestrictKeys<
  T, RequireKeys extends keyof T,
  Extras = Exclude<ESIEntryKeys, RequireKeys>
> = {
  [P in keyof T]: P extends Extras ? never : T[P];
};
// type RequireEntry = {
//   auth?: true;
//   query?: { test: "pen" | "pencil" };
//   body?: string;
//   pathParams?: string;
//   extra?: string
// };
// type Restricted = RestrictKeys<RequireEntry, "auth" | "query">;
/*/
type RestrictKeys<
  T, T2,
  K extends keyof T,
  Extras = Exclude<ESIEntryKeys, K>
> = T2 & {
  [P in keyof T as P extends K ? never : P]: P extends Extras ? never : T[P];
};
//*/

declare global {

  /**
   * Marks specific properties of a type as required.
   * 
   * @template T - The original type.
   * @template K - The keys of the properties to mark as required.
   * 
   * @example
   * ```ts
   * type Original = { a?: number; b?: string; c: boolean };
   * type RequiredA = RequireThese<Original, 'a'>;
   * // Result: { a: number; b?: string; c: boolean }
   * ```
   */
  type RequireThese<T, K extends keyof T> = {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  };

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
   * @template Mtd - The HTTP method to use for the request
   * @template REP - The real path of the ESI endpoint to send the request to
   * @template EPX - The parameterized path of the ESI endpoint to send the request to
   * @template PPM - Parameters to include in the request if the endpoint is parameterized
   * @template Opt - Options to include in the request. If there is a required parameter, its type will be merged with `ActualOpt`
   * @template Ret - The response type
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
  type TESIRequestFunctionSignature2<ActualOpt extends Record<string, unknown>> = <
    Mtd extends TESIEntryMethod,
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPX extends ResolvedEndpoint<REP, Mtd>,
    PPM extends InferPathParams<REP, EPX>,
    Opt extends IdentifyParameters<Mtd, EPX, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<Mtd, EPX>,
    HasOpt = HasRequireParams<Mtd, EPX, PPM>,
  >(method: Mtd, endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;

  /**
   * Represents a function that can make ESI requests for a specific HTTP method.
   *
   * This type is used to define functions that send requests to specific ESI endpoints using a given HTTP method.
   *
   * @template Mtd - The HTTP method to use for the request.
   * @template ActualOpt - The actual type of the options.
   *
   * @template REP - The real path of the ESI endpoint to send the request to.
   * @template EPX - The parameterized path of the ESI endpoint to send the request to.
   * @template PPM - Parameters to include in the request if the endpoint is parameterized.
   * @template Opt - Options to include in the request. If there is a required parameter, its type will be merged with `ActualOpt`.
   * @template Ret - The response type.
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
  type TESIRequestFunctionEachMethod2<Mtd extends TESIEntryMethod, ActualOpt extends Record<string, unknown> = {}> = <
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPX extends ResolvedEndpoint<REP, Mtd>,
    PPM extends InferPathParams<REP, EPX>,
    Opt extends IdentifyParameters<Mtd, EPX, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<Mtd, EPX>,
    HasOpt extends HasRequireParams<Mtd, EPX, PPM> = HasRequireParams<Mtd, EPX, PPM>,
  >(endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;

  /**
   * Replaces path parameters in a string with numbers.
   * 
   * @template T - The string representing the endpoint path.
   * @type {string}
   * @example
   * ```ts
   * type Example = ReplacePathParams<"/characters/{character_id}/fittings/{fitting_id}/">;
   * // Result: `/characters/${number}/fittings/${number}/`
   * ```
   */
  type ReplacePathParams<T extends unknown> = T extends `${infer Start}{${infer Param}}${infer End}`
    ? `${Start}${number}${ReplacePathParams<End>}` : T;
  // type XEPP = ESIEndpointOf<"delete">
  // // incomplete
  // type Example2 = ReplacePathParams<"/characters/1234/fittings/{fitting_id}/">;
  // // Result: `characters/${number}/fittings/${number}/`
  // type Example3 = ReplacePathParams<"/characters/{character_id}/fittings/{fitting_id}/">;

  /**
   * Infers the path parameters based on the real endpoint and the resolved endpoint.
   * 
   * @template RealEP - The real endpoint path.
   * @template EPx - The resolved endpoint path.
   * @returns {TPathParamsNever | _IfNeedPathParams<EPx>}
   * @see {@link _IfNeedPathParams}
   * @see {@link TPathParamsNever}
   * @date 2025/3/17 4:32:47
   */
  type InferPathParams<
    RealEP extends unknown, EPx extends unknown
  > = RealEP extends EPx ? _IfNeedPathParams<EPx> : TPathParamsNever;

  /**
   * Infers the original endpoint based on the real endpoint and the HTTP method.
   * 
   * This type maps the real endpoint to its corresponding parameterized endpoint
   * by checking if the real endpoint matches the pattern of any parameterized endpoint.
   * 
   * @template RealEP - The real endpoint path.
   * @template M - The HTTP method to use for the request.
   * @template Endpoints - The possible endpoints for the given method.
   * 
   * @example
   * ```ts
   * type Original = InferEndpointOrigin<"/characters/123/fittings/456/", "delete">;
   * // Result: "/characters/{character_id}/fittings/{fitting_id}/"
   * ```
   * @see {@link ESIEndpointOf}
   * @see {@link ReplacePathParams}
   */
  type InferEndpointOrigin<
    RealEP extends unknown, M extends TESIEntryMethod,
    Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>
  > = {
    [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
      ? EP : never;
  }[Endpoints];
  /**
   * Determines the resolved endpoint based on the real endpoint and the method.
   * 
   * @template RealEP - The real endpoint path.
   * @template M - The HTTP method to use for the request.
   * 
   * @example
   * ```ts
   * type Resolved = ResolvedEndpoint<"/characters/123/fittings/456/", "delete">;
   * // Result: "/characters/{character_id}/fittings/{fitting_id}/"
   * ```
   * DONE: 2025/3/17 4:12:09 Ok, works
   * 
   * @see {@link InferEndpointOrigin}
   */
  type ResolvedEndpoint<
    RealEP extends unknown, M extends TESIEntryMethod,
  > = InferEndpointOrigin<RealEP, M> extends never ? RealEP: InferEndpointOrigin<RealEP, M>;

  /**
   * Picks the required parameters from an entry type, including additional parameters.
   * 
   * This type excludes the keys "result", "tag", and "cachedSeconds" from the entry type and the additional parameters,
   * and returns the remaining keys as the required parameters.
   * 
   * @template M - The HTTP method to use for the request.
   * @template EPx - The endpoint path.
   * @template AdditionalParams - Additional parameters to include in the check.
   * @template Entry - The entry type to pick parameters from.
   * 
   * @example
   * ```ts
   * type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
   * type RequiredParams = PickRequireParams<"get", "/example/endpoint", { auth: string }, ExampleEntry>;
   * // Result: "auth"
   * ```
   * @see {@link ESIEndpointOf}
   * @see {@link _ESIResponseType}
   */
  type PickRequireParams<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    AdditionalParams,
    Entry = _ESIResponseType<M, EPx>
  > = Exclude<keyof (Entry & AdditionalParams), "result" | "tag" | "cachedSeconds">;
  /**
   * Determines if the given entry has required parameters, including additional options.
   * 
   * This type checks if an entry has any required parameters by excluding the keys "result", "tag", and "cachedSeconds".
   * If any keys remain after this exclusion, it means the entry has required parameters.
   * 
   * @template M - The HTTP method to use for the request.
   * @template EPx - The endpoint path.
   * @template AdditionalParams - Additional parameters to include in the check.
   * 
   * @example
   * ```ts
   * type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
   * type HasRequired = HasRequireParams<"get", "/example/endpoint", { auth: string }>; // 1
   * ```
   * @see {@link ESIEndpointOf}
   * @see {@link PickRequireParams}
   */
  type HasRequireParams<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    AdditionalParams,
  > = PickRequireParams<M, EPx, AdditionalParams> extends never ? 0 : 1;

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
  type IfParameterizedPath<EP extends unknown, Opt = never> = EP extends `${string}/{${string}}${string}`
    ? PickPathParameters<EP> extends never
      ? Opt : InferKeysLen<PickPathParameters<EP>> extends 1
        ? number : [number, number]
      : Opt;

  /**
   * Identifies the required parameters for a given entry type, including additional options.
   *
   * This type combines the required parameters from the entry type and the additional options,
   * ensuring that all required parameters are marked as required.
   *
   * @template M - The HTTP method to use for the request.
   * @template EPx - The endpoint path.
   * @template Opt - The type of the additional options.
   * @template Entry - The entry type to identify parameters for.
   * @template RequireKeys - The keys of the entry type that are required parameters.
   * 
   * @example
   * ```ts
   * type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
   * type ExampleOpt = { auth: string };
   * type IdentifiedParams = IdentifyParameters<"get", "/example/endpoint", ExampleOpt, ExampleEntry>;
   * // Result: { auth: string } & { auth: string }
   * ```
   * @see {@link RequireThese}
   * @see {@link ESIEndpointOf}
   * @see {@link _ESIResponseType}
   */
  //* ctt
  type IdentifyParameters<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    Opt extends Record<string, unknown>,
    AdditionalParams,
    Entry = _ESIResponseType<M, EPx>,
    RequireKeys = Exclude<keyof (Entry & AdditionalParams), "result" | "tag" | "cachedSeconds">
    // @ts-expect-error 
  > = RestrictKeys<Opt, RequireKeys> & Pick<Entry, RequireKeys> & AdditionalParams;
  /*/
  // DEVNOTE: 2025/3/24
  // The definition is simple and highly maintainable, but it is not possible to reference the `pathParams` property when implementing `TESIRequestFunctionSignature2` etc.
  type IdentifyParameters<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    Opt extends Record<string, unknown>,
    AdditionalParams,
    Entry = _ESIResponseType<M, EPx>,
    Keys = Exclude<keyof (Entry & AdditionalParams), "result" | "tag" | "cachedSeconds">
    // @ts-expect- error 
  > = RestrictKeys<Opt, Pick<Entry, Keys> & AdditionalParams, Keys>;
  //*/

  /**
   * Infers the result type of an ESI response based on the method and endpoint.
   * 
   * @template M - The HTTP method to use for the request.
   * @template EPx - The endpoint path.
   * 
   * @example
   * ```ts
   * type Result = InferESIResponseResult<"get", "/characters/{character_id}/">;
   * // Result: The inferred type of the response for the given method and endpoint.
   * ```
   * @see {@link ESIEndpointOf}
   * @see {@link _ESIResponseType}
   */
  type InferESIResponseResult<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string
  > = _ESIResponseType<M, EPx> extends { result: infer U } ? U : never;
  /*
  */

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
   * @date 2025/3/16 21:45:50
   */
  type ESIEndpointOf<M extends TESIEntryMethod> = keyof TESIResponseOKMap[M];
  /**
   * Represents the endpoints for the "get" method.
   */
  type TEndPointGet = ESIEndpointOf<"get">;
  /**
   * Represents the endpoints for the "post" method.
   */
  type TEndPointPost = ESIEndpointOf<"post">;
  /**
   * Represents the endpoints for the "put" method.
   */
  type TEndPointPut = ESIEndpointOf<"put">;
  /**
   * Represents the endpoints for the "delete" method.
   */
  type TEndPointDelete = ESIEndpointOf<"delete">;

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
