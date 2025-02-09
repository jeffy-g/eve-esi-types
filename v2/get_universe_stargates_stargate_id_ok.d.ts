/*!
 * ESI endpoint: get:/universe/stargates/{stargate_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseStargatesStargateIdOk {
  destination: GetUniverseStargatesStargateIdDestination;
  /**
   * name string
   */
  name: string;
  position: GetUniverseStargatesStargateIdPosition;
  /**
   * stargate_id integer
   */
  stargate_id: number;
  /**
   * The solar system this stargate is in
   */
  system_id: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * destination object
 */
interface GetUniverseStargatesStargateIdDestination {
  /**
   * The stargate this stargate connects to
   */
  stargate_id: number;
  /**
   * The solar system this stargate connects to
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseStargatesStargateIdPosition {
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
