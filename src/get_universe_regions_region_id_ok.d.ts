/*!
 * ESI endpoint: /universe/regions/{region_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseRegionsRegionIdOk {
  /**
   * constellations array
   *
   * @maxItems 1000
   */
  constellations: number[];
  /**
   * description string
   */
  description?: string;
  /**
   * name string
   */
  name: string;
  /**
   * region_id integer
   */
  region_id: number;
  [k: string]: unknown | undefined;
}
