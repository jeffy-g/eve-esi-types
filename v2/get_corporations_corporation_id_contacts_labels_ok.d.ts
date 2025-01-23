/**
 * ESI endpoint: /corporations/{corporation_id}/contacts/labels/
 */

/**
 * label_id integer
 */
type GetCorporationsCorporationIdContactsLabelsLabelId = number;
/**
 * label_name string
 */
type GetCorporationsCorporationIdContactsLabelsLabelName = string;
/**
 * 200 ok array
 *
 * @maxItems 64
 */
type GetCorporationsCorporationIdContactsLabelsOk = GetCorporationsCorporationIdContactsLabels_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdContactsLabels_200Ok {
  label_id: GetCorporationsCorporationIdContactsLabelsLabelId;
  label_name: GetCorporationsCorporationIdContactsLabelsLabelName;
  [k: string]: unknown | undefined;
}
