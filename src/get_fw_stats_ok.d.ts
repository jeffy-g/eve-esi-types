/**
 * ESI endpoint: /fw/stats/
 */

/**
 * faction_id integer
 */
type GetFwStatsFactionId = number;
/**
 * Last week's total number of kills against enemy factions
 */
type GetFwStatsLastWeek = number;
/**
 * Total number of kills against enemy factions since faction warfare began
 */
type GetFwStatsTotal = number;
/**
 * Yesterday's total number of kills against enemy factions
 */
type GetFwStatsYesterday = number;
/**
 * How many pilots fight for the given faction
 */
type GetFwStatsPilots = number;
/**
 * The number of solar systems controlled by the given faction
 */
type GetFwStatsSystemsControlled = number;
/**
 * Last week's victory points gained
 */
type GetFwStatsVictoryPointsLastWeek = number;
/**
 * Total victory points gained since faction warfare began
 */
type GetFwStatsVictoryPointsTotal = number;
/**
 * Yesterday's victory points gained
 */
type GetFwStatsVictoryPointsYesterday = number;
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
  faction_id: GetFwStatsFactionId;
  kills: GetFwStatsKills;
  pilots: GetFwStatsPilots;
  systems_controlled: GetFwStatsSystemsControlled;
  victory_points: GetFwStatsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Summary of kills against an enemy faction for the given faction
 */
interface GetFwStatsKills {
  last_week: GetFwStatsLastWeek;
  total: GetFwStatsTotal;
  yesterday: GetFwStatsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * Summary of victory points gained for the given faction
 */
interface GetFwStatsVictoryPoints {
  last_week: GetFwStatsVictoryPointsLastWeek;
  total: GetFwStatsVictoryPointsTotal;
  yesterday: GetFwStatsVictoryPointsYesterday;
  [k: string]: unknown | undefined;
}
