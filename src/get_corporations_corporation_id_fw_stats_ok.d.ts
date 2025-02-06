/*!
 * ESI endpoint: /corporations/{corporation_id}/fw/stats/
 */

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdFwStatsOk {
  /**
   * The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
   */
  enlisted_on?: string;
  /**
   * The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
   */
  faction_id?: number;
  kills: GetCorporationsCorporationIdFwStatsKills;
  /**
   * How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
   */
  pilots?: number;
  victory_points: GetCorporationsCorporationIdFwStatsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Summary of kills done by the given corporation against enemy factions
 */
interface GetCorporationsCorporationIdFwStatsKills {
  /**
   * Last week's total number of kills by members of the given corporation against enemy factions
   */
  last_week: number;
  /**
   * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
   */
  total: number;
  /**
   * Yesterday's total number of kills by members of the given corporation against enemy factions
   */
  yesterday: number;
  [k: string]: unknown | undefined;
}
/**
 * Summary of victory points gained by the given corporation for the enlisted faction
 */
interface GetCorporationsCorporationIdFwStatsVictoryPoints {
  /**
   * Last week's victory points gained by members of the given corporation
   */
  last_week: number;
  /**
   * Total victory points gained since the given corporation enlisted
   */
  total: number;
  /**
   * Yesterday's victory points gained by members of the given corporation
   */
  yesterday: number;
  [k: string]: unknown | undefined;
}
