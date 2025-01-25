/*!
 * ESI endpoint: /universe/moons/{moon_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseMoonsMoonIdOk {
  /**
   * moon_id integer
   */
  moon_id: number;
  /**
   * name string
   */
  name: string;
  position: GetUniverseMoonsMoonIdPosition;
  /**
   * The solar system this moon is in
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseMoonsMoonIdPosition {
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
