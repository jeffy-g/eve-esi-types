/**
* ESI endpoint: /corporations/{corporation_id}/bookmarks/folders/
*/
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdBookmarksFoldersOk = GetCorporationsCorporationIdBookmarksFolders_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdBookmarksFolders_200Ok {
/**
 * creator_id integer
 */
  creator_id?: number;
/**
 * folder_id integer
 */
  folder_id: number;
/**
 * name string
 */
  name: string;
  [k: string]: unknown | undefined;
}
