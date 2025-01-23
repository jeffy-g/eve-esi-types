/**
* ESI endpoint: /universe/planets/{planet_id}/
*/

/**
 * 200 ok object
 */
interface GetUniversePlanetsPlanetIdOk {
/**
 * name string
 */
  name: string;
/**
 * planet_id integer
 */
  planet_id: number;
  position: GetUniversePlanetsPlanetIdPosition;
/**
 * The solar system this planet is in
 */
  system_id: number;
/**
 * type_id integer
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniversePlanetsPlanetIdPosition {
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
