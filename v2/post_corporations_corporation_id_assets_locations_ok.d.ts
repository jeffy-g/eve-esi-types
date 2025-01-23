/**
 * ESI endpoint: /corporations/{corporation_id}/assets/locations/
 */

/**
 * item_id integer
 */
type PostCorporationsCorporationIdAssetsLocationsItemId = number;
/**
 * x number
 */
type PostCorporationsCorporationIdAssetsLocationsX = number;
/**
 * y number
 */
type PostCorporationsCorporationIdAssetsLocationsY = number;
/**
 * z number
 */
type PostCorporationsCorporationIdAssetsLocationsZ = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostCorporationsCorporationIdAssetsLocationsOk = PostCorporationsCorporationIdAssetsLocations_200Ok[];

/**
 * 200 ok object
 */
interface PostCorporationsCorporationIdAssetsLocations_200Ok {
  item_id: PostCorporationsCorporationIdAssetsLocationsItemId;
  position: PostCorporationsCorporationIdAssetsLocationsPosition;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface PostCorporationsCorporationIdAssetsLocationsPosition {
  x: PostCorporationsCorporationIdAssetsLocationsX;
  y: PostCorporationsCorporationIdAssetsLocationsY;
  z: PostCorporationsCorporationIdAssetsLocationsZ;
  [k: string]: unknown | undefined;
}
