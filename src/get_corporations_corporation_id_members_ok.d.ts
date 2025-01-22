/**
 * ESI endpoint: /corporations/{corporation_id}/members/
 */

/**
 * 200 ok integer
 */
type GetCorporationsCorporationIdMembers_200Ok = number;
/**
 * A list of character IDs
 *
 * @maxItems 12601
 */
type GetCorporationsCorporationIdMembersOk = GetCorporationsCorporationIdMembers_200Ok[];
