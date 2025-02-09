/*!
 * ESI endpoint: get:/universe/structures/{structure_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseStructuresStructureIdOk {
  /**
   * The full name of the structure
   */
  name: string;
  /**
   * The ID of the corporation who owns this particular structure
   */
  owner_id: number;
  position?: GetUniverseStructuresStructureIdPosition;
  /**
   * solar_system_id integer
   */
  solar_system_id: number;
  type_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * Coordinates of the structure in Cartesian space relative to the Sun, in metres.
 *
 */
interface GetUniverseStructuresStructureIdPosition {
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
