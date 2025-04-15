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
 * @summary This file is auto-generated and defines version 3.1.7 of the EVE Online ESI response types.
 */
import type { TESIResponseOKMap } from "./response-map.d.ts";
import "./index.d.ts"

// export type TMappingToNumber = { [key in string | number | symbol]: number };
/**
 * @experimental
 *
 * InferNextEndpoint is an experimental utility type designed to verify and infer the "next" applicable
 * ESI endpoint based on an initial endpoint's result type. In essence, it inspects the URL pattern and
 * the inferred response type (Resut) associated with a given endpoint (EP) and then determines whether that
 * endpoint can be further chained to another ESI endpoint.
 *
 * **The type parameters are as follows**:
 * 
 * @param M - The HTTP method type (e.g. "get", "post", etc.), which must extend TESIEntryMethod.
 * @param EP - The current ESI endpoint under inspection; it extends ESIEndpointOf<M>.
 * @param Resut - Defaults to InferESIResponseResult<M, EP>; it is the inferred response result of the endpoint.
 *                This type is tested against acceptable response formats (either a number array or an object
 *                mapping keys to numbers).
 * @param Endpoints - Defaults to ESIEndpointOf<M>; represents the union of all endpoints for method M to be
 *                considered as potential next endpoints.
 *
 * The type works by iterating over each endpoint (EPOrigin) in the union Endpoints. For each EPOrigin:
 *  - It checks whether the original endpoint EP is assignable to Endpoints.
 *  - It then tests if EPOrigin extends the template literal type `${EP}{${string}}/${string}`—that is, if EPOrigin
 *    is a URL based on EP that includes a parameterized section (denoted by `{...}`) followed by some additional
 *    path segments.
 *  - Next, it ensures that the inferred response result type (Resut) conforms to one of the acceptable formats:
 *    either a number array or an object whose values are numbers. The object form uses `{ [x: infer T]: number }`
 *    for type inference (this version works as intended).
 *  - If all conditions are met, EPOrigin is retained in the union; otherwise, it is replaced with never.
 *
 * Finally, the mapped type is indexed over Endpoints to yield a union of all endpoint URLs that satisfy the above
 * conditions. This allows chaining or conditional logic in ESI client implementations based on response shape.
 *
 * @example
 * // Given:
 * // - M = "get"
 * // - EP = "/characters/{character_id}/"
 * // - And InferESIResponseResult<"get", "/characters/{character_id}/"> is inferred as number[] or a
 * //     valid mapping (e.g., { [x: string]: number })
 * // Then, InferNextEndpoint<"get", "/characters/{character_id}/"> computes to the union of endpoints like:
 * //   "/characters/{character_id}/assets"   // if it matches the template and response type constraint.
 *
 * @remarks
 * This type is highly experimental and leverages advanced TypeScript features—including conditional types,
 * template literal types, and type inference—to perform non-trivial endpoint validation.
 */
//* ctt ignore path parameter
export type InferNextEndpoint<
  M extends TESIEntryMethod,
  EP extends Exclude<ESIEndpointOf<M>, symbol> = Exclude<ESIEndpointOf<M>, symbol>,
  BaseResut extends InferESIResponseResult<M, EP> = InferESIResponseResult<M, EP>,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
> = {
  [NextEP in Endpoints]: NextEP extends `${EP}${string}{${string}}/${string}`
    // ? BaseResut extends number[] | TMappingToNumber // does not works...("skipLibCheck=false")
    // DEVNOTE: As it turns out, the behavior of this utility type is broken unless you use the "skipLibCheck=true".
    ? BaseResut extends number[] | { [x: infer T]: number }
    //* ctt
    ? NextEP : never
    /*/
    ? __ShiftType extends 0
      ? [EP, NextEP, BaseResut] : NextEP
    : never
    //*/
  : never;
}[Endpoints];

