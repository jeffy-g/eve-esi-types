/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file eve-esi-types/v2/util.d.ts
 * @since 2.3.1
 */

/**
 * If `Path` is parameterized, return the parameter name, such as `killmail_id`.
 * 
 * @template Path The string representing the endpoint path.
 * @returns {string | never} The parameter name if the path is parameterized, otherwise `never`.
 */
//* ctt
export type PickPathParameters<Path extends PropertyKey> =
  Path extends `${string}/{${infer Param}}/${infer Rest}`
  ? Param | PickPathParameters<`/${Rest}`>
  : never;
/*/
export type PickPathParameters<Path extends string> =
  Path extends `${string}/{${infer Param}}/${string}/{${infer Param2}}/${string}`
  ? Param | Param2 : Path extends `${string}/{${infer Param}}/${string}`
    ? Param
  : never;
//*/
export type PathParamsToMap<EP extends PropertyKey> =
  EP extends `${infer _Start}{${infer Param}}${infer Rest}`
    ? { [K in Param | keyof PathParamsToMap<Rest>]: string }
    : {};

/**
 * Convert a union type to an intersection type.
 * 
 * @template U The union type to convert.
 * @returns {I} The intersection type.
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
/**
 * Convert a union type to a tuple.
 * 
 * @template T The union type to convert.
 * @returns {Array} The tuple representation of the union type.
 */
export type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R ? [...UnionToTuple<Exclude<T, R>>, R] : [];

// - - - - - - - - - - - - - - - - - - - - - - - - - -
//              Implemented: 2025/4/28
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Extracts parameter keys from a parameterized path string as a tuple.
 *
 * This utility type takes a parameterized path string (e.g., `"/foo/{a}/bar/{b}/baz/"`)
 * and extracts the parameter keys (e.g., `["a", "b"]`) as a tuple.
 *
 * @template Path - The parameterized path string.
 * @returns {string[]} A tuple of parameter keys extracted from the path.
 *
 * @example
 * ```ts
 * type Params = ExtractPathParamKeys<"/foo/{a}/bar/{b}/baz/">;
 * // Result: ["a", "b"]
 * ```
 */
export type ExtractPathParamKeys<
  P extends PropertyKey
> = P extends `${infer _Before}{${infer Param}}${infer Rest}`
  ? [Param, ...ExtractPathParamKeys<Rest>]
  : [];

/**
 * Extract parameter keys from either
 *  - a single parameterized path string, or
 *  - an array (or readonly array) of those strings,
 * and return them as a union.
 *
 * @template Path
 *   Either a string template or an (readonly) array of string templates.
 * @returns A union of all parameter names.
 *
 * @example
 * type U1 = ExtractPathParamUnion<"/foo/{a}/bar/{b}/baz/">;
 * // -> "a" | "b"
 *
 * type U2 = ExtractPathParamUnion<
 *   ["/foo/{a}/bar/{b}/baz/", "/users/{user_id}/posts/{post_id}"]
 * >;
 * // -> "a" | "b" | "user_id" | "post_id"
 */
export type ExtractPathParamUnion<Path extends string | readonly string[]> =
  Path extends readonly any[]
    ? ExtractPathParamKeys<Path[number]>[number]
    : Path extends string
      ? ExtractPathParamKeys<Path>[number] : never;


/**
 * #### Build an array of elements from a flattened tuple of type "1" | "2" | "3" ...
 * 
 * NOTE: This utility cannot calculate lengths greater than 48 (?).
 * 
 *  + Returns the final length of the array.
 * 
 * @template T The union type to be converted to a tuple and measured.
 * @returns {number} The length of the tuple.
 * @date 2025/2/11 18:12:02
 */
export type InferKeysLen<T> = UnionToTuple<T>["length"];
/**
 * Splits a string by a delimiter and returns a tuple of the resulting substrings.
 * @example
 * Split<"get:/characters/{character_id}/wallet/", ":">
 * // Result: ["get", "/characters/{character_id}/wallet/"]
 */
export type Split<S extends string, D extends string = ":"> = 
  S extends `${infer T}${D}${infer U}` 
    ? [T, ...Split<U, D>] 
    : [S];

// // Test cases
// type Test1 = Split<"get:/characters/{character_id}/wallet/">;
// // Expected: ["get", "/characters/{character_id}/wallet/"]
// type Test2 = Split<"a.b.c", ".">;
// // Expected: ['a', 'b', 'c']
// type Test3 = Split<"hello", ",">;
// // Expected: ['hello']

/**
 * Combines an intersection of object types into a single object type.
 * 
 * @template IS The intersection of object types to combine.
 * @returns {Record<string, unknown>} A single object type with all properties from the intersection.
 * 
 * @example
 * type Combined = CombineIntersection<{ a: string } & { b: number }>;
 * // Result: { a: string; b: number }
 */
//* ctt
// export type CombineIntersection<IS> = IS extends infer O ? { [K in keyof O]: O[K] } : never;
// export type CombineIntersection<IS extends Record<string, unknown>> = { [K in keyof IS]: IS[K] };
export type CombineIntersection<IS> = true extends 0 ? { [K in keyof IS]: IS[K] } : { [K in keyof IS]: IS[K] };
/*/
export type CombineIntersection<IS> = IS;
//*/
