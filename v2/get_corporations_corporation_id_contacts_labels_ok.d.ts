/**
* ESI endpoint: /corporations/{corporation_id}/contacts/labels/
*/
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
