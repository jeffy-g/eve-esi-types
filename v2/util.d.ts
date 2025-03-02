/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file eve-esi-types/util.d.ts
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
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * Convert a union type to a tuple.
 * 
 * @template T The union type to convert.
 * @returns {Array} The tuple representation of the union type.
 */
type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R ? [...UnionToTuple<Exclude<T, R>>, R] : [];

/**
 * #### Build an array of elements from a flattened tuple of type "1" | "2" | "3" ...
 * 
 *  + Returns the final length of the array.
 * 
 * @template T The union type to be converted to a tuple and measured.
 * @returns {number} The length of the tuple.
 * @date 2025/2/11 18:12:02
 */
export type InferKeysLen<T> = UnionToTuple<T>["length"];
