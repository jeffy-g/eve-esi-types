/**
 * ESI endpoint: /characters/{character_id}/contacts/
 */

/**
 * contact_id integer
 */
type GetCharactersCharacterIdContactsContactId = number;
/**
 * contact_type string
 */
type GetCharactersCharacterIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
/**
 * Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
 */
type GetCharactersCharacterIdContactsIsBlocked = boolean;
/**
 * Whether this contact is being watched
 */
type GetCharactersCharacterIdContactsIsWatched = boolean;
/**
 * Label IDs applied to the contact
 */
type GetCharactersCharacterIdContactsLabelId = number;
/**
 * label_ids array
 *
 * @maxItems 63
 */
type GetCharactersCharacterIdContactsLabelIds = GetCharactersCharacterIdContactsLabelId[];
/**
 * Standing of the contact
 */
type GetCharactersCharacterIdContactsStanding = number;
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
  contact_id: GetCharactersCharacterIdContactsContactId;
  contact_type: GetCharactersCharacterIdContactsContactType;
  is_blocked?: GetCharactersCharacterIdContactsIsBlocked;
  is_watched?: GetCharactersCharacterIdContactsIsWatched;
  label_ids?: GetCharactersCharacterIdContactsLabelIds;
  standing: GetCharactersCharacterIdContactsStanding;
  [k: string]: unknown | undefined;
}
