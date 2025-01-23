/**
* ESI endpoint: /industry/facilities/
*/
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
/**
 * ID of the facility
 */
  facility_id: number;
/**
 * Owner of the facility
 */
  owner_id: number;
/**
 * Region ID where the facility is
 */
  region_id: number;
/**
 * Solar system ID where the facility is
 */
  solar_system_id: number;
/**
 * Tax imposed by the facility
 */
  tax?: number;
/**
 * Type ID of the facility
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
