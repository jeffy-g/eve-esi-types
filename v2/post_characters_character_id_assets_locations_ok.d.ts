/**
 * ESI endpoint: /characters/{character_id}/assets/locations/
 */

/**
 * item_id integer
 */
type PostCharactersCharacterIdAssetsLocationsItemId = number;
/**
 * x number
 */
type PostCharactersCharacterIdAssetsLocationsX = number;
/**
 * y number
 */
type PostCharactersCharacterIdAssetsLocationsY = number;
/**
 * z number
 */
type PostCharactersCharacterIdAssetsLocationsZ = number;
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
  item_id: PostCharactersCharacterIdAssetsLocationsItemId;
  position: PostCharactersCharacterIdAssetsLocationsPosition;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface PostCharactersCharacterIdAssetsLocationsPosition {
  x: PostCharactersCharacterIdAssetsLocationsX;
  y: PostCharactersCharacterIdAssetsLocationsY;
  z: PostCharactersCharacterIdAssetsLocationsZ;
  [k: string]: unknown | undefined;
}
