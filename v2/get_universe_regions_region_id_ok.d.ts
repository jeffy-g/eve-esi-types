/**
* ESI endpoint: /universe/regions/{region_id}/
*/
/**
 * constellations array
 *
 * @maxItems 1000
 */

/**
 * 200 ok object
 */
interface GetUniverseRegionsRegionIdOk {
/**
 * constellation integer
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
