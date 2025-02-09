/*!
 * ESI endpoint: get:/corporations/{corporation_id}/medals/issued/
 */
/**
 * status string
 */
type GetCorporationsCorporationIdMedalsIssuedStatus = "private" | "public";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdMedalsIssuedOk = GetCorporationsCorporationIdMedalsIssued_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdMedalsIssued_200Ok {
  /**
   * ID of the character who was rewarded this medal
   */
  character_id: number;
  /**
   * issued_at string
   */
  issued_at: string;
  /**
   * ID of the character who issued the medal
   */
  issuer_id: number;
  /**
   * medal_id integer
   */
  medal_id: number;
  /**
   * reason string
   */
  reason: string;
  status: GetCorporationsCorporationIdMedalsIssuedStatus;
  [k: string]: unknown | undefined;
}
