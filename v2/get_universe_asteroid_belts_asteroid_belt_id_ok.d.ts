/*!
 * ESI endpoint: /universe/asteroid_belts/{asteroid_belt_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseAsteroidBeltsAsteroidBeltIdOk {
  /**
   * name string
   */
  name: string;
  position: GetUniverseAsteroidBeltsAsteroidBeltIdPosition;
  /**
   * The solar system this asteroid belt is in
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseAsteroidBeltsAsteroidBeltIdPosition {
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
