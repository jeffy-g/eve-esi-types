/**
 * ESI endpoint: /corporations/{corporation_id}/standings/
 */

/**
 * from_id integer
 */
type GetCorporationsCorporationIdStandingsFromId = number;
/**
 * from_type string
 */
type GetCorporationsCorporationIdStandingsFromType = "agent" | "npc_corp" | "faction";
/**
 * standing number
 */
type GetCorporationsCorporationIdStandingsStanding = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdStandingsOk = GetCorporationsCorporationIdStandings_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdStandings_200Ok {
  from_id: GetCorporationsCorporationIdStandingsFromId;
  from_type: GetCorporationsCorporationIdStandingsFromType;
  standing: GetCorporationsCorporationIdStandingsStanding;
  [k: string]: unknown | undefined;
}
