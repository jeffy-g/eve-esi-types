/**
* ESI endpoint: /characters/{character_id}/contacts/
*/
/**
 * contact_ids array
 *
 * @minItems 1
 * @maxItems 100
 */
type PutCharactersCharacterIdContactsContactIds = [
/**
 * ID of the contact to edit
 */
  number,
/**
 * ID of the contact to edit
 */
  ...number[]
];
