/**
* ESI endpoint: /fw/stats/
*/
/**
 * 200 ok array
 *
 * @maxItems 100
 */
type GetFwStatsOk = GetFwStats_200Ok[];

/**
 * 200 ok object
 */
interface GetFwStats_200Ok {
/**
 * faction_id integer
 */
  faction_id: number;
  kills: GetFwStatsKills;
/**
 * How many pilots fight for the given faction
 */
  pilots: number;
/**
 * The number of solar systems controlled by the given faction
 */
  systems_controlled: number;
  victory_points: GetFwStatsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Summary of kills against an enemy faction for the given faction
 */
interface GetFwStatsKills {
/**
 * Last week's total number of kills against enemy factions
 */
  last_week: number;
/**
 * Total number of kills against enemy factions since faction warfare began
 */
  total: number;
/**
 * Yesterday's total number of kills against enemy factions
 */
  yesterday: number;
  [k: string]: unknown | undefined;
}
/**
 * Summary of victory points gained for the given faction
 */
interface GetFwStatsVictoryPoints {
/**
 * Last week's victory points gained
 */
  last_week: number;
/**
 * Total victory points gained since faction warfare began
 */
  total: number;
/**
 * Yesterday's victory points gained
 */
  yesterday: number;
  [k: string]: unknown | undefined;
}
