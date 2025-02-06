/*!
 * ESI endpoint: /alliances/{alliance_id}/contacts/labels/
 */
/**
 * 200 ok array
 *
 * @maxItems 64
 */
type GetAlliancesAllianceIdContactsLabelsOk = GetAlliancesAllianceIdContactsLabels_200Ok[];

/**
 * 200 ok object
 */
interface GetAlliancesAllianceIdContactsLabels_200Ok {
  /**
   * label_id integer
   */
  label_id: number;
  /**
   * label_name string
   */
  label_name: string;
  [k: string]: unknown | undefined;
}
