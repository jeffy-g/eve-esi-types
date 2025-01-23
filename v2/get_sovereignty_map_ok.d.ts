/**
 * ESI endpoint: /sovereignty/map/
 */

/**
 * alliance_id integer
 */
type GetSovereigntyMapAllianceId = number;
/**
 * corporation_id integer
 */
type GetSovereigntyMapCorporationId = number;
/**
 * faction_id integer
 */
type GetSovereigntyMapFactionId = number;
/**
 * system_id integer
 */
type GetSovereigntyMapSystemId = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetSovereigntyMapOk = GetSovereigntyMap_200Ok[];

/**
 * 200 ok object
 */
interface GetSovereigntyMap_200Ok {
  alliance_id?: GetSovereigntyMapAllianceId;
  corporation_id?: GetSovereigntyMapCorporationId;
  faction_id?: GetSovereigntyMapFactionId;
  system_id: GetSovereigntyMapSystemId;
  [k: string]: unknown | undefined;
}
