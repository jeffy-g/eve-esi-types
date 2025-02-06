/*!
 * ESI endpoint: /characters/{character_id}/contacts/
 */
/**
 * contact_type string
 */
type GetCharactersCharacterIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
/**
 * 200 ok array
 *
 * @maxItems 1024
 */
type GetCharactersCharacterIdContactsOk = GetCharactersCharacterIdContacts_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdContacts_200Ok {
  /**
   * contact_id integer
   */
  contact_id: number;
  contact_type: GetCharactersCharacterIdContactsContactType;
  /**
   * Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
   */
  is_blocked?: boolean;
  /**
   * Whether this contact is being watched
   */
  is_watched?: boolean;
  /**
   * label_ids array
   *
   * @maxItems 63
   */
  label_ids?: number[];
  /**
   * Standing of the contact
   */
  standing: number;
  [k: string]: unknown | undefined;
}
