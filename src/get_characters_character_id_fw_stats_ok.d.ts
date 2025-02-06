/*!
 * ESI endpoint: /characters/{character_id}/fw/stats/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFwStatsOk {
  /**
   * The given character's current faction rank
   */
  current_rank?: number;
  /**
   * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
   */
  enlisted_on?: string;
  /**
   * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
   */
  faction_id?: number;
  /**
   * The given character's highest faction rank achieved
   */
  highest_rank?: number;
  kills: GetCharactersCharacterIdFwStatsKills;
  victory_points: GetCharactersCharacterIdFwStatsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Summary of kills done by the given character against enemy factions
 */
interface GetCharactersCharacterIdFwStatsKills {
  /**
   * Last week's total number of kills by a given character against enemy factions
   */
  last_week: number;
  /**
   * Total number of kills by a given character against enemy factions since the character enlisted
   */
  total: number;
  /**
   * Yesterday's total number of kills by a given character against enemy factions
   */
  yesterday: number;
  [k: string]: unknown | undefined;
}
/**
 * Summary of victory points gained by the given character for the enlisted faction
 */
interface GetCharactersCharacterIdFwStatsVictoryPoints {
  /**
   * Last week's victory points gained by the given character
   */
  last_week: number;
  /**
   * Total victory points gained since the given character enlisted
   */
  total: number;
  /**
   * Yesterday's victory points gained by the given character
   */
  yesterday: number;
  [k: string]: unknown | undefined;
}
