/*!
 * ESI endpoint: /corporations/{corporation_id}/membertracking/
 */
/**
 * 200 ok array
 *
 * @maxItems 12601
 */
type GetCorporationsCorporationIdMembertrackingOk = GetCorporationsCorporationIdMembertracking_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdMembertracking_200Ok {
  /**
   * base_id integer
   */
  base_id?: number;
  /**
   * character_id integer
   */
  character_id: number;
  /**
   * location_id integer
   */
  location_id?: number;
  /**
   * logoff_date string
   */
  logoff_date?: string;
  /**
   * logon_date string
   */
  logon_date?: string;
  ship_type_id?: number;
  /**
   * start_date string
   */
  start_date?: string;
  [k: string]: unknown | undefined;
}
