/**
* ESI endpoint: /alliances/{alliance_id}/contacts/
*/
/**
 * contact_type string
 */
type GetAlliancesAllianceIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
/**
 * label_ids array
 *
 * @maxItems 63
 */
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
/**
 * contact_id integer
 */
  contact_id: number;
  contact_type: GetAlliancesAllianceIdContactsContactType;
/**
 * Label IDs applied to the contact
 */
  label_ids?: number[];
/**
 * Standing of the contact
 */
  standing: number;
  [k: string]: unknown | undefined;
}
