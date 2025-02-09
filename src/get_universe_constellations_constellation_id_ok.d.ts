/*!
 * ESI endpoint: get:/universe/constellations/{constellation_id}/
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
   * systems array
   *
   * @maxItems 10000
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
