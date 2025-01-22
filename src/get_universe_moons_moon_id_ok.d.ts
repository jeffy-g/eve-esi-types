/**
 * ESI endpoint: /universe/moons/{moon_id}/
 */

/**
 * moon_id integer
 */
type GetUniverseMoonsMoonIdMoonId = number;
/**
 * name string
 */
type GetUniverseMoonsMoonIdName = string;
/**
 * x number
 */
type GetUniverseMoonsMoonIdX = number;
/**
 * y number
 */
type GetUniverseMoonsMoonIdY = number;
/**
 * z number
 */
type GetUniverseMoonsMoonIdZ = number;
/**
 * The solar system this moon is in
 */
type GetUniverseMoonsMoonIdSystemId = number;

/**
 * 200 ok object
 */
interface GetUniverseMoonsMoonIdOk {
  moon_id: GetUniverseMoonsMoonIdMoonId;
  name: GetUniverseMoonsMoonIdName;
  position: GetUniverseMoonsMoonIdPosition;
  system_id: GetUniverseMoonsMoonIdSystemId;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseMoonsMoonIdPosition {
  x: GetUniverseMoonsMoonIdX;
  y: GetUniverseMoonsMoonIdY;
  z: GetUniverseMoonsMoonIdZ;
  [k: string]: unknown | undefined;
}
