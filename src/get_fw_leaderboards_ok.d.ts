/*!
 * ESI endpoint: get:/fw/leaderboards/
 */
/**
 * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 4
 */
type GetFwLeaderboardsActiveTotal =
  | []
  | [GetFwLeaderboardsActiveTotalActiveTotal]
  | [GetFwLeaderboardsActiveTotalActiveTotal, GetFwLeaderboardsActiveTotalActiveTotal]
  | [
      GetFwLeaderboardsActiveTotalActiveTotal,
      GetFwLeaderboardsActiveTotalActiveTotal,
      GetFwLeaderboardsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsActiveTotalActiveTotal,
      GetFwLeaderboardsActiveTotalActiveTotal,
      GetFwLeaderboardsActiveTotalActiveTotal,
      GetFwLeaderboardsActiveTotalActiveTotal
    ];
/**
 * Top 4 ranking of factions by kills in the past week
 *
 * @maxItems 4
 */
type GetFwLeaderboardsLastWeek =
  | []
  | [GetFwLeaderboardsLastWeekLastWeek]
  | [GetFwLeaderboardsLastWeekLastWeek, GetFwLeaderboardsLastWeekLastWeek]
  | [GetFwLeaderboardsLastWeekLastWeek, GetFwLeaderboardsLastWeekLastWeek, GetFwLeaderboardsLastWeekLastWeek]
  | [
      GetFwLeaderboardsLastWeekLastWeek,
      GetFwLeaderboardsLastWeekLastWeek,
      GetFwLeaderboardsLastWeekLastWeek,
      GetFwLeaderboardsLastWeekLastWeek
    ];
/**
 * Top 4 ranking of factions by kills in the past day
 *
 * @maxItems 4
 */
type GetFwLeaderboardsYesterday =
  | []
  | [GetFwLeaderboardsYesterdayYesterday]
  | [GetFwLeaderboardsYesterdayYesterday, GetFwLeaderboardsYesterdayYesterday]
  | [GetFwLeaderboardsYesterdayYesterday, GetFwLeaderboardsYesterdayYesterday, GetFwLeaderboardsYesterdayYesterday]
  | [
      GetFwLeaderboardsYesterdayYesterday,
      GetFwLeaderboardsYesterdayYesterday,
      GetFwLeaderboardsYesterdayYesterday,
      GetFwLeaderboardsYesterdayYesterday
    ];
/**
 * Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 4
 */
type GetFwLeaderboardsVictoryPointsActiveTotal =
  | []
  | [GetFwLeaderboardsActiveTotalActiveTotal_1]
  | [GetFwLeaderboardsActiveTotalActiveTotal_1, GetFwLeaderboardsActiveTotalActiveTotal_1]
  | [
      GetFwLeaderboardsActiveTotalActiveTotal_1,
      GetFwLeaderboardsActiveTotalActiveTotal_1,
      GetFwLeaderboardsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsActiveTotalActiveTotal_1,
      GetFwLeaderboardsActiveTotalActiveTotal_1,
      GetFwLeaderboardsActiveTotalActiveTotal_1,
      GetFwLeaderboardsActiveTotalActiveTotal_1
    ];
/**
 * Top 4 ranking of factions by victory points in the past week
 *
 * @maxItems 4
 */
type GetFwLeaderboardsVictoryPointsLastWeek =
  | []
  | [GetFwLeaderboardsLastWeekLastWeek_1]
  | [GetFwLeaderboardsLastWeekLastWeek_1, GetFwLeaderboardsLastWeekLastWeek_1]
  | [GetFwLeaderboardsLastWeekLastWeek_1, GetFwLeaderboardsLastWeekLastWeek_1, GetFwLeaderboardsLastWeekLastWeek_1]
  | [
      GetFwLeaderboardsLastWeekLastWeek_1,
      GetFwLeaderboardsLastWeekLastWeek_1,
      GetFwLeaderboardsLastWeekLastWeek_1,
      GetFwLeaderboardsLastWeekLastWeek_1
    ];
/**
 * Top 4 ranking of factions by victory points in the past day
 *
 * @maxItems 4
 */
type GetFwLeaderboardsVictoryPointsYesterday =
  | []
  | [GetFwLeaderboardsYesterdayYesterday_1]
  | [GetFwLeaderboardsYesterdayYesterday_1, GetFwLeaderboardsYesterdayYesterday_1]
  | [
      GetFwLeaderboardsYesterdayYesterday_1,
      GetFwLeaderboardsYesterdayYesterday_1,
      GetFwLeaderboardsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsYesterdayYesterday_1,
      GetFwLeaderboardsYesterdayYesterday_1,
      GetFwLeaderboardsYesterdayYesterday_1,
      GetFwLeaderboardsYesterdayYesterday_1
    ];

/**
 * 200 ok object
 */
interface GetFwLeaderboardsOk {
  kills: GetFwLeaderboardsKills;
  victory_points: GetFwLeaderboardsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Top 4 rankings of factions by number of kills from yesterday, last week and in total
 */
interface GetFwLeaderboardsKills {
  active_total: GetFwLeaderboardsActiveTotal;
  last_week: GetFwLeaderboardsLastWeek;
  yesterday: GetFwLeaderboardsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * active_total object
 */
interface GetFwLeaderboardsActiveTotalActiveTotal {
  /**
   * Amount of kills
   */
  amount?: number;
  /**
   * faction_id integer
   */
  faction_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsLastWeekLastWeek extends GetFwLeaderboardsActiveTotalActiveTotal {}
/**
 * yesterday object
 */
interface GetFwLeaderboardsYesterdayYesterday extends GetFwLeaderboardsActiveTotalActiveTotal {}
/**
 * Top 4 rankings of factions by victory points from yesterday, last week and in total
 */
interface GetFwLeaderboardsVictoryPoints {
  active_total: GetFwLeaderboardsVictoryPointsActiveTotal;
  last_week: GetFwLeaderboardsVictoryPointsLastWeek;
  yesterday: GetFwLeaderboardsVictoryPointsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * active_total object
 */
interface GetFwLeaderboardsActiveTotalActiveTotal_1 {
  /**
   * Amount of victory points
   */
  amount?: number;
  /**
   * faction_id integer
   */
  faction_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsLastWeekLastWeek_1 extends GetFwLeaderboardsActiveTotalActiveTotal_1 {}
/**
 * yesterday object
 */
interface GetFwLeaderboardsYesterdayYesterday_1 extends GetFwLeaderboardsActiveTotalActiveTotal_1 {}
