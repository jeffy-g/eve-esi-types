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
 * @summary This file is auto-generated and defines version 3.0.2 of the EVE Online ESI response types.
 */
import { TESIResponseOKMap, TPathParamsNever } from "./index.d.ts";
export * from "./index.d.ts";

/**
 * Converts a string to lower camel case.
 * 
 * @template S - The string to convert.
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


declare type EInferSomethingBy = {
  readonly METHOD: 0;
  readonly TAGs: 1;
};
declare type InferSomethingBy<Tag, AsType extends EInferSomethingBy = EInferSomethingBy["METHOD"]> = {
  [M in TESIEntryMethod]: TESIResponseOKMap[M] extends Record<`/${string}/`, { tag: infer ActualTag }>
    ? AsType extends EInferSomethingBy["TAGs"]
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
 * @template M - The HTTP method.
 * @date 2025/2/28
 */
export declare type ESITags = InferSomethingBy<never, EInferSomethingBy["TAGs"]>

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//            Utility Type `InferMethod`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Infers the HTTP method based on the provided tag.
 * 
 * @template Tag - The tag to infer the method for.
 * @date 2025/2/28
 */
export declare type InferMethod<Tag> = InferSomethingBy<Tag>
// type XAssets = InferMethod<"Assets">;
// type XContacts = InferMethod<"Contacts">;
// type XPlanetary = InferMethod<"Planetary Interaction">;

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//    Utility Type `TaggedEndpointRequestFunction2`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Creates a function type for making requests to tagged endpoints.
 * 
 * @template M - The HTTP method.
 * @template Tag - The tag associated with the endpoint.
 * @template ActualOpt - The actual options for the request.
 * @template EP - The endpoint path.
 * @template P2 - The path parameters.
 * @template Opt - The request options.
 * @template R - The response type.
 * 
 * @param endpoint - The endpoint path.
 * @param pathParams - The path parameters.
 * @param options - The request options.
 * @returns A promise that resolves to the response.
 * @date 2025/2/28
 */
export declare type TaggedEndpointRequestFunction2<M extends TESIEntryMethod, Tag extends ESITags, ActualOpt = {}> = <
  RealEP extends ReplacePathParams<keyof TESIResponseOKMap[M] & string> | keyof TESIResponseOKMap[M],
  EP extends InferEndpointOrigin<RealEP, SelectEndpointByTag<Tag, M>> extends never ? RealEP: InferEndpointOrigin<RealEP, SelectEndpointByTag<Tag, M>>,
  PathParams extends RealEP extends EP ? IfNeedPathParams<EP>: TPathParamsNever,
  Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt & PathParams>,
  R extends InferESIResponseResult<M, EP>,
  HasOpt = HasRequireParams<TESIResponseOKMap[M][EP]> extends never ? 0 : 1
  // RealEPX = ReplacePathParamsX<RealEPX>,
  // EPX = ReplacePathParams<EP>,
>(endpoint: RealEP, ...options: HasOpt extends 1 ? [Opt] : [Opt?]) => Promise<R>;


// - - - - - - - - - - - - - - - - - - - - - - - - - -
//    Utility Type `ESITaggedEndpointRequest2`
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Maps tags to their corresponding endpoint request functions.
 * 
 * @template Tag - The tag to map.
 * @date 2025/2/28
 */
export declare type ESITaggedEndpointRequest2<Tag extends ESITags, ActualOpt = {}> = {
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
 * @template Tag - The tag associated with the endpoint.
 * @template M - The HTTP method.
 * @template EP - The endpoint path.
 * @date 2025/2/28
 */
export declare type SelectEndpointByTag<
  Tag extends ESITags, M extends TESIEntryMethod
> = {
  [EP in keyof TESIResponseOKMap[M]]: TESIResponseOKMap[M][EP] extends { tag: infer ActualTag }
    ? ActualTag extends Tag
      ? EP : never
    : never;
}[keyof TESIResponseOKMap[M]];
// type XAssetsEndpointGet = SelectEndpointByTag<"Assets", "get">;
// type XAssetsEndpointPost = SelectEndpointByTag<"Assets", "post">;

/**
 * Maps lower camel case tags to their corresponding endpoint request functions.
 * @date 2025/3/12
 */
export declare type TaggedESIRequestMap2<ActualOpt = {}> = {
  [tag in ESITags as LCamelCase<tag>]: ESITaggedEndpointRequest2<tag, ActualOpt>;
};

/**
 * Creates a partial map of lower camel case tags to their corresponding endpoint request functions.
 * ```ts
 * // implements "factionWarfare", "wallet"
 * const esiRq: TaggedESIRequestMapPartial2<"factionWarfare" | "wallet">;
 * ```
 * 
 * @template Props - The properties to require in the partial map.
 * @date 2025/2/28
 */
export declare type TaggedESIRequestMapPartial2<Props extends LCamelCase<ESITags>> = RequireThese<Partial<TaggedESIRequestMap2>, Props>;

export as namespace XESI;
