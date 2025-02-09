/*!
 * ESI endpoint: get:/corporations/{corporation_id}/medals/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdMedalsOk = GetCorporationsCorporationIdMedals_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdMedals_200Ok {
  /**
   * created_at string
   */
  created_at: string;
  /**
   * ID of the character who created this medal
   */
  creator_id: number;
  /**
   * description string
   */
  description: string;
  /**
   * medal_id integer
   */
  medal_id: number;
  /**
   * title string
   */
  title: string;
  [k: string]: unknown | undefined;
}
