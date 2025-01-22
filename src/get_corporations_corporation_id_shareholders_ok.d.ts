/**
 * ESI endpoint: /corporations/{corporation_id}/shareholders/
 */

/**
 * share_count integer
 */
type GetCorporationsCorporationIdShareholdersShareCount = number;
/**
 * shareholder_id integer
 */
type GetCorporationsCorporationIdShareholdersShareholderId = number;
/**
 * shareholder_type string
 */
type GetCorporationsCorporationIdShareholdersShareholderType = "character" | "corporation";
/**
 * List of shareholders
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdShareholdersOk = GetCorporationsCorporationIdShareholders_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdShareholders_200Ok {
  share_count: GetCorporationsCorporationIdShareholdersShareCount;
  shareholder_id: GetCorporationsCorporationIdShareholdersShareholderId;
  shareholder_type: GetCorporationsCorporationIdShareholdersShareholderType;
  [k: string]: unknown | undefined;
}
