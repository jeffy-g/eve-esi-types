/**
 * ESI endpoint: /corporations/{corporation_id}/fw/stats/
 */

/**
 * The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
 */
type GetCorporationsCorporationIdFwStatsEnlistedOn = string;
/**
 * The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
 */
type GetCorporationsCorporationIdFwStatsFactionId = number;
/**
 * Last week's total number of kills by members of the given corporation against enemy factions
 */
type GetCorporationsCorporationIdFwStatsLastWeek = number;
/**
 * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
 */
type GetCorporationsCorporationIdFwStatsTotal = number;
/**
 * Yesterday's total number of kills by members of the given corporation against enemy factions
 */
type GetCorporationsCorporationIdFwStatsYesterday = number;
/**
 * How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
 */
type GetCorporationsCorporationIdFwStatsPilots = number;
/**
 * Last week's victory points gained by members of the given corporation
 */
type GetCorporationsCorporationIdFwStatsVictoryPointsLastWeek = number;
/**
 * Total victory points gained since the given corporation enlisted
 */
type GetCorporationsCorporationIdFwStatsVictoryPointsTotal = number;
/**
 * Yesterday's victory points gained by members of the given corporation
 */
type GetCorporationsCorporationIdFwStatsVictoryPointsYesterday = number;

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdFwStatsOk {
  enlisted_on?: GetCorporationsCorporationIdFwStatsEnlistedOn;
  faction_id?: GetCorporationsCorporationIdFwStatsFactionId;
  kills: GetCorporationsCorporationIdFwStatsKills;
  pilots?: GetCorporationsCorporationIdFwStatsPilots;
  victory_points: GetCorporationsCorporationIdFwStatsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Summary of kills done by the given corporation against enemy factions
 */
interface GetCorporationsCorporationIdFwStatsKills {
  last_week: GetCorporationsCorporationIdFwStatsLastWeek;
  total: GetCorporationsCorporationIdFwStatsTotal;
  yesterday: GetCorporationsCorporationIdFwStatsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * Summary of victory points gained by the given corporation for the enlisted faction
 */
interface GetCorporationsCorporationIdFwStatsVictoryPoints {
  last_week: GetCorporationsCorporationIdFwStatsVictoryPointsLastWeek;
  total: GetCorporationsCorporationIdFwStatsVictoryPointsTotal;
  yesterday: GetCorporationsCorporationIdFwStatsVictoryPointsYesterday;
  [k: string]: unknown | undefined;
}
