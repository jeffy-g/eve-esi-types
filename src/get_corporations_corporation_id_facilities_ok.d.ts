/*!
 * ESI endpoint: get:/corporations/{corporation_id}/facilities/
 */
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
  /**
   * facility_id integer
   */
  facility_id: number;
  /**
   * system_id integer
   */
  system_id: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
