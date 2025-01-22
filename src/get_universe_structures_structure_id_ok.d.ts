/**
 * ESI endpoint: /universe/structures/{structure_id}/
 */

/**
 * The full name of the structure
 */
type GetUniverseStructuresStructureIdName = string;
/**
 * The ID of the corporation who owns this particular structure
 */
type GetUniverseStructuresStructureIdOwnerId = number;
/**
 * x number
 */
type GetUniverseStructuresStructureIdX = number;
/**
 * y number
 */
type GetUniverseStructuresStructureIdY = number;
/**
 * z number
 */
type GetUniverseStructuresStructureIdZ = number;
/**
 * solar_system_id integer
 */
type GetUniverseStructuresStructureIdSolarSystemId = number;
/**
 * type_id integer
 */
type GetUniverseStructuresStructureIdTypeId = number;

/**
 * 200 ok object
 */
interface GetUniverseStructuresStructureIdOk {
  name: GetUniverseStructuresStructureIdName;
  owner_id: GetUniverseStructuresStructureIdOwnerId;
  position?: GetUniverseStructuresStructureIdPosition;
  solar_system_id: GetUniverseStructuresStructureIdSolarSystemId;
  type_id?: GetUniverseStructuresStructureIdTypeId;
  [k: string]: unknown | undefined;
}
/**
 * Coordinates of the structure in Cartesian space relative to the Sun, in metres.
 *
 */
interface GetUniverseStructuresStructureIdPosition {
  x: GetUniverseStructuresStructureIdX;
  y: GetUniverseStructuresStructureIdY;
  z: GetUniverseStructuresStructureIdZ;
  [k: string]: unknown | undefined;
}
