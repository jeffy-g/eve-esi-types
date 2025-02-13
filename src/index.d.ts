/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * THIS TSD IS AUTO GENERATED, DO NOT EDIT
 * 
 * @file eve-esi-types/v1/index.d.ts
 * @summary This file is auto-generated and defines version 1.2.6 of the EVE Online ESI response types.
 */

import type { TESIResponseOKMap } from "./response-map.d.ts";
export type { TESIResponseOKMap } from "./response-map.d.ts";

declare global {
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
   * if parameterized path then specify number type, otherwise will be `Opt` type.
   */
  type IfParameterizedPath<EP, Opt> = EP extends `${string}/{${string}}/${string | ""}` ? number | number[]: Opt;
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
  type TESIRequestFunctionSignatureV1<ActualOpt> = <
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M],
    P2 extends IfParameterizedPath<EP, ActualOpt>,
    R extends TESIResponseOKMap[M][EP]
  >(method: M, endpoint: EP, pathParams?: P2, options?: ActualOpt) => Promise<R>;
}

