/**
* ESI endpoint: /characters/{character_id}/bookmarks/
*/
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdBookmarksOk = GetCharactersCharacterIdBookmarks_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdBookmarks_200Ok {
/**
 * bookmark_id integer
 */
  bookmark_id: number;
  coordinates?: GetCharactersCharacterIdBookmarksCoordinates;
/**
 * created string
 */
  created: string;
/**
 * creator_id integer
 */
  creator_id: number;
/**
 * folder_id integer
 */
  folder_id?: number;
  item?: GetCharactersCharacterIdBookmarksItem;
/**
 * label string
 */
  label: string;
/**
 * location_id integer
 */
  location_id: number;
/**
 * notes string
 */
  notes: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional object that is returned if a bookmark was made on a planet or a random location in space.
 */
interface GetCharactersCharacterIdBookmarksCoordinates {
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
/**
 * Optional object that is returned if a bookmark was made on a particular item.
 */
interface GetCharactersCharacterIdBookmarksItem {
/**
 * item_id integer
 */
  item_id: number;
/**
 * type_id integer
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
