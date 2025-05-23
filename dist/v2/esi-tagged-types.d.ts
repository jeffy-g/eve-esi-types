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
 * @file eve-esi-types/v2/esi-tagged-types.d.ts
 * @summary This file is auto-generated and defines version 3.2.7 of the EVE Online ESI response types.
 */
import type { TESIResponseOKMap, ResolveEndpointParameters } from "./index.d.ts";
export type * from "./index.d.ts";

/**
 * Converts a string to lower camel case.
 * 
 * @template S The string to convert.
 * @example
 * // returns "assets"
 * LCamelCase<"Assets">
 * @example
 * // returns "factionWarfare"
 * LCamelCase<"Faction Warfare">
 * @date 2025/2/27
 */
export declare type LCamelCase<S extends string> = S extends `${infer P1} ${infer P2}`
  ? `${Lowercase<P1>}${Capitalize<P2>}` : Lowercase<S>;


declare type InferSomethingByBrand<N = number> = N & { __enum: "InferSomethingBy" };
declare type InferSomethingByMethod  = InferSomethingByBrand<0>;
declare type InferSomethingByTags    = InferSomethingByBrand<1>;
declare type InferSomethingBy<Tag, AsType extends InferSomethingByBrand = InferSomethingByMethod> = {
  [M in TESIEntryMethod]: TESIResponseOKMap[M] extends Record<`/${string}/`, { tag: infer ActualTag }>
    ? AsType extends InferSomethingByTags
      ? ActualTag : ActualTag extends Tag
        ? M
      : never
    : never;
}[TESIEntryMethod];
// - - - - - - - - - - - - - - - - - - - - - - - - - -
//               Utility Type `ESITags`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Maps HTTP methods to their corresponding tags.
 * @template M The HTTP method.
 * @date 2025/2/28
 */
export declare type ESITags = InferSomethingBy<never, InferSomethingByTags>;
/**
 * @date 2025/4/12
 */
export declare type LESITags = LCamelCase<ESITags>;

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//            Utility Type `InferMethod`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Infers the HTTP method based on the provided tag.
 * 
 * @template Tag The tag to infer the method for.
 * @date 2025/2/28
 */
export declare type InferMethod<Tag> = InferSomethingBy<Tag>;
/* ctt
type XAssets = InferMethod<"Assets">;
type XContacts = InferMethod<"Contacts">;
type XPlanetary = InferMethod<"Planetary Interaction">;
/*/
//*/

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//    Utility Type `TaggedEndpointRequestFunction2`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Infers the endpoint origin based on the provided endpoints.
 * 
 *  + Customed InferEndpointOrigin
 * 
 * @template RealEP The type of the real endpoint.
 * @template Endpoints The type of the possible endpoints.
 * 
 * @returns The inferred endpoint origin.
 */
type _InferEndpointOrigin<
  RealEP extends unknown, Endpoints extends PropertyKey
> = {
  [EP in Endpoints]: RealEP extends ReplacePathParams<EP>
    ? EP : never;
}[Endpoints];

/**
 * Creates a function type for making requests to tagged endpoints.
 *
 * This utility type defines a function signature for interacting with ESI endpoints
 * that are associated with specific tags and HTTP methods. It ensures type safety
 * by inferring the required parameters, options, and response types for the given endpoint.
 *
 * @template M - The HTTP method (e.g., "get", "post").
 * @template Tag - The tag associated with the endpoint (e.g., "Assets", "Skills").
 * @template ActualOpt - A record type representing additional options for the request.
 * @template EndPoints - The possible endpoints associated with the tag and method.
 *
 * @param endpoint - The endpoint path, which can be parameterized or resolved.
 * @param options - An optional object containing additional options for the request.
 *                  If the endpoint has required parameters, this parameter must be provided.
 * @returns A promise that resolves to the response type of the endpoint.
 *
 * @remarks
 * - The `...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]` parameter ensures
 *   that if the endpoint has required parameters, the `options` parameter must be provided.
 *   If there are no required parameters, the `options` parameter is optional.
 * - This type leverages `ResolveEndpointParameters` to infer the required options and response type.
 *
 * @example
 * ```ts
 * // Example: Making a request to the "Assets" tag with the "get" method
 * type AssetsRequest = TaggedEndpointRequestFunction2<"get", "Assets", ESIRequestOptions>;
 * const fetchAssets: AssetsRequest = async (endpoint, ...options) => {
 *   // Implementation here
 *   throw new Error();
 * };
 * fetchAssets("/characters/{character_id}/assets/", {
 *     pathParams: 12345,
 *     auth: true,
 *     token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }).then(response => {
 *     console.log(response);
 * });
 * ```
 *
 * @see {@link ResolveEndpointParameters}
 * @see {@link SelectEndpointByTag}
 * @see {@link InferESIResponseResult}
 */
