/**
* ESI endpoint: /universe/constellations/{constellation_id}/
*/
/**
 * systems array
 *
 * @maxItems 10000
 */

/**
 * 200 ok object
 */
interface GetUniverseConstellationsConstellationIdOk {
/**
 * constellation_id integer
 */
  constellation_id: number;
/**
 * name string
 */
  name: string;
  position: GetUniverseConstellationsConstellationIdPosition;
/**
 * The region this constellation is in
 */
  region_id: number;
/**
 * system integer
 */
  systems: number[];
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseConstellationsConstellationIdPosition {
/**
 * x number
 */
  x: number;
/**
 * y number
 */
  y: number;
/**
 * z number
 */
  z: number;
  [k: string]: unknown | undefined;
}
