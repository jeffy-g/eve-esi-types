/**
 * ESI endpoint: /alliances/{alliance_id}/contacts/
 */

/**
 * contact_id integer
 */
type GetAlliancesAllianceIdContactsContactId = number;
/**
 * contact_type string
 */
type GetAlliancesAllianceIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
/**
 * Label IDs applied to the contact
 */
type GetAlliancesAllianceIdContactsLabelId = number;
/**
 * label_ids array
 *
 * @maxItems 63
 */
type GetAlliancesAllianceIdContactsLabelIds = GetAlliancesAllianceIdContactsLabelId[];
/**
 * Standing of the contact
 */
type GetAlliancesAllianceIdContactsStanding = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetAlliancesAllianceIdContactsOk = GetAlliancesAllianceIdContacts_200Ok[];

/**
 * 200 ok object
 */
interface GetAlliancesAllianceIdContacts_200Ok {
  contact_id: GetAlliancesAllianceIdContactsContactId;
  contact_type: GetAlliancesAllianceIdContactsContactType;
  label_ids?: GetAlliancesAllianceIdContactsLabelIds;
  standing: GetAlliancesAllianceIdContactsStanding;
  [k: string]: unknown | undefined;
}
