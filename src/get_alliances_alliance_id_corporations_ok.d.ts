/**
 * ESI endpoint: /alliances/{alliance_id}/corporations/
 */

/**
 * 200 ok integer
 */
type GetAlliancesAllianceIdCorporations_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetAlliancesAllianceIdCorporationsOk = GetAlliancesAllianceIdCorporations_200Ok[];
