/**
 * ESI endpoint: /characters/{character_id}/contacts/
 */

/**
 * contact_ids array
 *
 * @minItems 1
 * @maxItems 100
 */
type PostCharactersCharacterIdContactsContactIds = [
  PostCharactersCharacterIdContactsContactId,
  ...PostCharactersCharacterIdContactsContactId[]
];
/**
 * ID of the contact to edit
 */
type PostCharactersCharacterIdContactsContactId = number;
