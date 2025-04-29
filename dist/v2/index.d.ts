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
 * @summary This file is auto-generated and defines version 3.2.7 of the EVE Online ESI response types.
 */
import type { TESIResponseOKMap } from "./response-map.d.ts";
import type { PickPathParameters, InferKeysLen, CombineIntersection, ExtractPathParamKeys } from "./util.d.ts";
import type {
  ESIEntryParamKeys, ESIEntryExtraKeys,
  _ESIResponseType,
  _IfNeedPathParams,
  TPathParamsNever,
  ResolveEndpointParameters
  // ESIEndpointUnions,
  // IESIRequestFunction2,
  // InferESIResponseResultEX,
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
 * Restricts the keys of a type to the specified ones while excluding extra keys.
 *
 * This utility type is designed to enforce stricter semantics by marking unwanted keys as `never`.
 *
 * @template T The original type to be constrained.
 * @template T2 The type to merge with the constrained type.
 * @template RequireKeys The keys to retain in the resulting type.
 * @template Extras Automatically derived keys to exclude from the resulting type.
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
// incomplete
export type RestrictKeys<
  T, RequireKeys/*  extends keyof T */,
  Extras = Exclude<ESIEntryParamKeys, RequireKeys>
> = {
  [P in keyof T]: P extends Extras ? never : T[P];
};
export type RestrictKeys2<
    T,
    RequireKeys extends keyof T,
    Extras = Exclude<keyof T, RequireKeys>
> = (
  // 1. Include and make the required keys mandatory
  {
    [RQ in keyof T as RQ extends RequireKeys ? RQ : never]-?: T[RQ];
  } &
  // 2. Exclude extra keys from ESIEntryParamKeys and assign `never`
  {
    [Extra in ESIEntryParamKeys as Extra extends Extras ? Extra : never]?: never;
  } &
  // 3. Include remaining keys (not in ESIEntryParamKeys) as optional with their original types
  {
    [Other in keyof T as Other extends Extras ? (Other extends ESIEntryParamKeys ? never : Other) : never]?: T[Other];
  }
) extends infer O
    // Flatten the intersected type into a single object
    ? { [K in keyof O]: O[K] }
    : never;
/*/
//*/

declare global {

  type __ShiftType = 1;
  /**
   * Marks specific properties of a type as required.
   * 
   * @template T The original type.
   * @template K The keys of the properties to mark as required.
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
   * Defines the function signature for making ESI requests to specific endpoints.
   *
   * This utility type provides a strongly-typed function signature for interacting with ESI endpoints.  
   * It ensures type safety by inferring the required parameters, options, and response types for the given endpoint.
   *
   * @template ActualOpt - A record type representing additional options for the request.
   * @template Mtd - The HTTP method (e.g., "get", "post") to use for the request.
   * @template REP - The real path of the ESI endpoint to send the request to.
   * @template EPO - The parameterized path of the ESI endpoint (e.g., `/characters/{character_id}/assets/`).
   * @template Params - The resolved parameters for the endpoint, including path parameters and user-supplied options.
   * @template Opt - The final options object to include in the request.
   * @template Ret - The response type of the endpoint.
   *
   * @param method - The HTTP method to use for the request (e.g., "get", "post").
   * @param endpoint - The real path of the ESI endpoint to send the request to.
   * @param options - An optional object containing additional options for the request. If the endpoint has required parameters, this parameter must be provided.
   *
   * @returns A `Promise` that resolves to the response type of the endpoint.
   *
   * @remarks
   * - The `...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]` parameter ensures that if the endpoint has required parameters,  
   *   the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.
   * - This type leverages `ResolveEndpointParameters` to infer the required options and response type.
   *
   * @example
   * ```ts
   * // Example: Making a request to the "get" method for a specific endpoint
   * type ESIRequest = TESIRequestFunctionSignature2<ESIRequestOptions>;
   * const runRequest: ESIRequest = async (method, endpoint, ...options) => {
   *     // Implementation here
   *     throw new Error();
   * };
   * runRequest("get", "/characters/{character_id}/assets/", {
   *     pathParams: 12345,
   *     auth: true,
   *     token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
   * }).then(response => {
   *     console.log(response);
   * });
   * ```
   *
   * @see {@link ResolveEndpointParameters}
   * @see {@link InferESIResponseResult}
   */
  /* ctt
  type TESIRequestFunctionSignature2<ActualOpt extends Record<string, unknown>> = <
    Mtd extends TESIEntryMethod,
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPO extends ResolvedEndpoint<Mtd, REP>,
    PPM extends InferPathParams<REP, EPO>,
    Opt extends IdentifyParameters<Mtd, EPO, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<Mtd, EPO>,
    HasOpt = HasRequireParams<Mtd, EPO, PPM>,
  >(method: Mtd, endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;
  /*/
  type TESIRequestFunctionSignature2<ActualOpt extends Record<string, unknown>> = <
    Mtd extends TESIEntryMethod,
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPO extends ResolvedEndpoint<Mtd, REP>,
    Params extends ResolveEndpointParameters<Mtd, REP, EPO, ActualOpt>,
    Opt extends Params["finalOptions"],
    // Ret extends Params["result"],
  >(method: Mtd, endpoint: REP, ...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]) => Promise<Params["result"]>;
  //*/

  /**
   * Defines an enhanced function signature for making ESI requests with an additional prepended parameter.
   *
   * This utility type extends the base ESI request function signature by adding a prepended parameter
   * to allow for extra context or pre-processing before performing the request. It ensures type safety
   * by inferring the required parameters, options, and response types for the given endpoint.
   *
   * @template PrependParam - The type of the additional parameter that is injected at the beginning of the function call.
   * @template ActualOpt - A record type representing additional options for the request.
   *
   * @param prependParam - A prepended parameter providing additional context or configuration for the request.
   * @param method - The HTTP method to use for the request (e.g., "get", "post").
   * @param endpoint - The API endpoint, which might include path parameter replacements.
   * @param options - Additional options for the request. If the endpoint has required parameters, this parameter must be provided.
   *
   * @returns A `Promise` that resolves to the response type of the endpoint.
   *
   * @remarks
   * - The `...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]` parameter ensures that if the endpoint has required parameters,  
   *   the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.
   * - This type leverages `ResolveEndpointParameters` to infer the required options and response type.
   *
   * @example
   * ```ts
   * // Example: Making a request with an additional prepended parameter
   * type EnhancedRequest = TESIEnhancedRequestFunctionSignature<
   *     { userId: string },
   *     ESIRequestOptions
   * >;
   * const fetchWithContext: EnhancedRequest = async (context, method, endpoint, ...options) => {
   *     console.log(`User ID: ${context.userId}`);
   *     // Implementation here
   *     throw new Error();
   * };
   * fetchWithContext(
   *     { userId: "12345" },
   *     "get",
   *     "/characters/{character_id}/assets/",
   *     {
   *         pathParams: 12345,
   *         auth: true,
   *         token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
   *     }
   * ).then(response => {
   *     console.log(response);
   * });
   * ```
   *
   * @see {@link ResolveEndpointParameters}
   * @see {@link InferESIResponseResult}
   * @see Documentation of [`TESIEnhancedRequestFunctionSignature`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/esi-enhanced-function-signature.md)
   */
  /* ctt
  type TESIEnhancedRequestFunctionSignature<
    PrependParam extends unknown, ActualOpt extends Record<string, unknown>
  > = <
    Mtd extends TESIEntryMethod,
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPO extends ResolvedEndpoint<Mtd, REP>,
    PPM extends InferPathParams<REP, EPO>,
    Opt extends IdentifyParameters<Mtd, EPO, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<Mtd, EPO>,
    HasOpt = HasRequireParams<Mtd, EPO, PPM>,
  >(
    prependParam: PrependParam,
    method: Mtd, endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]
  ) => Promise<Ret>;
  /*/
  type TESIEnhancedRequestFunctionSignature<
    PrependParam extends unknown, ActualOpt extends Record<string, unknown>
  > = <
    Mtd extends TESIEntryMethod,
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPO extends ResolvedEndpoint<Mtd, REP>,
    Params extends ResolveEndpointParameters<Mtd, REP, EPO, ActualOpt>,
    Opt extends Params["finalOptions"],
  >(
    prependParam: PrependParam,
    method: Mtd, endpoint: REP,
    ...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]
  ) => Promise<Params["result"]>;
  //*/

  /**
   * Defines the function signature for making ESI requests for a specific HTTP method.
   *
   * This utility type provides a strongly-typed function signature for interacting with ESI endpoints
   * using a specific HTTP method. It ensures type safety by inferring the required parameters, options,
   * and response types for the given endpoint.
   *
   * @template Mtd - The HTTP method (e.g., "get", "post") to use for the request.
   * @template ActualOpt - A record type representing additional options for the request.
   *
   * @param endpoint - The API endpoint, which might include path parameter replacements.
   * @param options - Additional options for the request. If the endpoint has required parameters, this parameter must be provided.
   *
   * @returns A `Promise` that resolves to the response type of the endpoint.
   *
   * @remarks
   * - The `...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]` parameter ensures that if the endpoint has required parameters,  
   *   the `options` parameter must be provided. If there are no required parameters, the `options` parameter is optional.
   * - This type leverages `ResolveEndpointParameters` to infer the required options and response type.
   *
   * @example
   * ```ts
   * // Example: Making a request to the "get" method for a specific endpoint
   * type GetRequest = TESIRequestFunctionEachMethod2<"get", ESIRequestOptions>;
   * const fireGetRequest: GetRequest = async (endpoint, ...options) => {
   *     // Implementation here
   *     throw new Error();
   * };
   * fireGetRequest("/characters/{character_id}/assets/", {
   *     pathParams: 12345,
   *     auth: true,
   *     token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
   * }).then(response => {
   *     console.log(response);
   * });
   * ```
   *
   * @see {@link ResolveEndpointParameters}
   * @see {@link InferESIResponseResult}
   */
  /* ctt
  type TESIRequestFunctionEachMethod2<Mtd extends TESIEntryMethod, ActualOpt extends Record<string, unknown>> = <
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPO extends ResolvedEndpoint<Mtd, REP>,
    PPM extends InferPathParams<REP, EPO>,
    Opt extends IdentifyParameters<Mtd, EPO, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<Mtd, EPO>,
    HasOpt = HasRequireParams<Mtd, EPO, PPM>,
  >(endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;
  /*/
  type TESIRequestFunctionEachMethod2<Mtd extends TESIEntryMethod, ActualOpt extends Record<string, unknown>> = <
    REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
    EPO extends ResolvedEndpoint<Mtd, REP>,
    Params extends ResolveEndpointParameters<Mtd, REP, EPO, ActualOpt>,
    Opt extends Params["finalOptions"],
  >(endpoint: REP, ...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]) => Promise<Params["result"]>;
  //*/

  /**
   * Replaces path parameters in a string with numbers.
   * 
   * @template T The string representing the endpoint path.
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

  // // incomplete
  // type Example2 = ReplacePathParams<"/characters/1234/fittings/{fitting_id}/">;
  // // Result: `characters/${number}/fittings/${number}/`
  // type Example3 = ReplacePathParams<"/characters/{character_id}/fittings/{fitting_id}/">;

  /**
   * Infers the path parameters based on the real endpoint and the resolved endpoint.
   * 
   * @template RealEP The real endpoint path.
   * @template EPO (Endpoint Path Origin) The resolved endpoint path.
   * @returns {TPathParamsNever | _IfNeedPathParams<EPO>}
   * @see {@link _IfNeedPathParams}
   * @see {@link TPathParamsNever}
   * @see Documentation of [`InferPathParams`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/infer-path-params.md)
   * @date 2025/3/17
   */
  type InferPathParams<
    RealEP extends PropertyKey, EPO extends PropertyKey
  > = RealEP extends EPO ? _IfNeedPathParams<EPO> : TPathParamsNever;

  /**
   * Infers the original endpoint based on the real endpoint and the HTTP method.
   * 
   * This type maps the real endpoint to its corresponding parameterized endpoint
   * by checking if the real endpoint matches the pattern of any parameterized endpoint.
   * 
   * @template RealEP The real endpoint path.
   * @template M The HTTP method to use for the request.
   * @template Endpoints The possible endpoints for the given method.
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
    M extends TESIEntryMethod, RealEP extends PropertyKey,
    Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>
  > = {
    [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
      ? EP : never;
  }[Endpoints];
  /**
   * Determines the resolved endpoint based on the real endpoint and the method.
   * 
   * @template RealEP The real endpoint path.
   * @template M The HTTP method to use for the request.
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
    M extends TESIEntryMethod,
    RealEP extends PropertyKey,
  > = InferEndpointOrigin<M, RealEP> extends never ? RealEP: InferEndpointOrigin<M, RealEP>;

  /**
   * Determines if the given entry has required parameters, including additional options.
   * 
   * This type checks if an entry has any required parameters by excluding the keys "result", "tag", and "cachedSeconds".
   * If any keys remain after this exclusion, it means the entry has required parameters.
   * 
   * @template M The HTTP method to use for the request.
   * @template EPx The endpoint path.
   * @template PathParams Path parameters to include in the check.
   * 
   * @example
   * ```ts
   * type ExampleEntry = { result: string, tag: string, cachedSeconds: number, auth: string };
   * type HasRequired = HasRequireParams<"get", "/example/endpoint", { auth: string }>; // 1
   * ```
   * @see {@link ESIEndpointOf}
   * @see Documentation of [`HasRequireParams`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v3/has-require-params.md)
   */
  /* ctt
  type HasRequireParams<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    AdditionalParams,
  > = PickRequireParams<M, EPx, AdditionalParams> extends never ? 0 : 1;
  /*/
  type HasRequireParams<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    PathParams extends Record<string, unknown>,
    RequireKeys = Exclude<keyof (_ESIResponseType<M, EPx> & PathParams), ESIEntryExtraKeys>
  > = [RequireKeys] extends [never] ? 0 : 1;
  //*/

  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                Version 2 types
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  /**
   * Determines the number of parameters in a parameterized endpoint path.
   *
   * This utility type checks if the given endpoint path contains parameters (e.g., `{param}`) and returns:
   * - `number` if there is one parameter.
   * - `[number, number]` if there are two parameters.
   * - `never` if there are no parameters.
   *
   * @template EP - The string representing the endpoint path.
   * @returns {number | [number, number] | never} The number of parameters in the path.
   *
   * @example
   * ```ts
   * type SingleParam = IfParameterizedPath<"/characters/{character_id}/">;
   * // Result: number
   *
   * type TwoParams = IfParameterizedPath<"/characters/{character_id}/assets/{asset_id}/">;
   * // Result: [number, number]
   *
   * type NoParams = IfParameterizedPath<"/characters/1234/">;
   * // Result: 0
   * ```
   * @see {@link ExtractPathParamKeys}
   */
  /* ctt
  type IfParameterizedPath<EP extends PropertyKey> = EP extends `${string}/{${string}}${string}`
    ? PickPathParameters<EP> extends never
      ? 0 : InferKeysLen<PickPathParameters<EP>> extends 1
        ? number : [number, number]
      : 0;
  /*/
  export type IfParameterizedPath<EP extends PropertyKey> =
    ExtractPathParamKeys<EP> extends []
      ? 0 : ExtractPathParamKeys<EP> extends [any]
      ? number : ExtractPathParamKeys<EP> extends [any, any]
      ? [number, number]
      : never;
  //*/

  /**
   * Identifies and combines the required request parameters for a given ESI entry.
   *
   * Given:
   * - `Opt`: the shape of user-supplied options (e.g., query/body/path params),
   * - `_ESIResponseType<M, EPx>`: the expected response payload type for method `M` and endpoint `EPx`,
   * - `PathParams`: the path parameters for the endpoint,
   *
   * this type:
   * 1. Merges `_ESIResponseType<M, EPx>` with `PathParams` to form `EntryWithParams`.
   * 2. Excludes extra metadata keys (`result`, `tag`, `cachedSeconds`) from `EntryWithParams`, yielding `RequireKeys`.
   * 3. Restricts `Opt` to only the keys in `RequireKeys`.
   * 4. Picks those `RequireKeys` from `EntryWithParams`.
   * 5. Flattens the intersection into a single parameter object via `CombineIntersection`.
   *
   * @template M            The HTTP method (e.g., "get", "post") of the request.
   * @template EPx          The endpoint path, constrained to `ESIEndpointOf<M>` or `string`.
   * @template Opt          A record type of user-supplied request options.
   * @template PathParams   A record type representing path parameters for the endpoint.
   * @template EntryWithParams  The merged type of response payload and `PathParams`.
   * @template RequireKeys The keys from `EntryWithParams` that represent actual request parameters.
   *
   * @example
   * ```ts
   * // /characters/{character_id}/attributes/
   * type ExampleEntry = { result: GetCharactersCharacterIdAttributesOk; tag: "Skills"; cachedSeconds: 120; auth: true };
   * type ExampleOpt   = { auth: true; token: "eyJhbGciOiJSUzI1NiIsI..." };
   * type ExamplePath  = { pathParams: number };
   *
   * // Assume _ESIResponseType<"get", "/characters/{character_id}/attributes/"> = ExampleEntry
   * type IdentifiedParams = IdentifyParameters<
   *   "get", "/characters/{character_id}/attributes/", ExampleOpt, ExamplePath
   * >;
   * // Resolves to: { auth: true; token: "eyJhbGciOiJSUzI1NiIsI..."; pathParams: number; }
   * ```
   * @see {@link ESIEndpointOf}
   * @see {@link _ESIResponseType}
   * @see Documentation of [`IdentifyParameters`](https://github.com/jeffy-g/eve-esi-types/blob/master/docs/v2/identify-parameters.md)
   */
  type IdentifyParameters<
    M extends TESIEntryMethod,
    EPx extends ESIEndpointOf<M> | string,
    Opt extends Record<string, unknown>,
    PathParams extends Record<string, unknown>,
    EntryWithParams = _ESIResponseType<M, EPx> & PathParams,
    RequireKeys extends keyof EntryWithParams = Exclude<keyof EntryWithParams, ESIEntryExtraKeys>
  > = CombineIntersection<
    RestrictKeys<Opt, RequireKeys> & Pick<EntryWithParams, RequireKeys>
  >;

  /**
   * Infers the result type of an ESI response based on the method and endpoint.
   * 
   * @template M The HTTP method to use for the request.
   * @template EPx The endpoint path.
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

  // declare const NO_CONTENT_RESPONSE: unique symbol;
  // type NoContentResponse = {
  //   [NO_CONTENT_RESPONSE]: never;
  // };
  /**
   * Represents a response with no content (HTTP status 204).
   */
  type NoContentResponse = { /* status: 204 */ } & { __status: 204 };

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
   * @template K The endpoint key.
   */
  type TESIResponseGetEntry<K extends TEndPointGet> = TESIResponseOKMap["get"][K];
  /**
   * Represents the entry details for the "put" method.
   * 
   * @template K The endpoint key.
   */
  type TESIResponsePutEntry<K extends TEndPointPut> = TESIResponseOKMap["put"][K];
  /**
   * Represents the entry details for the "post" method.
   * 
   * @template K The endpoint key.
   */
  type TESIResponsePostEntry<K extends TEndPointPost> = TESIResponseOKMap["post"][K];
  /**
   * Represents the entry details for the "delete" method.
   * 
   * @template K The endpoint key.
   */
  type TESIResponseDeleteEntry<K extends TEndPointDelete> = TESIResponseOKMap["delete"][K];
}
