/**
 * ESI endpoint: /corporations/{corporation_id}/bookmarks/
 */

/**
 * bookmark_id integer
 */
type GetCorporationsCorporationIdBookmarksBookmarkId = number;
/**
 * x number
 */
type GetCorporationsCorporationIdBookmarksX = number;
/**
 * y number
 */
type GetCorporationsCorporationIdBookmarksY = number;
/**
 * z number
 */
type GetCorporationsCorporationIdBookmarksZ = number;
/**
 * created string
 */
type GetCorporationsCorporationIdBookmarksCreated = string;
/**
 * creator_id integer
 */
type GetCorporationsCorporationIdBookmarksCreatorId = number;
/**
 * folder_id integer
 */
type GetCorporationsCorporationIdBookmarksFolderId = number;
/**
 * item_id integer
 */
type GetCorporationsCorporationIdBookmarksItemId = number;
/**
 * type_id integer
 */
type GetCorporationsCorporationIdBookmarksTypeId = number;
/**
 * label string
 */
type GetCorporationsCorporationIdBookmarksLabel = string;
/**
 * location_id integer
 */
type GetCorporationsCorporationIdBookmarksLocationId = number;
/**
 * notes string
 */
type GetCorporationsCorporationIdBookmarksNotes = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdBookmarksOk = GetCorporationsCorporationIdBookmarks_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdBookmarks_200Ok {
  bookmark_id: GetCorporationsCorporationIdBookmarksBookmarkId;
  coordinates?: GetCorporationsCorporationIdBookmarksCoordinates;
  created: GetCorporationsCorporationIdBookmarksCreated;
  creator_id: GetCorporationsCorporationIdBookmarksCreatorId;
  folder_id?: GetCorporationsCorporationIdBookmarksFolderId;
  item?: GetCorporationsCorporationIdBookmarksItem;
  label: GetCorporationsCorporationIdBookmarksLabel;
  location_id: GetCorporationsCorporationIdBookmarksLocationId;
  notes: GetCorporationsCorporationIdBookmarksNotes;
  [k: string]: unknown | undefined;
}
/**
 * Optional object that is returned if a bookmark was made on a planet or a random location in space.
 */
interface GetCorporationsCorporationIdBookmarksCoordinates {
  x: GetCorporationsCorporationIdBookmarksX;
  y: GetCorporationsCorporationIdBookmarksY;
  z: GetCorporationsCorporationIdBookmarksZ;
  [k: string]: unknown | undefined;
}
/**
 * Optional object that is returned if a bookmark was made on a particular item.
 */
interface GetCorporationsCorporationIdBookmarksItem {
  item_id: GetCorporationsCorporationIdBookmarksItemId;
  type_id: GetCorporationsCorporationIdBookmarksTypeId;
  [k: string]: unknown | undefined;
}
