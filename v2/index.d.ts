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
 * @summary This file is auto-generated and defines version 3.2.0 of the EVE Online ESI response types.
 */
import type { TESIResponseOKMap } from "./response-map.d.ts";
import type { PickPathParameters, InferKeysLen } from "./util.d.ts";
import type {
  _ESIResponseType,
  _IfNeedPathParams,
  TPathParamsNever,
  // ESIEndpointUnions,
  // IESIRequestFunction2,
  // InferESIResponseResultEX,
  // InferNextEndpoint2, InferNextEndpointLoos,
  // InferNextEndpoint,
  // TESICachedSeconds, TESIRequestFunctionMethods2,
  // __IdentifyParameters, __InferESIResponseResult,
} from "./types-util.d.ts";
export type * from "./response-map.d.ts";
export type * from "./types-util.d.ts";
export type * from "./util.d.ts";


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

  type __ShiftType = 1;
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
   * @see Documentation of [`RequireThese`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v2/require-these.md)
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
   * A function signature type for making enhanced ESI requests.
   *
   * This type extends the base ESI request function signature by injecting a prepended parameter to allow for extra
   * context or pre-processing before performing the request. It provides a highly generic interface that adapts to the
   * chosen endpoint method, endpoint configuration, and additional options, making it ideal for advanced API interactions.
   *
   * Generic Parameters:
   * @template PrependParam - The type of the additional parameter that is injected at the beginning of the function call.
   * @template ActualOpt - An object representing the default options (typically extending ESIRequestOptions) used for the request.
   *
   * Function Generic Parameters:
   * @template Mtd - The ESI request method type (e.g., GET, POST) as defined in TESIEntryMethod.
   * @template REP - The endpoint type, which can be either a version with replaced path parameters (via ReplacePathParams)
   *                 or the raw ESIEndpointOf<Mtd> type.
   * @template EPX - The resolved endpoint type derived from REP and Mtd.
   * @template PPM - The type representing the inferred path parameters extracted from REP and EPX.
   * @template Opt - The type for additional request options, identified based on the method (Mtd), endpoint (EPX), the
   *                 default options (ActualOpt), and inferred path parameters (PPM).
   * @template Ret - The type of the response result from the ESI request, inferred from the method and endpoint.
   * @template HasOpt - An internal flag used to determine whether request options (Opt) are required (1) or optional.
   *
   * Parameters:
   * @param {PrependParam} prependParam - A prepended parameter providing additional context or configuration for the request.
   * @param {Mtd} method - The ESI request method.
   * @param {REP} endpoint - The API endpoint, which might include path parameter replacements.
   * @param {...(HasOpt extends 1 ? [Opt] : [Opt?])} options - Additional options for the request; required if HasOpt is 1,
   *   otherwise optional.
   *
   * @returns {Promise<Ret>} A promise that resolves with the result type `Ret`, representing the response data from the ESI endpoint.
   * @see Documentation of [`TESIEnhancedRequestFunctionSignature`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/esi-enhanced-function-signature.md)
   */
  type TESIEnhancedRequestFunctionSignature<
    PrependParam extends unknown, ActualOpt extends Record<string, unknown>
  > = <
    Mtd extends TESIEntryMethod,
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPX extends ResolvedEndpoint<REP, Mtd>,
    PPM extends InferPathParams<REP, EPX>,
    Opt extends IdentifyParameters<Mtd, EPX, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<Mtd, EPX>,
    HasOpt = HasRequireParams<Mtd, EPX, PPM>
  >(
    prependParam: PrependParam,
    method: Mtd, endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]
  ) => Promise<Ret>;

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
  type TESIRequestFunctionEachMethod2<Mtd extends TESIEntryMethod, ActualOpt extends Record<string, unknown>> = <
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
   * @see Documentation of [`ReplacePathParams`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/replace-path-params.md)
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
   * @see Documentation of [`InferPathParams`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/infer-path-params.md)
   * @date 2025/3/17
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
   * @see Documentation of [`InferEndpointOrigin`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/infer-endpoint-origin.md)
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
   * @see {@link InferEndpointOrigin}
   * @see Documentation of [`ResolvedEndpoint`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/resolved-endpoint.md)
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
   * @see Documentation of [`PickRequireParams`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/pick-require-params.md)
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
   * @see Documentation of [`HasRequireParams`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/has-require-params.md)
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
   * @see Documentation of [`IfParameterizedPath`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v2/if-parameterized-path.md)
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
   * @see Documentation of [`IdentifyParameters`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v2/identify-parameters.md)
   */
  //* ctt
  type IdentifyParameters<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    Opt extends Record<string, unknown>,
    AdditionalParams,
    Entry = _ESIResponseType<M, EPx> & AdditionalParams,
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
   * @see Documentation of [`InferESIResponseResult`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v2/infer-esi-response-result.md)
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
   * Represents endpoints using `TESIEntryMethod`.
   * @date 2025/3/16
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
   * Union of all `ESIEndpointOf<TESIEntryMethod>`
   * @date 2025/4/12
   */
  type ESIEndpointAll = {
    [M in TESIEntryMethod]: ESIEndpointOf<M>;
  }[TESIEntryMethod];

  // type TESIResponseEntries<
  //   M extends TESIEntryMethod, EP extends ESIEndpointOf<M>
  // > = TESIResponseOKMap[M][EP];
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
