/**
 * ESI endpoint: /universe/stargates/{stargate_id}/
 */

/**
 * The stargate this stargate connects to
 */
type GetUniverseStargatesStargateIdDestinationStargateId = number;
/**
 * The solar system this stargate connects to
 */
type GetUniverseStargatesStargateIdDestinationSystemId = number;
/**
 * name string
 */
type GetUniverseStargatesStargateIdName = string;
/**
 * x number
 */
type GetUniverseStargatesStargateIdX = number;
/**
 * y number
 */
type GetUniverseStargatesStargateIdY = number;
/**
 * z number
 */
type GetUniverseStargatesStargateIdZ = number;
/**
 * stargate_id integer
 */
type GetUniverseStargatesStargateIdStargateId = number;
/**
 * The solar system this stargate is in
 */
type GetUniverseStargatesStargateIdSystemId = number;
/**
 * type_id integer
 */
type GetUniverseStargatesStargateIdTypeId = number;

/**
 * 200 ok object
 */
interface GetUniverseStargatesStargateIdOk {
  destination: GetUniverseStargatesStargateIdDestination;
  name: GetUniverseStargatesStargateIdName;
  position: GetUniverseStargatesStargateIdPosition;
  stargate_id: GetUniverseStargatesStargateIdStargateId;
  system_id: GetUniverseStargatesStargateIdSystemId;
  type_id: GetUniverseStargatesStargateIdTypeId;
  [k: string]: unknown | undefined;
}
/**
 * destination object
 */
interface GetUniverseStargatesStargateIdDestination {
  stargate_id: GetUniverseStargatesStargateIdDestinationStargateId;
  system_id: GetUniverseStargatesStargateIdDestinationSystemId;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseStargatesStargateIdPosition {
  x: GetUniverseStargatesStargateIdX;
  y: GetUniverseStargatesStargateIdY;
  z: GetUniverseStargatesStargateIdZ;
  [k: string]: unknown | undefined;
}