/**
 * `InferNextEndpoint2` is a utility type that infers the next endpoint based on the current endpoint and method.
 * 
 * DONE: 2025/4/11 15:45:01 
 * ``` jsonc
 * // From the EP, infer the next parameterized endpoint to request.
 * // If the result of the EP is `number[] | { [x: infer T]: number }`, infer the next parameterized endpoint to request.
 * ```
 * 
 * @template M - The HTTP method to use for the request.
 * @template EP - The endpoint from which the next parameterized endpoint to request is inferred.
 * @template BaseResut - The base response result type.
 * @template Endpoints - The possible endpoints for the given method.
 * 
 * @example
 * ```ts
 * type NextEndpoint = InferNextEndpoint2<"post", "/fleets/{fleet_id}/wings/">;
 * // Result: "/fleets/{fleet_id}/wings/{wing_id}/squads/"
 * ```
 * @remarks
 * This type is useful for chaining requests or determining the next endpoint to call based on the current endpoint.
 */
export type InferNextEndpoint2<
  M extends TESIEntryMethod,
  EP extends ESIEndpointOf<M> = ESIEndpointOf<M>,
  BaseResut extends InferESIResponseResultEX<`${M}:${EP}`> = InferESIResponseResultEX<`${M}:${EP}`>,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
> = {
  [NextEP in Endpoints]: NextEP extends `${EP}{${string}}/${string}`
    // ? BaseResut extends number[] | TMappingToNumber // does not works...("skipLibCheck=false")
    // DEVNOTE: As it turns out, the behavior of this utility type is broken unless you use the "skipLibCheck=true".
    ? BaseResut extends number[] | { [x: infer T]: number }
      ? NextEP : never
  : never;
}[Endpoints];

/**
 * `InferNextEndpointLoos` is a utility type that infers the next endpoint based on the current endpoint and method.
 * 
 * DONE: 2025/4/11 15:45:01 
 * ``` jsonc
 * // Infer the next parameterized endpoint to request from the EP
 * // Does not validate the EP result, just infers the next endpoint to request
 * ```
 * 
 * @template M - The HTTP method to use for the request.
 * @template EP - The endpoint from which the next parameterized endpoint to request is inferred.
 * @template Endpoints - The possible endpoints for the given method.
 * 
 * @example
 * ```ts
 * type NextEndpoint = InferNextEndpointLoos<"get", "/markets/groups/">;
 * // Result: "/markets/groups/{market_group_id}/"
 * ```
 * @remarks
 * This type is useful for chaining requests or determining the next endpoint to call based on the current endpoint.
 * It does not validate the response type of the endpoint, only the URL pattern.
 */
export type InferNextEndpointLoos<
  M extends TESIEntryMethod,
//* ctt
  // DEVNOTE: As it turns out, the behavior of this utility type is broken unless you use the "skipLibCheck=true".
  EP extends ESIEndpointOf<M> = ESIEndpointOf<M>,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
/*/
  // This fix is required for skipLibCheck=false
  EP extends Exclude<ESIEndpointOf<M>, symbol> = Exclude<ESIEndpointOf<M>, symbol>,
  Endpoints extends Exclude<ESIEndpointOf<M>, symbol> = Exclude<ESIEndpointOf<M>, symbol>,
//*/
> = {
  [NextEP in Endpoints]: NextEP extends `${EP}{${string}}${string}` ? NextEP : never
}[Endpoints];

/**
 * @see For the meaning of this type of comment trick, see {@link InferNextEndpointLoos} line comment.
 */
type ESIEndpointUnions = {
  [M in TESIEntryMethod]: `${M}:${
    //* ctt
    ESIEndpointOf<M>
    /*/
    Exclude<ESIEndpointOf<M>, symbol>
    //*/
  }`;
}[TESIEntryMethod];
export type InferESIResponseResultEX<
  EP extends unknown
  // EP extends ESIEndpointUnions
> = EP extends `${infer M}:${infer EPRest}`
  ? M extends TESIEntryMethod
    ? EPRest extends ESIEndpointOf<M>
      ? _ESIResponseType<M, EPRest> extends { result: infer U }
        ? U : never
      : never
    : never
  : never;

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

