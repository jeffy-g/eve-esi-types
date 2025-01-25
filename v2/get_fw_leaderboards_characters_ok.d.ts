/*!
 * ESI endpoint: /fw/leaderboards/characters/
 */
/**
 * Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersActiveTotal = GetFwLeaderboardsCharactersActiveTotalActiveTotal[];
/**
 * Top 100 ranking of pilots by kills in the past week
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersLastWeek = GetFwLeaderboardsCharactersLastWeekLastWeek[];
/**
 * Top 100 ranking of pilots by kills in the past day
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersYesterday = GetFwLeaderboardsCharactersYesterdayYesterday[];
/**
 * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersVictoryPointsActiveTotal = GetFwLeaderboardsCharactersActiveTotalActiveTotal_1[];
/**
 * Top 100 ranking of pilots by victory points in the past week
 *
 * @maxItems 100
 */
type GetFwLeaderboardsCharactersVictoryPointsLastWeek = GetFwLeaderboardsCharactersLastWeekLastWeek_1[];
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
  /**
   * Amount of kills
   */
  amount?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsCharactersLastWeekLastWeek {
  /**
   * Amount of kills
   */
  amount?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsCharactersYesterdayYesterday {
  /**
   * Amount of kills
   */
  amount?: number;
  /**
   * character_id integer
   */
  character_id?: number;
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
  /**
   * Amount of victory points
   */
  amount?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsCharactersLastWeekLastWeek_1 {
  /**
   * Amount of victory points
   */
  amount?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsCharactersYesterdayYesterday_1 {
  /**
   * Amount of victory points
   */
  amount?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  [k: string]: unknown | undefined;
}
