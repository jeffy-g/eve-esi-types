/*!
 * ESI endpoint: /alliances/{alliance_id}/contacts/
 */
/**
 * contact_type string
 */
type GetAlliancesAllianceIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
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
