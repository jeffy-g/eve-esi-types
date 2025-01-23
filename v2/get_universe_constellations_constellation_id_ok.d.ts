/**
 * ESI endpoint: /universe/constellations/{constellation_id}/
 */

/**
 * constellation_id integer
 */
type GetUniverseConstellationsConstellationIdConstellationId = number;
/**
 * name string
 */
type GetUniverseConstellationsConstellationIdName = string;
/**
 * x number
 */
type GetUniverseConstellationsConstellationIdX = number;
/**
 * y number
 */
type GetUniverseConstellationsConstellationIdY = number;
/**
 * z number
 */
type GetUniverseConstellationsConstellationIdZ = number;
/**
 * The region this constellation is in
 */
type GetUniverseConstellationsConstellationIdRegionId = number;
/**
 * system integer
 */
type GetUniverseConstellationsConstellationIdSystem = number;
/**
 * systems array
 *
 * @maxItems 10000
 */
type GetUniverseConstellationsConstellationIdSystems = GetUniverseConstellationsConstellationIdSystem[];

/**
 * 200 ok object
 */
interface GetUniverseConstellationsConstellationIdOk {
  constellation_id: GetUniverseConstellationsConstellationIdConstellationId;
  name: GetUniverseConstellationsConstellationIdName;
  position: GetUniverseConstellationsConstellationIdPosition;
  region_id: GetUniverseConstellationsConstellationIdRegionId;
  systems: GetUniverseConstellationsConstellationIdSystems;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseConstellationsConstellationIdPosition {
  x: GetUniverseConstellationsConstellationIdX;
  y: GetUniverseConstellationsConstellationIdY;
  z: GetUniverseConstellationsConstellationIdZ;
  [k: string]: unknown | undefined;
}
