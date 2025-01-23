/**
 * ESI endpoint: /characters/{character_id}/fw/stats/
 */

/**
 * The given character's current faction rank
 */
type GetCharactersCharacterIdFwStatsCurrentRank = number;
/**
 * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
 */
type GetCharactersCharacterIdFwStatsEnlistedOn = string;
/**
 * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
 */
type GetCharactersCharacterIdFwStatsFactionId = number;
/**
 * The given character's highest faction rank achieved
 */
type GetCharactersCharacterIdFwStatsHighestRank = number;
/**
 * Last week's total number of kills by a given character against enemy factions
 */
type GetCharactersCharacterIdFwStatsLastWeek = number;
/**
 * Total number of kills by a given character against enemy factions since the character enlisted
 */
type GetCharactersCharacterIdFwStatsTotal = number;
/**
 * Yesterday's total number of kills by a given character against enemy factions
 */
type GetCharactersCharacterIdFwStatsYesterday = number;
/**
 * Last week's victory points gained by the given character
 */
type GetCharactersCharacterIdFwStatsVictoryPointsLastWeek = number;
/**
 * Total victory points gained since the given character enlisted
 */
type GetCharactersCharacterIdFwStatsVictoryPointsTotal = number;
/**
 * Yesterday's victory points gained by the given character
 */
type GetCharactersCharacterIdFwStatsVictoryPointsYesterday = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFwStatsOk {
  current_rank?: GetCharactersCharacterIdFwStatsCurrentRank;
  enlisted_on?: GetCharactersCharacterIdFwStatsEnlistedOn;
  faction_id?: GetCharactersCharacterIdFwStatsFactionId;
  highest_rank?: GetCharactersCharacterIdFwStatsHighestRank;
  kills: GetCharactersCharacterIdFwStatsKills;
  victory_points: GetCharactersCharacterIdFwStatsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Summary of kills done by the given character against enemy factions
 */
interface GetCharactersCharacterIdFwStatsKills {
  last_week: GetCharactersCharacterIdFwStatsLastWeek;
  total: GetCharactersCharacterIdFwStatsTotal;
  yesterday: GetCharactersCharacterIdFwStatsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * Summary of victory points gained by the given character for the enlisted faction
 */
interface GetCharactersCharacterIdFwStatsVictoryPoints {
  last_week: GetCharactersCharacterIdFwStatsVictoryPointsLastWeek;
  total: GetCharactersCharacterIdFwStatsVictoryPointsTotal;
  yesterday: GetCharactersCharacterIdFwStatsVictoryPointsYesterday;
  [k: string]: unknown | undefined;
}
