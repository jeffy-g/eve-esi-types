/**
 * ESI endpoint: /alliances/
 */

/**
 * 200 ok integer
 */
type GetAlliances_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 5000
 */
type GetAlliancesOk = GetAlliances_200Ok[];
