/*!
 * ESI endpoint: /universe/system_kills/
 */
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
  /**
   * Number of NPC ships killed in this system
   */
  npc_kills: number;
  /**
   * Number of pods killed in this system
   */
  pod_kills: number;
  /**
   * Number of player ships killed in this system
   */
  ship_kills: number;
  /**
   * system_id integer
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
