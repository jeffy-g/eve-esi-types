/*!
 * ESI endpoint: /characters/{character_id}/mail/lists/
 */
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
  /**
   * Mailing list ID
   */
  mailing_list_id: number;
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}
