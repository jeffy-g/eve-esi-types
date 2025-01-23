/**
 * ESI endpoint: /characters/{character_id}/bookmarks/folders/
 */

/**
 * folder_id integer
 */
type GetCharactersCharacterIdBookmarksFoldersFolderId = number;
/**
 * name string
 */
type GetCharactersCharacterIdBookmarksFoldersName = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdBookmarksFoldersOk = GetCharactersCharacterIdBookmarksFolders_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdBookmarksFolders_200Ok {
  folder_id: GetCharactersCharacterIdBookmarksFoldersFolderId;
  name: GetCharactersCharacterIdBookmarksFoldersName;
  [k: string]: unknown | undefined;
}
