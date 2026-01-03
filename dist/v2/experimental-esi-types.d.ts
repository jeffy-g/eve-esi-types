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
 * @file eve-esi-types/v2/experimental-esi-types.d.ts
 * @summary This file is auto-generated and defines version 3.2.8 of the EVE Online ESI response types.
 */
import type {
  Split,
  UnionToTuple,
  RestrictKeys,
  _ESIResponseType,
  ESIEntryExtraKeys,
  PickPathParameters,
  ExtractPathParamKeys,
  CombineIntersection,
} from "./index.d.ts";


/**
 * Resolves the final request-parameter shape and response type for an ESI endpoint,
 * and indicates whether any parameters are actually required.
 *
 * @template M             The HTTP method (e.g. `"get"`, `"post"`) of the request.
 * @template EPx           The endpoint path, constrained to `ESIEndpointOf<M>` or a string.
 * @template Opt           A record type of user-supplied options (e.g. query/body/path params).
 * @template PathParams    A record type representing the path-parameter properties.
 * @template EntryWithParams
 *   By default, the merged type of the raw ESI response payload
 *   (`_ESIResponseType<M, EPx>`) and `PathParams`.
 * @template RequireKeys
 *   The keys in `EntryWithParams` that represent actual request parameters,
 *   i.e. all keys minus the built-in ESI metadata (`result`, `tag`, `cachedSeconds`).
 * @template FinalOpt
 *   The flattened intersection of:
 *     - the subset of `Opt` whose keys are in `RequireKeys`, and
 *     - a `Pick` of `EntryWithParams` over those same keys.
 *
 * @example
 * ```ts
 * // /characters/{character_id}/attributes/
 * type ExampleEntry = {
 *   result: GetCharactersCharacterIdAttributesOk;
 *   tag: "Skills";
 *   cachedSeconds: 120;
 *   auth: true;
 * };
 * type ExampleOpt  = { auth: true; token: string };
 * type ExamplePath = { character_id: number };
 *
 * // Suppose _ESIResponseType<"get", "/characters/{character_id}/attributes/"> = ExampleEntry
 * type Desc = ResolveEndpointRequest<
 *   "get",
 *   "/characters/{character_id}/attributes/",
 *   ExampleOpt,
 *   ExamplePath
 * >;
 * // Desc resolves to:
 * // [
 * //   { auth: true; token: string; character_id: number; },
 * //   GetCharactersCharacterIdAttributesOk,
 * //   1
 * // ]
 * ```
 *
 * @see {@link ESIEndpointOf}
 * @see {@link _ESIResponseType}
 */
export type ResolveEndpointRequest<
  M extends TESIEntryMethod,
  EPx extends ESIEndpointOf<M> | string,
  Opt extends Record<string, unknown>,
  PathParams extends Record<string, unknown>,
  EntryWithParams = _ESIResponseType<M, EPx> & PathParams,
  RequireKeys extends keyof EntryWithParams = Exclude<keyof EntryWithParams, ESIEntryExtraKeys>,
  FinalOpt = CombineIntersection< RestrictKeys<Opt, RequireKeys> & Pick<EntryWithParams, RequireKeys> >
> = [
  [RequireKeys] extends [never] ? [FinalOpt?] : [FinalOpt],
  EntryWithParams extends { result: infer R } ? R : never,
];


type TESIRequestFunctionContext<
  Mtd extends TESIEntryMethod = TESIEntryMethod,
  REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd> = ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd>,
  ActualOpt extends Record<string, unknown> = Record<string, unknown>,

  EPO extends ResolvedEndpoint<Mtd, REP> = ResolvedEndpoint<Mtd, REP>,
  PPM extends InferPathParams<REP, EPO> = InferPathParams<REP, EPO>,
  Opt extends IdentifyParameters<Mtd, EPO, ActualOpt, PPM> = IdentifyParameters<Mtd, EPO, ActualOpt, PPM>,
  Ret extends InferESIResponseResult<Mtd, EPO> = InferESIResponseResult<Mtd, EPO>,
  HasOpt = HasRequireParams<Mtd, EPO, PPM>,
