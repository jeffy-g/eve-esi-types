/**
 * ESI endpoint: /universe/system_jumps/
 */

/**
 * ship_jumps integer
 */
type GetUniverseSystemJumpsShipJumps = number;
/**
 * system_id integer
 */
type GetUniverseSystemJumpsSystemId = number;
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
  ship_jumps: GetUniverseSystemJumpsShipJumps;
  system_id: GetUniverseSystemJumpsSystemId;
  [k: string]: unknown | undefined;
}
