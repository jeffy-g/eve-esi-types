/**
 * ESI endpoint: /corporations/{corporation_id}/medals/
 */

/**
 * created_at string
 */
type GetCorporationsCorporationIdMedalsCreatedAt = string;
/**
 * ID of the character who created this medal
 */
type GetCorporationsCorporationIdMedalsCreatorId = number;
/**
 * description string
 */
type GetCorporationsCorporationIdMedalsDescription = string;
/**
 * medal_id integer
 */
type GetCorporationsCorporationIdMedalsMedalId = number;
/**
 * title string
 */
type GetCorporationsCorporationIdMedalsTitle = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdMedalsOk = GetCorporationsCorporationIdMedals_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdMedals_200Ok {
  created_at: GetCorporationsCorporationIdMedalsCreatedAt;
  creator_id: GetCorporationsCorporationIdMedalsCreatorId;
  description: GetCorporationsCorporationIdMedalsDescription;
  medal_id: GetCorporationsCorporationIdMedalsMedalId;
  title: GetCorporationsCorporationIdMedalsTitle;
  [k: string]: unknown | undefined;
}
