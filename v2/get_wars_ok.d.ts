/**
 * ESI endpoint: /wars/
 */

/**
 * 200 ok integer
 */
type GetWars_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 2000
 */
type GetWarsOk = GetWars_200Ok[];
