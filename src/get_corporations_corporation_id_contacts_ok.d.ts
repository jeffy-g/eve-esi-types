/**
 * ESI endpoint: /corporations/{corporation_id}/contacts/
 */

/**
 * contact_id integer
 */
type GetCorporationsCorporationIdContactsContactId = number;
/**
 * contact_type string
 */
type GetCorporationsCorporationIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
/**
 * Whether this contact is being watched
 */
type GetCorporationsCorporationIdContactsIsWatched = boolean;
/**
 * Label IDs applied to the contact
 */
type GetCorporationsCorporationIdContactsLabelId = number;
/**
 * label_ids array
 *
 * @maxItems 63
 */
type GetCorporationsCorporationIdContactsLabelIds = GetCorporationsCorporationIdContactsLabelId[];
/**
 * Standing of the contact
 */
type GetCorporationsCorporationIdContactsStanding = number;
/**
 * 200 ok array
 *
 * @maxItems 200
 */
type GetCorporationsCorporationIdContactsOk = GetCorporationsCorporationIdContacts_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdContacts_200Ok {
  contact_id: GetCorporationsCorporationIdContactsContactId;
  contact_type: GetCorporationsCorporationIdContactsContactType;
  is_watched?: GetCorporationsCorporationIdContactsIsWatched;
  label_ids?: GetCorporationsCorporationIdContactsLabelIds;
  standing: GetCorporationsCorporationIdContactsStanding;
  [k: string]: unknown | undefined;
}
