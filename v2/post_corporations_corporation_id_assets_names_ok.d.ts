/*!
 * ESI endpoint: /corporations/{corporation_id}/assets/names/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostCorporationsCorporationIdAssetsNamesOk = PostCorporationsCorporationIdAssetsNames_200Ok[];

/**
 * 200 ok object
 */
interface PostCorporationsCorporationIdAssetsNames_200Ok {
  /**
   * item_id integer
   */
  item_id: number;
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}
