/*!
 * ESI endpoint: get:/corporations/{corporation_id}/standings/
 */
/**
 * from_type string
 */
type GetCorporationsCorporationIdStandingsFromType = "agent" | "npc_corp" | "faction";
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
  /**
   * from_id integer
   */
  from_id: number;
  from_type: GetCorporationsCorporationIdStandingsFromType;
  /**
   * standing number
   */
  standing: number;
  [k: string]: unknown | undefined;
}
