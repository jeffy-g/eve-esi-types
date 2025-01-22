/**
 * ESI endpoint: /corporations/{corporation_id}/bookmarks/folders/
 */

/**
 * creator_id integer
 */
type GetCorporationsCorporationIdBookmarksFoldersCreatorId = number;
/**
 * folder_id integer
 */
type GetCorporationsCorporationIdBookmarksFoldersFolderId = number;
/**
 * name string
 */
type GetCorporationsCorporationIdBookmarksFoldersName = string;
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
  creator_id?: GetCorporationsCorporationIdBookmarksFoldersCreatorId;
  folder_id: GetCorporationsCorporationIdBookmarksFoldersFolderId;
  name: GetCorporationsCorporationIdBookmarksFoldersName;
  [k: string]: unknown | undefined;
}
