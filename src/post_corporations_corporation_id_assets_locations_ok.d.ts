/*!
 * ESI endpoint: post:/corporations/{corporation_id}/assets/locations/
 */
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
  /**
   * item_id integer
   */
  item_id: number;
  position: PostCorporationsCorporationIdAssetsLocationsPosition;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface PostCorporationsCorporationIdAssetsLocationsPosition {
  /**
   * x number
   */
  x: number;
  /**
   * y number
   */
  y: number;
  /**
   * z number
   */
  z: number;
  [k: string]: unknown | undefined;
}
