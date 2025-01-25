/*!
 * ESI endpoint: /corporations/{corporation_id}/contacts/
 */
/**
 * contact_type string
 */
type GetCorporationsCorporationIdContactsContactType = "character" | "corporation" | "alliance" | "faction";
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
  /**
   * contact_id integer
   */
  contact_id: number;
  contact_type: GetCorporationsCorporationIdContactsContactType;
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
