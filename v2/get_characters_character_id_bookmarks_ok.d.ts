/**
 * ESI endpoint: /characters/{character_id}/bookmarks/
 */

/**
 * bookmark_id integer
 */
type GetCharactersCharacterIdBookmarksBookmarkId = number;
/**
 * x number
 */
type GetCharactersCharacterIdBookmarksX = number;
/**
 * y number
 */
type GetCharactersCharacterIdBookmarksY = number;
/**
 * z number
 */
type GetCharactersCharacterIdBookmarksZ = number;
/**
 * created string
 */
type GetCharactersCharacterIdBookmarksCreated = string;
/**
 * creator_id integer
 */
type GetCharactersCharacterIdBookmarksCreatorId = number;
/**
 * folder_id integer
 */
type GetCharactersCharacterIdBookmarksFolderId = number;
/**
 * item_id integer
 */
type GetCharactersCharacterIdBookmarksItemId = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdBookmarksTypeId = number;
/**
 * label string
 */
type GetCharactersCharacterIdBookmarksLabel = string;
/**
 * location_id integer
 */
type GetCharactersCharacterIdBookmarksLocationId = number;
/**
 * notes string
 */
type GetCharactersCharacterIdBookmarksNotes = string;
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
  bookmark_id: GetCharactersCharacterIdBookmarksBookmarkId;
  coordinates?: GetCharactersCharacterIdBookmarksCoordinates;
  created: GetCharactersCharacterIdBookmarksCreated;
  creator_id: GetCharactersCharacterIdBookmarksCreatorId;
  folder_id?: GetCharactersCharacterIdBookmarksFolderId;
  item?: GetCharactersCharacterIdBookmarksItem;
  label: GetCharactersCharacterIdBookmarksLabel;
  location_id: GetCharactersCharacterIdBookmarksLocationId;
  notes: GetCharactersCharacterIdBookmarksNotes;
  [k: string]: unknown | undefined;
}
/**
 * Optional object that is returned if a bookmark was made on a planet or a random location in space.
 */
interface GetCharactersCharacterIdBookmarksCoordinates {
  x: GetCharactersCharacterIdBookmarksX;
  y: GetCharactersCharacterIdBookmarksY;
  z: GetCharactersCharacterIdBookmarksZ;
  [k: string]: unknown | undefined;
}
/**
 * Optional object that is returned if a bookmark was made on a particular item.
 */
interface GetCharactersCharacterIdBookmarksItem {
  item_id: GetCharactersCharacterIdBookmarksItemId;
  type_id: GetCharactersCharacterIdBookmarksTypeId;
  [k: string]: unknown | undefined;
}
