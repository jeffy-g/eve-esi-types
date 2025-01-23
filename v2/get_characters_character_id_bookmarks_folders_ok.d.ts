/**
* ESI endpoint: /characters/{character_id}/bookmarks/folders/
*/
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
