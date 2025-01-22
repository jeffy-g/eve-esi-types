/**
 * ESI endpoint: /industry/facilities/
 */

/**
 * ID of the facility
 */
type GetIndustryFacilitiesFacilityId = number;
/**
 * Owner of the facility
 */
type GetIndustryFacilitiesOwnerId = number;
/**
 * Region ID where the facility is
 */
type GetIndustryFacilitiesRegionId = number;
/**
 * Solar system ID where the facility is
 */
type GetIndustryFacilitiesSolarSystemId = number;
/**
 * Tax imposed by the facility
 */
type GetIndustryFacilitiesTax = number;
/**
 * Type ID of the facility
 */
type GetIndustryFacilitiesTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetIndustryFacilitiesOk = GetIndustryFacilities_200Ok[];

/**
 * 200 ok object
 */
interface GetIndustryFacilities_200Ok {
  facility_id: GetIndustryFacilitiesFacilityId;
  owner_id: GetIndustryFacilitiesOwnerId;
  region_id: GetIndustryFacilitiesRegionId;
  solar_system_id: GetIndustryFacilitiesSolarSystemId;
  tax?: GetIndustryFacilitiesTax;
  type_id: GetIndustryFacilitiesTypeId;
  [k: string]: unknown | undefined;
}
