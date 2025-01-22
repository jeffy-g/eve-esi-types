/**
 * ESI endpoint: /markets/{region_id}/history/
 */

/**
 * average number
 */
type GetMarketsRegionIdHistoryAverage = number;
/**
 * The date of this historical statistic entry
 */
type GetMarketsRegionIdHistoryDate = string;
/**
 * highest number
 */
type GetMarketsRegionIdHistoryHighest = number;
/**
 * lowest number
 */
type GetMarketsRegionIdHistoryLowest = number;
/**
 * Total number of orders happened that day
 */
type GetMarketsRegionIdHistoryOrderCount = number;
/**
 * Total
 */
type GetMarketsRegionIdHistoryVolume = number;
/**
 * 200 ok array
 *
 * @maxItems 500
 */
type GetMarketsRegionIdHistoryOk = GetMarketsRegionIdHistory_200Ok[];

/**
 * 200 ok object
 */
interface GetMarketsRegionIdHistory_200Ok {
  average: GetMarketsRegionIdHistoryAverage;
  date: GetMarketsRegionIdHistoryDate;
  highest: GetMarketsRegionIdHistoryHighest;
  lowest: GetMarketsRegionIdHistoryLowest;
  order_count: GetMarketsRegionIdHistoryOrderCount;
  volume: GetMarketsRegionIdHistoryVolume;
  [k: string]: unknown | undefined;
}
