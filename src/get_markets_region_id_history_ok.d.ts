/*!
 * ESI endpoint: /markets/{region_id}/history/
 */
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
  /**
   * average number
   */
  average: number;
  /**
   * The date of this historical statistic entry
   */
  date: string;
  /**
   * highest number
   */
  highest: number;
  /**
   * lowest number
   */
  lowest: number;
  /**
   * Total number of orders happened that day
   */
  order_count: number;
  /**
   * Total
   */
  volume: number;
  [k: string]: unknown | undefined;
}
