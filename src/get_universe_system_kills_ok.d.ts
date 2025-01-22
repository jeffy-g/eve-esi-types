/**
 * ESI endpoint: /universe/system_kills/
 */

/**
 * Number of NPC ships killed in this system
 */
type GetUniverseSystemKillsNpcKills = number;
/**
 * Number of pods killed in this system
 */
type GetUniverseSystemKillsPodKills = number;
/**
 * Number of player ships killed in this system
 */
type GetUniverseSystemKillsShipKills = number;
/**
 * system_id integer
 */
type GetUniverseSystemKillsSystemId = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseSystemKillsOk = GetUniverseSystemKills_200Ok[];

/**
 * 200 ok object
 */
interface GetUniverseSystemKills_200Ok {
  npc_kills: GetUniverseSystemKillsNpcKills;
  pod_kills: GetUniverseSystemKillsPodKills;
  ship_kills: GetUniverseSystemKillsShipKills;
  system_id: GetUniverseSystemKillsSystemId;
  [k: string]: unknown | undefined;
}
