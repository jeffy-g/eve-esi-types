/*!
 * ESI endpoint: /corporations/{corporation_id}/shareholders/
 */
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
  /**
   * share_count integer
   */
  share_count: number;
  /**
   * shareholder_id integer
   */
  shareholder_id: number;
  shareholder_type: GetCorporationsCorporationIdShareholdersShareholderType;
  [k: string]: unknown | undefined;
}
