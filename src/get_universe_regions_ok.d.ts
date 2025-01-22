/**
 * ESI endpoint: /universe/regions/
 */

/**
 * 200 ok integer
 */
type GetUniverseRegions_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetUniverseRegionsOk = GetUniverseRegions_200Ok[];