> = {
  method: Mtd; endpoint: REP;
} & (HasOpt extends 1 ? { options: Opt } : { options?: Opt }) & {
  result?: Ret;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//           TESIRequestFunctionWithContext
// - - - - - - - - - - - - - - - - - - - - - - - - - -
export type TESIRequestFunctionWithContext<
  CTX extends TESIRequestFunctionContext,
  Mtd extends TESIEntryMethod = CTX["method"],
  // @ts-expect-error TODO: 2025/4/24
  REP extends ReplacePathParams<ESIEndpointOf<Mtd>> | ESIEndpointOf<Mtd> = CTX["endpoint"],
  ActualOpt extends Record<string, unknown> = CTX["options"]
> = (context: CTX) => Promise<NonNullable<CTX["result"]>>;


/**
 * Infers the response result type of an ESI endpoint based on a union of HTTP method and endpoint.
 * 
 * This utility type takes an endpoint union (`EPU`) in the format `${TESIEntryMethod}:${ESIEndpointAll}`
 * and infers the response result type from the corresponding ESI response map.
 * 
 * @template EPU A union of HTTP method and endpoint in the format `${TESIEntryMethod}:${ESIEndpointAll}`.
 * 
 * @remarks
 * This type uses advanced TypeScript features such as template literal types and conditional types
 * to infer the response result type of a given ESI endpoint.
 * 
 * @example
 * ``` ts
 * type ResponseResult = InferESIResponseResultFromUnion<"get:/characters/{character_id}/">;
 * // Result: The inferred response result type for the given method and endpoint.
 * ```
 */
export type InferESIResponseResultFromUnion<
  EP extends unknown
  // EP extends ESIEndpointUnions
> = EP extends `${infer M}:${infer EPRest}`
  //* ctt
  ? M extends TESIEntryMethod
    ? EPRest extends ESIEndpointOf<M>
      ? _ESIResponseType<M, EPRest> extends { result: infer U }
        ? U : never
      : never
    : never
  : never;
  /*/
  ? EPRest extends (
      M extends TESIEntryMethod ? ESIEndpointOf<M> : never
    )
    ? _ESIResponseType<M, EPRest> extends { result: infer U }
      ? U : never
    : never
  : never;
  //*/

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//                    Next Endpoint
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @experimental
 * 
 * Resolves the next applicable ESI endpoint based on the current endpoint and its response type.
 * 
 * This utility type determines which endpoints can be chained after the current endpoint (`EP`),
 * based on the response type (`BaseResut`) and the URL pattern of potential next endpoints.
 * 
 * @template M The HTTP method type (e.g., "get", "post", etc.), which must extend `TESIEntryMethod`.
 * @template EP The current ESI endpoint under inspection; it extends `ESIEndpointOf<M>`.
 * @template BaseResut Defaults to `InferESIResponseResult<M, EP>`; it is the inferred response result of the endpoint.
 * @template Endpoints Defaults to `ESIEndpointOf<M>`; represents the union of all endpoints for method `M` to be considered as potential next endpoints.
 * 
 * @remarks
 * This type uses advanced TypeScript features such as conditional types, template literal types, and type inference
 * to perform endpoint validation and chaining.
 * 
 * @example
 * ```ts
 * type NextEndpoint = ResolveNextEndpoint<"get", "/universe/graphics/">;
 * // Result: Union of endpoints like "/universe/graphics/{graphic_id}/" if they match the template and response type constraint.
 * ```
 */
export type ResolveNextEndpoint<
  M extends TESIEntryMethod,
  EP extends Exclude<ESIEndpointOf<M>, symbol> = Exclude<ESIEndpointOf<M>, symbol>,
  BaseResut extends InferESIResponseResult<M, EP> = InferESIResponseResult<M, EP>,
  // Endpoints extends ESIEndpointAll = ESIEndpointAll,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
> = {
  [NextEP in Endpoints]: NextEP extends `${EP}${string}{${string}}/${string}`
    ? ValidateNextEndpoint<BaseResut, NextEP> extends 1
      ? NextEP : never
      // ? [EP, NextEP, BaseResut] : never
    : never;
}[Endpoints];


export type SplitEndpointUnion<
  S extends ESIEndpointUnions, D extends string = ":",
  AR extends any[] = Split<S, D>
> = AR[0] extends TESIEntryMethod
  ? AR[1] extends Exclude<ESIEndpointOf<AR[0]>, symbol>
    ? AR: never
  : never;
// // Test cases
// type Test1 = SplitEndpointUnion<"post:/universe/ids/">;

/**
 * Resolves the next applicable ESI endpoint based on a union of HTTP method and endpoint.
 * 
 * This utility type determines which endpoints can be chained after the current endpoint (`EP`),
 * based on the response type (`BaseResut`) and the URL pattern of potential next endpoints.
 * 
 * @template EPU A union of HTTP method and endpoint in the format `${TESIEntryMethod}:${ESIEndpointAll}`.
 * @template M The HTTP method extracted from `EPU`.
 * @template EP The current endpoint extracted from `EPU`.
 * @template BaseResut The inferred response result of the endpoint.
 * @template Endpoints The union of all endpoints for the given method.
 * 
 * @remarks
 * This type uses advanced TypeScript features such as conditional types and template literal types
 * to infer the next valid endpoint based on the current endpoint and its response type.
 * 
 * @example
 * ``` ts
 * type NextEndpoint = ResolveNextEndpointFromUnion<"get:/universe/graphics/">;
 * // Result: Union of endpoints like "/universe/graphics/{graphic_id}/" if they match the template and response type constraint.
 * ```
 */
export type ResolveNextEndpointFromUnion<
  EPU extends ESIEndpointUnions,
  SplitM_EP extends [TESIEntryMethod, any] = SplitEndpointUnion<EPU>,
  M extends TESIEntryMethod = SplitM_EP[0],
  EP extends Exclude<ESIEndpointOf<M>, symbol> = SplitM_EP[1],
  BaseResut extends InferESIResponseResult<M, EP> = InferESIResponseResult<M, EP>,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
> = {
  [NextEP in Endpoints]: NextEP extends `${EP}${string}{${string}}/${string}`
    ? ValidateNextEndpoint<BaseResut, NextEP> extends 1
      ? NextEP : never
      // ? [EP, NextEP, BaseResut] : never
    : never;
}[Endpoints];

/**
 * Validates whether a given endpoint can be the next endpoint in a chain based on the response type of the current endpoint.
 * 
 * This utility type checks if the response type (`Entry`) of the current endpoint satisfies the requirements
 * for the next endpoint (`NextEP`), such as having the necessary path parameters.
 * 
 * @template BaseResut The response type of the current endpoint (e.g., `number[]` or an array of objects).
 * @template NextEP The next endpoint to validate.
 * @template Debug Optional debug flag; if set to `1`, additional debug information is returned.
 * 
 * @remarks
 * This type assumes that if the response type is `number[]`, the next endpoint is always valid. For object arrays,
 * it checks if the required path parameters can be inferred from the response type.
 * 
 * ```ts
 * type IsValid = ValidateNextEndpoint<GetCharactersCharacterIdMailOk, "/characters/{character_id}/mail/{mail_id}/">;
 * // or
 * type IsValid = ValidateNextEndpoint<GetCharactersCharacterIdMail_200Ok[], "/characters/{character_id}/mail/{mail_id}/">;
 * // Result: 1 if valid, 0 otherwise.
 * ```
 */
export type ValidateNextEndpoint<
  BaseResut extends unknown, // number[] or SomeType[]
  NextEP extends string,
  Debug = 0,
> = 
  // If it is simply a number[], it is unconditionally assumed that there is a next endpoint.
  BaseResut extends number[] ? 1 : ValidateEndpointParamsInArray<BaseResut, NextEP, Debug>;

/**
 * Validates whether the elements of an object array satisfy the path parameter requirements
 * for a given endpoint.
 * 
 * @template BaseResut The response type of the current endpoint (e.g., an array of objects).
 * @template NextEP The next endpoint to validate.
 * @template Debug Optional debug flag; if set to `1`, additional debug information is returned.
 * @template PathParams Defaults to `ExtractPathParamsTuple<NextEP>`; represents the path parameters of the next endpoint.
 * 
 * @remarks
 * This type assumes that if the response type is an array of objects, it checks whether the required
 * path parameters can be inferred from the properties of the objects in the array.
 * 
 * @example
 * ```ts
 * type IsValid = ValidateEndpointParamsInArray<GetCharactersCharacterIdMailOk, "/characters/{character_id}/mail/{mail_id}/">;
 * // or
 * type IsValid = ValidateEndpointParamsInArray<GetCharactersCharacterIdMail_200Ok[], "/characters/{character_id}/mail/{mail_id}/">;
 * // Result: 1 if valid, 0 otherwise.
 * ```
 */
type ValidateEndpointParamsInArray<
  BaseResut extends unknown, // SomeType[]
  NextEP extends string,
  Debug = 0,
  PathParams extends any[] = ExtractPathParamKeys<NextEP>,
> = BaseResut extends (infer O)[]
  ? PathParams[1] extends keyof O ? NonNullable<O[PathParams[1]]> extends number
    ? Debug extends 1 // development
      ? [O, PathParams] : 1
    : 0
  : 0
: 0;

/**
 * `ResolveNextEndpointLoos` is a utility type that infers the next endpoint based on the current endpoint and method.
 * 
 * DONE: 2025/4/11 15:45:01 
 * ``` jsonc
 * // Infer the next parameterized endpoint to request from the EP
 * // Does not validate the EP result, just infers the next endpoint to request
 * ```
 * 
 * @template M The HTTP method to use for the request.
 * @template EP The endpoint from which the next parameterized endpoint to request is inferred.
 * @template Endpoints The possible endpoints for the given method.
 * 
 * ```ts
 * type NextEndpoint = ResolveNextEndpointLoos<"get", "/markets/groups/">;
 * // Result: "/markets/groups/{market_group_id}/"
 * ```
 * @remarks
 * This type is useful for chaining requests or determining the next endpoint to call based on the current endpoint.
 * It does not validate the response type of the endpoint, only the URL pattern.
 */
export type ResolveNextEndpointLoos<
  M extends TESIEntryMethod,
  /* ctt
  // DEVNOTE: By applying "skipLibCheck=true", typescript semantics error will not occur.
  EP extends ESIEndpointOf<M> = ESIEndpointOf<M>,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
  /*/
  // This fix is required for skipLibCheck=false
  EP extends Exclude<ESIEndpointOf<M>, symbol> = Exclude<ESIEndpointOf<M>, symbol>,
  Endpoints extends ESIEndpointOf<M> = ESIEndpointOf<M>,
  //*/
> = {
  [NextEP in Endpoints]: NextEP extends `${EP}{${string}}${string}` ? NextEP : never
}[Endpoints];

/**
 * @see For the meaning of this type of comment trick, see {@link ResolveNextEndpointLoos} line comment.
 */
export type ESIEndpointUnions = {
  [M in TESIEntryMethod]: `${M}:${
    /* ctt
    ESIEndpointOf<M>
    /*/
    Exclude<ESIEndpointOf<M>, symbol>
    //*/
  }`;
}[TESIEntryMethod];


// - - - - - - - - - - - - - - - - - - - - - - - - - -
//                  Filter Endpoint
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Filters ESI endpoints based on the response type.
 * 
 * This utility type iterates over all ESI endpoint unions (`ESIEndpointUnions`) and checks
 * if the inferred response type (`InferESIResponseResultFromUnion<EPU>`) matches the specified type `T`.
 * If it matches, the endpoint is included; otherwise, it is excluded.
 * 
 * @template T The response type to filter endpoints by.
 * 
 * @example
 * ``` ts
 * type NumberEndpoints = FilterEndpointUnionsByResponse<number>;
 * // Result: Union of endpoints whose response type is `number`.
 * ```
 */
export type FilterEndpointUnionsByResponse<T> = {
  [EPU in ESIEndpointUnions]: InferESIResponseResultFromUnion<EPU> extends T ? EPU : never;
}[ESIEndpointUnions];

/**
 * Extracts valid next ESI endpoints from a filtered list of endpoints.
 * 
 * This utility type iterates over a list of filtered endpoints (`EPUs`) and applies
 * `ResolveNextEndpoint2` to determine if the endpoint is valid. If valid, the endpoint
 * is included in the result; otherwise, it is excluded.
 * 
 * @template EPUs The list of filtered endpoints to process.
 * 
 * @example
 * ``` ts
 * type ValidEndpoints = ExtractValidNextEndpoints<FilterEndpointsByResponse<number[]>>;
 * // Result: Union of valid next endpoints.
 * ```
 */
export type ExtractValidNextEndpoints<
  T = number[], EPUs extends ESIEndpointUnions = FilterEndpointUnionsByResponse<T>,
  Debug = 0
> = {
    // [EPU in EPUs]: ResolveNextEndpointFromUnion<EPU>;
    [EPU in EPUs]: Debug extends 1
      ? ResolveNextEndpointFromUnion<EPU> extends never
        ? never
        : [EPU, ResolveNextEndpointFromUnion<EPU>] // array
        // : { [X in EPU]: ResolveNextEndpointFromUnion<EPU> }  // map
    : ResolveNextEndpointFromUnion<EPU>;
}[EPUs];

export type ExtractValidNextEndpointsOrMap<
    T = number[],
    EPUs = FilterEndpointUnionsByResponse<T>,
    Debug = 0
> = EPUs extends infer EPU
  ? EPU extends EPUs
    ? EPU extends ESIEndpointUnions
        ? ResolveNextEndpointFromUnion<EPU> extends never
          ? never
          : Debug extends 1 ? { readonly [K in EPU]: UnionToTuple<ResolveNextEndpointFromUnion<EPU>> }
          // : Debug extends 1 ? { readonly [K in EPU]: ResolveNextEndpointFromUnion<EPU> }
        : ResolveNextEndpointFromUnion<EPU>
      : never
    : never
  : never;
