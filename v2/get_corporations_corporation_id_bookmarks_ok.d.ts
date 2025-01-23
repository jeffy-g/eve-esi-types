/**
* ESI endpoint: /corporations/{corporation_id}/bookmarks/
*/
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
/**
 * bookmark_id integer
 */
  bookmark_id: number;
  coordinates?: GetCorporationsCorporationIdBookmarksCoordinates;
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
  item?: GetCorporationsCorporationIdBookmarksItem;
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
interface GetCorporationsCorporationIdBookmarksCoordinates {
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
interface GetCorporationsCorporationIdBookmarksItem {
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
