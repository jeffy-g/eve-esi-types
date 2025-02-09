/*!
 * ESI endpoint: get:/sovereignty/map/
 */
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
  /**
   * alliance_id integer
   */
  alliance_id?: number;
  /**
   * corporation_id integer
   */
  corporation_id?: number;
  /**
   * faction_id integer
   */
  faction_id?: number;
  /**
   * system_id integer
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
