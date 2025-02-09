/*!
 * ESI endpoint: post:/characters/{character_id}/assets/names/
 */
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
