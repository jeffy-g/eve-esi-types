/**
 * ESI endpoint: /alliances/{alliance_id}/contacts/labels/
 */

/**
 * label_id integer
 */
type GetAlliancesAllianceIdContactsLabelsLabelId = number;
/**
 * label_name string
 */
type GetAlliancesAllianceIdContactsLabelsLabelName = string;
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
  label_id: GetAlliancesAllianceIdContactsLabelsLabelId;
  label_name: GetAlliancesAllianceIdContactsLabelsLabelName;
  [k: string]: unknown | undefined;
}
