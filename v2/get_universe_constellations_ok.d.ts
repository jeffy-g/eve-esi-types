/**
 * ESI endpoint: /universe/constellations/
 */

/**
 * 200 ok integer
 */
type GetUniverseConstellations_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseConstellationsOk = GetUniverseConstellations_200Ok[];
