/**
 * ESI endpoint: /characters/{character_id}/assets/names/
 */

/**
 * item_id integer
 */
type PostCharactersCharacterIdAssetsNamesItemId = number;
/**
 * name string
 */
type PostCharactersCharacterIdAssetsNamesName = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostCharactersCharacterIdAssetsNamesOk = PostCharactersCharacterIdAssetsNames_200Ok[];

/**
 * 200 ok object
 */
interface PostCharactersCharacterIdAssetsNames_200Ok {
  item_id: PostCharactersCharacterIdAssetsNamesItemId;
  name: PostCharactersCharacterIdAssetsNamesName;
  [k: string]: unknown | undefined;
}
