/**
* ESI endpoint: /fw/wars/
*/
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
/**
 * The faction ID of the enemy faction.
 */
  against_id: number;
/**
 * faction_id integer
 */
  faction_id: number;
  [k: string]: unknown | undefined;
}
