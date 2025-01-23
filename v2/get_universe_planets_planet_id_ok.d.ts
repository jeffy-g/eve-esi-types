/**
 * ESI endpoint: /universe/planets/{planet_id}/
 */

/**
 * name string
 */
type GetUniversePlanetsPlanetIdName = string;
/**
 * planet_id integer
 */
type GetUniversePlanetsPlanetIdPlanetId = number;
/**
 * x number
 */
type GetUniversePlanetsPlanetIdX = number;
/**
 * y number
 */
type GetUniversePlanetsPlanetIdY = number;
/**
 * z number
 */
type GetUniversePlanetsPlanetIdZ = number;
/**
 * The solar system this planet is in
 */
type GetUniversePlanetsPlanetIdSystemId = number;
/**
 * type_id integer
 */
type GetUniversePlanetsPlanetIdTypeId = number;

/**
 * 200 ok object
 */
interface GetUniversePlanetsPlanetIdOk {
  name: GetUniversePlanetsPlanetIdName;
  planet_id: GetUniversePlanetsPlanetIdPlanetId;
  position: GetUniversePlanetsPlanetIdPosition;
  system_id: GetUniversePlanetsPlanetIdSystemId;
  type_id: GetUniversePlanetsPlanetIdTypeId;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniversePlanetsPlanetIdPosition {
  x: GetUniversePlanetsPlanetIdX;
  y: GetUniversePlanetsPlanetIdY;
  z: GetUniversePlanetsPlanetIdZ;
  [k: string]: unknown | undefined;
}
