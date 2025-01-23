/**
 * ESI endpoint: /characters/{character_id}/mail/lists/
 */

/**
 * Mailing list ID
 */
type GetCharactersCharacterIdMailListsMailingListId = number;
/**
 * name string
 */
type GetCharactersCharacterIdMailListsName = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdMailListsOk = GetCharactersCharacterIdMailLists_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailLists_200Ok {
  mailing_list_id: GetCharactersCharacterIdMailListsMailingListId;
  name: GetCharactersCharacterIdMailListsName;
  [k: string]: unknown | undefined;
}
