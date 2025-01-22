/**
 * ESI endpoint: /corporations/{corporation_id}/membertracking/
 */

/**
 * base_id integer
 */
type GetCorporationsCorporationIdMembertrackingBaseId = number;
/**
 * character_id integer
 */
type GetCorporationsCorporationIdMembertrackingCharacterId = number;
/**
 * location_id integer
 */
type GetCorporationsCorporationIdMembertrackingLocationId = number;
/**
 * logoff_date string
 */
type GetCorporationsCorporationIdMembertrackingLogoffDate = string;
/**
 * logon_date string
 */
type GetCorporationsCorporationIdMembertrackingLogonDate = string;
/**
 * ship_type_id integer
 */
type GetCorporationsCorporationIdMembertrackingShipTypeId = number;
/**
 * start_date string
 */
type GetCorporationsCorporationIdMembertrackingStartDate = string;
/**
 * 200 ok array
 *
 * @maxItems 12601
 */
type GetCorporationsCorporationIdMembertrackingOk = GetCorporationsCorporationIdMembertracking_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdMembertracking_200Ok {
  base_id?: GetCorporationsCorporationIdMembertrackingBaseId;
  character_id: GetCorporationsCorporationIdMembertrackingCharacterId;
  location_id?: GetCorporationsCorporationIdMembertrackingLocationId;
  logoff_date?: GetCorporationsCorporationIdMembertrackingLogoffDate;
  logon_date?: GetCorporationsCorporationIdMembertrackingLogonDate;
  ship_type_id?: GetCorporationsCorporationIdMembertrackingShipTypeId;
  start_date?: GetCorporationsCorporationIdMembertrackingStartDate;
  [k: string]: unknown | undefined;
}
