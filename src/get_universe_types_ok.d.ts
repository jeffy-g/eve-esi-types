/**
 * ESI endpoint: /universe/types/
 */

/**
 * 200 ok integer
 */
type GetUniverseTypes_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetUniverseTypesOk = GetUniverseTypes_200Ok[];
