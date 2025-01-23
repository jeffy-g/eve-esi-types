/**
 * ESI endpoint: /universe/asteroid_belts/{asteroid_belt_id}/
 */

/**
 * name string
 */
type GetUniverseAsteroidBeltsAsteroidBeltIdName = string;
/**
 * x number
 */
type GetUniverseAsteroidBeltsAsteroidBeltIdX = number;
/**
 * y number
 */
type GetUniverseAsteroidBeltsAsteroidBeltIdY = number;
/**
 * z number
 */
type GetUniverseAsteroidBeltsAsteroidBeltIdZ = number;
/**
 * The solar system this asteroid belt is in
 */
type GetUniverseAsteroidBeltsAsteroidBeltIdSystemId = number;

/**
 * 200 ok object
 */
interface GetUniverseAsteroidBeltsAsteroidBeltIdOk {
  name: GetUniverseAsteroidBeltsAsteroidBeltIdName;
  position: GetUniverseAsteroidBeltsAsteroidBeltIdPosition;
  system_id: GetUniverseAsteroidBeltsAsteroidBeltIdSystemId;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseAsteroidBeltsAsteroidBeltIdPosition {
  x: GetUniverseAsteroidBeltsAsteroidBeltIdX;
  y: GetUniverseAsteroidBeltsAsteroidBeltIdY;
  z: GetUniverseAsteroidBeltsAsteroidBeltIdZ;
  [k: string]: unknown | undefined;
}
