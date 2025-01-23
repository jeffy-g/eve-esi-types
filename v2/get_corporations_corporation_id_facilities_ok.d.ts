/**
 * ESI endpoint: /corporations/{corporation_id}/facilities/
 */

/**
 * facility_id integer
 */
type GetCorporationsCorporationIdFacilitiesFacilityId = number;
/**
 * system_id integer
 */
type GetCorporationsCorporationIdFacilitiesSystemId = number;
/**
 * type_id integer
 */
type GetCorporationsCorporationIdFacilitiesTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdFacilitiesOk = GetCorporationsCorporationIdFacilities_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdFacilities_200Ok {
  facility_id: GetCorporationsCorporationIdFacilitiesFacilityId;
  system_id: GetCorporationsCorporationIdFacilitiesSystemId;
  type_id: GetCorporationsCorporationIdFacilitiesTypeId;
  [k: string]: unknown | undefined;
}
