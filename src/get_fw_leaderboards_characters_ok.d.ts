/**
 * ESI endpoint: /fw/leaderboards/characters/
 */

/**
 * Amount of kills
 */
type GetFwLeaderboardsCharactersAmount = number;
/**
 * character_id integer
 */
type GetFwLeaderboardsCharactersCharacterId = number;
/**
 * Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersActiveTotal = GetFwLeaderboardsCharactersActiveTotalActiveTotal[];
/**
 * Amount of kills
 */
type GetFwLeaderboardsCharactersLastWeekAmount = number;
/**
 * character_id integer
 */
type GetFwLeaderboardsCharactersLastWeekCharacterId = number;
/**
 * Top 100 ranking of pilots by kills in the past week
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersLastWeek = GetFwLeaderboardsCharactersLastWeekLastWeek[];
/**
 * Amount of kills
 */
type GetFwLeaderboardsCharactersYesterdayAmount = number;
/**
 * character_id integer
 */
type GetFwLeaderboardsCharactersYesterdayCharacterId = number;
/**
 * Top 100 ranking of pilots by kills in the past day
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersYesterday = GetFwLeaderboardsCharactersYesterdayYesterday[];
/**
 * Amount of victory points
 */
type GetFwLeaderboardsCharactersActiveTotalAmount = number;
/**
 * character_id integer
 */
type GetFwLeaderboardsCharactersActiveTotalCharacterId = number;
/**
 * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersVictoryPointsActiveTotal = GetFwLeaderboardsCharactersActiveTotalActiveTotal_1[];
/**
 * Amount of victory points
 */
type GetFwLeaderboardsCharactersLastWeekAmount_1 = number;
/**
 * character_id integer
 */
type GetFwLeaderboardsCharactersLastWeekCharacterId_1 = number;
/**
 * Top 100 ranking of pilots by victory points in the past week
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersVictoryPointsLastWeek = GetFwLeaderboardsCharactersLastWeekLastWeek_1[];
/**
 * Amount of victory points
 */
type GetFwLeaderboardsCharactersYesterdayAmount_1 = number;
/**
 * character_id integer
 */
type GetFwLeaderboardsCharactersYesterdayCharacterId_1 = number;
/**
 * Top 100 ranking of pilots by victory points in the past day
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersVictoryPointsYesterday = GetFwLeaderboardsCharactersYesterdayYesterday_1[];

/**
 * 200 ok object
 */
interface GetFwLeaderboardsCharactersOk {
  kills: GetFwLeaderboardsCharactersKills;
  victory_points: GetFwLeaderboardsCharactersVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Top 100 rankings of pilots by number of kills from yesterday, last week and in total
 */
interface GetFwLeaderboardsCharactersKills {
  active_total: GetFwLeaderboardsCharactersActiveTotal;
  last_week: GetFwLeaderboardsCharactersLastWeek;
  yesterday: GetFwLeaderboardsCharactersYesterday;
  [k: string]: unknown | undefined;
}
/**
 * active_total object
 */
interface GetFwLeaderboardsCharactersActiveTotalActiveTotal {
  amount?: GetFwLeaderboardsCharactersAmount;
  character_id?: GetFwLeaderboardsCharactersCharacterId;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsCharactersLastWeekLastWeek {
  amount?: GetFwLeaderboardsCharactersLastWeekAmount;
  character_id?: GetFwLeaderboardsCharactersLastWeekCharacterId;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsCharactersYesterdayYesterday {
  amount?: GetFwLeaderboardsCharactersYesterdayAmount;
  character_id?: GetFwLeaderboardsCharactersYesterdayCharacterId;
  [k: string]: unknown | undefined;
}
/**
 * Top 100 rankings of pilots by victory points from yesterday, last week and in total
 */
interface GetFwLeaderboardsCharactersVictoryPoints {
  active_total: GetFwLeaderboardsCharactersVictoryPointsActiveTotal;
  last_week: GetFwLeaderboardsCharactersVictoryPointsLastWeek;
  yesterday: GetFwLeaderboardsCharactersVictoryPointsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * active_total object
 */
interface GetFwLeaderboardsCharactersActiveTotalActiveTotal_1 {
  amount?: GetFwLeaderboardsCharactersActiveTotalAmount;
  character_id?: GetFwLeaderboardsCharactersActiveTotalCharacterId;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsCharactersLastWeekLastWeek_1 {
  amount?: GetFwLeaderboardsCharactersLastWeekAmount_1;
  character_id?: GetFwLeaderboardsCharactersLastWeekCharacterId_1;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsCharactersYesterdayYesterday_1 {
  amount?: GetFwLeaderboardsCharactersYesterdayAmount_1;
  character_id?: GetFwLeaderboardsCharactersYesterdayCharacterId_1;
  [k: string]: unknown | undefined;
}
