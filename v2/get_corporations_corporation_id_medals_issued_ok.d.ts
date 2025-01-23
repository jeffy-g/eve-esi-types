/**
 * ESI endpoint: /corporations/{corporation_id}/medals/issued/
 */

/**
 * ID of the character who was rewarded this medal
 */
type GetCorporationsCorporationIdMedalsIssuedCharacterId = number;
/**
 * issued_at string
 */
type GetCorporationsCorporationIdMedalsIssuedIssuedAt = string;
/**
 * ID of the character who issued the medal
 */
type GetCorporationsCorporationIdMedalsIssuedIssuerId = number;
/**
 * medal_id integer
 */
type GetCorporationsCorporationIdMedalsIssuedMedalId = number;
/**
 * reason string
 */
type GetCorporationsCorporationIdMedalsIssuedReason = string;
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
  character_id: GetCorporationsCorporationIdMedalsIssuedCharacterId;
  issued_at: GetCorporationsCorporationIdMedalsIssuedIssuedAt;
  issuer_id: GetCorporationsCorporationIdMedalsIssuedIssuerId;
  medal_id: GetCorporationsCorporationIdMedalsIssuedMedalId;
  reason: GetCorporationsCorporationIdMedalsIssuedReason;
  status: GetCorporationsCorporationIdMedalsIssuedStatus;
  [k: string]: unknown | undefined;
}
