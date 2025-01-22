/**
 * ESI endpoint: /fw/leaderboards/corporations/
 */

/**
 * Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 10
 */
type GetFwLeaderboardsCorporationsActiveTotal =
  | []
  | [GetFwLeaderboardsCorporationsActiveTotalActiveTotal]
  | [GetFwLeaderboardsCorporationsActiveTotalActiveTotal, GetFwLeaderboardsCorporationsActiveTotalActiveTotal]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal
    ];
/**
 * Amount of kills
 */
type GetFwLeaderboardsCorporationsAmount = number;
/**
 * corporation_id integer
 */
type GetFwLeaderboardsCorporationsCorporationId = number;
/**
 * Top 10 ranking of corporations by kills in the past week
 *
 * @maxItems 10
 */
type GetFwLeaderboardsCorporationsLastWeek =
  | []
  | [GetFwLeaderboardsCorporationsLastWeekLastWeek]
  | [GetFwLeaderboardsCorporationsLastWeekLastWeek, GetFwLeaderboardsCorporationsLastWeekLastWeek]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek,
      GetFwLeaderboardsCorporationsLastWeekLastWeek
    ];
/**
 * Amount of kills
 */
type GetFwLeaderboardsCorporationsLastWeekAmount = number;
/**
 * corporation_id integer
 */
type GetFwLeaderboardsCorporationsLastWeekCorporationId = number;
/**
 * Top 10 ranking of corporations by kills in the past day
 *
 * @maxItems 10
 */
type GetFwLeaderboardsCorporationsYesterday =
  | []
  | [GetFwLeaderboardsCorporationsYesterdayYesterday]
  | [GetFwLeaderboardsCorporationsYesterdayYesterday, GetFwLeaderboardsCorporationsYesterdayYesterday]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday,
      GetFwLeaderboardsCorporationsYesterdayYesterday
    ];
/**
 * Amount of kills
 */
type GetFwLeaderboardsCorporationsYesterdayAmount = number;
/**
 * corporation_id integer
 */
type GetFwLeaderboardsCorporationsYesterdayCorporationId = number;
/**
 * Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
 *
 * @maxItems 10
 */
type GetFwLeaderboardsCorporationsVictoryPointsActiveTotal =
  | []
  | [GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1]
  | [GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1, GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ]
  | [
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1,
      GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1
    ];
/**
 * Amount of victory points
 */
type GetFwLeaderboardsCorporationsActiveTotalAmount = number;
/**
 * corporation_id integer
 */
type GetFwLeaderboardsCorporationsActiveTotalCorporationId = number;
/**
 * Top 10 ranking of corporations by victory points in the past week
 *
 * @maxItems 10
 */
type GetFwLeaderboardsCorporationsVictoryPointsLastWeek =
  | []
  | [GetFwLeaderboardsCorporationsLastWeekLastWeek_1]
  | [GetFwLeaderboardsCorporationsLastWeekLastWeek_1, GetFwLeaderboardsCorporationsLastWeekLastWeek_1]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ]
  | [
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1,
      GetFwLeaderboardsCorporationsLastWeekLastWeek_1
    ];
/**
 * Amount of victory points
 */
type GetFwLeaderboardsCorporationsLastWeekAmount_1 = number;
/**
 * corporation_id integer
 */
type GetFwLeaderboardsCorporationsLastWeekCorporationId_1 = number;
/**
 * Top 10 ranking of corporations by victory points in the past day
 *
 * @maxItems 10
 */
type GetFwLeaderboardsCorporationsVictoryPointsYesterday =
  | []
  | [GetFwLeaderboardsCorporationsYesterdayYesterday_1]
  | [GetFwLeaderboardsCorporationsYesterdayYesterday_1, GetFwLeaderboardsCorporationsYesterdayYesterday_1]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ]
  | [
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1,
      GetFwLeaderboardsCorporationsYesterdayYesterday_1
    ];
/**
 * Amount of victory points
 */
type GetFwLeaderboardsCorporationsYesterdayAmount_1 = number;
/**
 * corporation_id integer
 */
type GetFwLeaderboardsCorporationsYesterdayCorporationId_1 = number;

/**
 * 200 ok object
 */
interface GetFwLeaderboardsCorporationsOk {
  kills: GetFwLeaderboardsCorporationsKills;
  victory_points: GetFwLeaderboardsCorporationsVictoryPoints;
  [k: string]: unknown | undefined;
}
/**
 * Top 10 rankings of corporations by number of kills from yesterday, last week and in total
 */
interface GetFwLeaderboardsCorporationsKills {
  active_total: GetFwLeaderboardsCorporationsActiveTotal;
  last_week: GetFwLeaderboardsCorporationsLastWeek;
  yesterday: GetFwLeaderboardsCorporationsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * active_total object
 */
interface GetFwLeaderboardsCorporationsActiveTotalActiveTotal {
  amount?: GetFwLeaderboardsCorporationsAmount;
  corporation_id?: GetFwLeaderboardsCorporationsCorporationId;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsCorporationsLastWeekLastWeek {
  amount?: GetFwLeaderboardsCorporationsLastWeekAmount;
  corporation_id?: GetFwLeaderboardsCorporationsLastWeekCorporationId;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsCorporationsYesterdayYesterday {
  amount?: GetFwLeaderboardsCorporationsYesterdayAmount;
  corporation_id?: GetFwLeaderboardsCorporationsYesterdayCorporationId;
  [k: string]: unknown | undefined;
}
/**
 * Top 10 rankings of corporations by victory points from yesterday, last week and in total
 */
interface GetFwLeaderboardsCorporationsVictoryPoints {
  active_total: GetFwLeaderboardsCorporationsVictoryPointsActiveTotal;
  last_week: GetFwLeaderboardsCorporationsVictoryPointsLastWeek;
  yesterday: GetFwLeaderboardsCorporationsVictoryPointsYesterday;
  [k: string]: unknown | undefined;
}
/**
 * active_total object
 */
interface GetFwLeaderboardsCorporationsActiveTotalActiveTotal_1 {
  amount?: GetFwLeaderboardsCorporationsActiveTotalAmount;
  corporation_id?: GetFwLeaderboardsCorporationsActiveTotalCorporationId;
  [k: string]: unknown | undefined;
}
/**
 * last_week object
 */
interface GetFwLeaderboardsCorporationsLastWeekLastWeek_1 {
  amount?: GetFwLeaderboardsCorporationsLastWeekAmount_1;
  corporation_id?: GetFwLeaderboardsCorporationsLastWeekCorporationId_1;
  [k: string]: unknown | undefined;
}
/**
 * yesterday object
 */
interface GetFwLeaderboardsCorporationsYesterdayYesterday_1 {
  amount?: GetFwLeaderboardsCorporationsYesterdayAmount_1;
  corporation_id?: GetFwLeaderboardsCorporationsYesterdayCorporationId_1;
  [k: string]: unknown | undefined;
}
