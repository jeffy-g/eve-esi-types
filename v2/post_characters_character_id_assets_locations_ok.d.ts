/*!
 * ESI endpoint: post:/characters/{character_id}/assets/locations/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostCharactersCharacterIdAssetsLocationsOk = PostCharactersCharacterIdAssetsLocations_200Ok[];

/**
 * 200 ok object
 */
interface PostCharactersCharacterIdAssetsLocations_200Ok {
  /**
   * item_id integer
   */
  item_id: number;
  position: PostCharactersCharacterIdAssetsLocationsPosition;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface PostCharactersCharacterIdAssetsLocationsPosition {
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
