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
 * @summary This file is auto-generated and defines version 2.2.6 of the EVE Online ESI response types.
 */

import type { TESIResponseOKMap } from "./response-map.d.ts";
export type { TESIResponseOKMap } from "./response-map.d.ts";

/**
 * mark a specific property as `required`
 */
type RequireThese<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Represents a function that can make ESI requests with various HTTP methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * @example
 * ```ts
 * // @ ts-expect-error
 * export const request: IESIRequestFunction<ESIRequestOptions> = (method, endpoint, pathParams, opt) => {
 * // Implementation for "get" | "post" | "put" | "delete" request
 * };
 * // You can easily implement "get" | "post" | "put" | "delete" requests
 * // with code like the following:
 * (["get", "post", "put", "delete"] as (keyof typeof request)[]).forEach((method) => {
 *     request[method] = function (this: typeof request, endpoint, params, opt) {
 *         return this(method, endpoint, params, opt);
 *     } as TESIRequestFunctionEachMethod<typeof method>;
 * });
 * ```
 */
export interface IESIRequestFunction<ActualOpt>
  extends TESIRequestFunctionSignature<ActualOpt>, TESIRequestFunctionMethods<ActualOpt> {
}

/**
 * Represents the methods available for making ESI requests.
 * 
 *  + This interface is used when you already have implementation code such as  
 *    TESIRequestFunctionSignature and you want to implement additional shorthand methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * @example
 * ```ts
 * export const request: TESIRequestFunctionSignature<ESIRequestOptions> = (method, endpoint, pathParams, opt) => {
 * // Implementation for "get" | "post" | "put" | "delete" request
 * };
 * // You can easily implement "get" | "post" | "put" | "delete" requests
 * // with code like the following:
 * const esiMethods = {} as TESIRequestFunctionMethods<ESIRequestOptions>;
 * (["get", "post", "put", "delete"] as (keyof TESIRequestFunctionMethods)[]).forEach((method) => {
 *     esiMethods[method] = function (endpoint, params, opt) {
 *         return request(method, endpoint, params, opt);
 *     } as TESIRequestFunctionEachMethod<typeof method>;
 * });
 * ```
 */
export type TESIRequestFunctionMethods<ActualOpt = {}> = {
  [method in TESIEntryMethod]: TESIRequestFunctionEachMethod<method, ActualOpt>;
}

declare global {

  /**
   * ### ESI request function all in one signature
   * 
   * TESIRequestFunctionSignature is a type that defines the signature of an ESI request function.
   * 
   * This function sends a request to a specified endpoint and returns a response.
   * 
   * @template ActualOpt - The actual type of the option.  
   *   Required parameters inferred by typescript are merged.
   * @template M - The HTTP method to use for the request
   * @template EP - The Path of the ESI endpoint to send the request to
   * @template P2 - Parameters to include in the request
   * @template Opt - Options to include in the request  
   *   If there is a required parameter, its type will be merged with `ActualOpt`
   * @template R - The response type
   */
  type TESIRequestFunctionSignature<ActualOpt> = <
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M],
    P2 extends IfParameterizedPath<EP, Opt>,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt>,
    R extends InferESIResponseResult<M, EP>
  >(method: M, endpoint: EP, pathParams?: P2, options?: Opt) => Promise<R>;

  /**
   * Represents a function that makes an ESI request using a specific HTTP method.
   *
   * @template M - The HTTP method to use for the request (e.g., "get", "post").
   * @template ActualOpt - The actual type of the options to include in the request.
   * 
   * @param endpoint - The path of the ESI endpoint to send the request to.
   * @param pathParams - An optional parameter that can be a number, an array of numbers, or other parameters
   *                     depending on whether the path is parameterized.
   * @param options - An optional object containing additional options for the request.
   * 
   * @returns A Promise object containing the response data, with the type inferred based on the method and endpoint.
   */
  type TESIRequestFunctionEachMethod<M extends TESIEntryMethod, ActualOpt = {}> = <
    EP extends keyof TESIResponseOKMap[M],
    P2 extends IfParameterizedPath<EP, Opt>,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt>,
    R extends InferESIResponseResult<M, EP>
  >(endpoint: EP, pathParams?: P2, options?: Opt) => Promise<R>;

  // /**
  //  * is parameterized path
  //  */
  // type IsParameterizedPath<EP, A, B> = EP extends `${string}/{${string}}/${string | ""}` ? A: B;
  /**
   * if parameterized path then specify number type, otherwise will be `Opt` type.
   */
  type IfParameterizedPath<EP, Opt> = EP extends `${string}/{${string}}/${string | ""}` ? number | number[]: Opt;

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
    Keys = Exclude<keyof Entry, "result" | "tag">
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
   * Although no data is returned, it indicates successful completion by returning a status of 204.
   */
  type NoContentResponse = { status: 204 };

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
