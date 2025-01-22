/**
 * ESI endpoint: /fw/leaderboards/
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
 * Amount of kills
 */
type GetFwLeaderboardsAmount = number;
/**
 * faction_id integer
 */
type GetFwLeaderboardsFactionId = number;
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
 * Amount of kills
 */
type GetFwLeaderboardsLastWeekAmount = number;
/**
 * faction_id integer
 */
type GetFwLeaderboardsLastWeekFactionId = number;
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
 * Amount of kills
 */
type GetFwLeaderboardsYesterdayAmount = number;
/**
 * faction_id integer
 */
type GetFwLeaderboardsYesterdayFactionId = number;
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
 * Amount of victory points
 */
type GetFwLeaderboardsActiveTotalAmount = number;
/**
 * faction_id integer
 */
type GetFwLeaderboardsActiveTotalFactionId = number;
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
 * Amount of victory points
 */
type GetFwLeaderboardsLastWeekAmount_1 = number;
/**
 * faction_id integer
 */
type GetFwLeaderboardsLastWeekFactionId_1 = number;
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
 * Amount of victory points
 */
type GetFwLeaderboardsYesterdayAmount_1 = number;
/**
 * faction_id integer
 */
type GetFwLeaderboardsYesterdayFactionId_1 = number;

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
  amount?: GetFwLeaderboardsAmount;
  faction_id?: GetFwLeaderboardsFactionId;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsLastWeekLastWeek {
  amount?: GetFwLeaderboardsLastWeekAmount;
  faction_id?: GetFwLeaderboardsLastWeekFactionId;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsYesterdayYesterday {
  amount?: GetFwLeaderboardsYesterdayAmount;
  faction_id?: GetFwLeaderboardsYesterdayFactionId;
  [k: string]: unknown | undefined;
}
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
  amount?: GetFwLeaderboardsActiveTotalAmount;
  faction_id?: GetFwLeaderboardsActiveTotalFactionId;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsLastWeekLastWeek_1 {
  amount?: GetFwLeaderboardsLastWeekAmount_1;
  faction_id?: GetFwLeaderboardsLastWeekFactionId_1;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsYesterdayYesterday_1 {
  amount?: GetFwLeaderboardsYesterdayAmount_1;
  faction_id?: GetFwLeaderboardsYesterdayFactionId_1;
  [k: string]: unknown | undefined;
}
