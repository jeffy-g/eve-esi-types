/*!
 * ESI endpoint: get:/universe/system_jumps/
 */
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseSystemJumpsOk = GetUniverseSystemJumps_200Ok[];

/**
 * 200 ok object
 */
interface GetUniverseSystemJumps_200Ok {
  /**
   * ship_jumps integer
   */
  ship_jumps: number;
  /**
   * system_id integer
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
