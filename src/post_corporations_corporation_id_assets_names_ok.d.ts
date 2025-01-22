/**
 * ESI endpoint: /corporations/{corporation_id}/assets/names/
 */

/**
 * item_id integer
 */
type PostCorporationsCorporationIdAssetsNamesItemId = number;
/**
 * name string
 */
type PostCorporationsCorporationIdAssetsNamesName = string;
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
  item_id: PostCorporationsCorporationIdAssetsNamesItemId;
  name: PostCorporationsCorporationIdAssetsNamesName;
  [k: string]: unknown | undefined;
}
