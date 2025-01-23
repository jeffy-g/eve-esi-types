/**
 * ESI endpoint: /universe/structures/
 */

/**
 * 200 ok integer
 */
type GetUniverseStructures_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseStructuresOk = GetUniverseStructures_200Ok[];
