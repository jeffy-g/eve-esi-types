/**
 * ESI endpoint: /fw/wars/
 */

/**
 * The faction ID of the enemy faction.
 */
type GetFwWarsAgainstId = number;
/**
 * faction_id integer
 */
type GetFwWarsFactionId = number;
/**
 * List of factions at war
 *
 * @maxItems 100
 */
type GetFwWarsOk = GetFwWars_200Ok[];

/**
 * 200 ok object
 */
interface GetFwWars_200Ok {
  against_id: GetFwWarsAgainstId;
  faction_id: GetFwWarsFactionId;
  [k: string]: unknown | undefined;
}
