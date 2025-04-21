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
export type PickPathParameters<Path extends string> =
  Path extends `${string}/{${infer Param}}/${infer Rest}`
  ? Param | PickPathParameters<`/${Rest}`>
  : never;

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