/* ctt
export declare type TaggedEndpointRequestFunction2<
  M extends TESIEntryMethod, Tag extends ESITags,
  ActualOpt extends Record<string, unknown> = {},
  EndPoints extends SelectEndpointByTag<Tag, M> = SelectEndpointByTag<Tag, M>,
> = <
    REP extends ReplacePathParams<EndPoints> | EndPoints,
    EPO extends _InferEndpointOrigin<REP, EndPoints> extends never ? REP: _InferEndpointOrigin<REP, EndPoints>,
    PPM extends InferPathParams<REP, EPO>,
    Opt extends IdentifyParameters<M, EPO, ActualOpt, PPM>,
    Ret extends InferESIResponseResult<M, EPO>,
    HasOpt = HasRequireParams<M, EPO, PPM>,
>(endpoint: REP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;
/*/
export declare type TaggedEndpointRequestFunction2<
  M extends TESIEntryMethod, Tag extends ESITags,
  ActualOpt extends Record<string, unknown> = {},
  EndPoints extends SelectEndpointByTag<Tag, M> = SelectEndpointByTag<Tag, M>,
> = <
    REP extends ReplacePathParams<EndPoints> | EndPoints,
    EPO extends _InferEndpointOrigin<REP, EndPoints> extends never ? REP: _InferEndpointOrigin<REP, EndPoints>,
    // @ts-expect-error TODO: 2025/4/28 TS2344: Type 'EPO' does not satisfy the constraint 'ResolvedEndpoint<M, REP>'
    Params extends ResolveEndpointParameters<M, REP, EPO, ActualOpt>,
    Opt extends Params["finalOptions"],
    Ret extends Params["result"],
  >(endpoint: REP, ...options: Params["optionIsRequire"] extends 1 ? [Opt] : [Opt?]) => Promise<Ret>;
//*/


// - - - - - - - - - - - - - - - - - - - - - - - - - -
//    Utility Type `ESITaggedEndpointRequest2`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Maps tags to their corresponding endpoint request functions.
 * 
 * @template Tag The tag to map.
 * @template ActualOpt The actual options for the request.
 * @date 2025/2/28
 */
export declare type ESITaggedEndpointRequest2<Tag extends ESITags, ActualOpt extends Record<string, unknown> = {}> = {
  [tag in Tag]: {
    [method in InferMethod<Tag>]: TaggedEndpointRequestFunction2<method, tag, ActualOpt>;
  };
}[Tag];

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//        Utility Type `SelectEndpointByTag`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Selects an endpoint by tag and method.
 * 
 * @template Tag The tag associated with the endpoint.
 * @template M The HTTP method.
 * @date 2025/2/28
 */
export declare type SelectEndpointByTag<
  Tag extends ESITags, M extends TESIEntryMethod
> = {
  [EP in ESIEndpointOf<M>]: TESIResponseOKMap[M][EP] extends { tag: infer ActualTag }
    ? ActualTag extends Tag
      ? EP : never
    : never;
}[ESIEndpointOf<M>];
/* ctt
type XAssetsEndpointGet = SelectEndpointByTag<"Assets", "get">;
type XAssetsEndpointPost = SelectEndpointByTag<"Assets", "post">;
/*/
//*/

/**
 * Maps lower camel case tags to their corresponding endpoint request functions.
 * 
 * @template ActualOpt The actual options for the request.
 * @date 2025/3/12
 */
export declare type TaggedESIRequestMap2<ActualOpt extends Record<string, unknown> = {}> = {
  [tag in ESITags as LCamelCase<tag>]: ESITaggedEndpointRequest2<tag, ActualOpt>;
};

/**
 * Creates a partial map of lower camel case tags to their corresponding endpoint request functions.
 * ```ts
 * // implements "factionWarfare", "wallet"
 * const esiRq: TaggedESIRequestMapPartial2<"factionWarfare" | "wallet">;
 * ```
 * 
 * @template LowerTags The properties to require in the partial map.
 * @date 2025/2/28
 */
export declare type TaggedESIRequestMapPartial2<LowerTags extends LCamelCase<ESITags>> = RequireThese<Partial<TaggedESIRequestMap2>, LowerTags>;

export as namespace XESI;
