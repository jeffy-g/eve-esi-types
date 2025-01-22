/**
 * ESI endpoint: /universe/systems/
 */

/**
 * 200 ok integer
 */
type GetUniverseSystems_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseSystemsOk = GetUniverseSystems_200Ok[];
