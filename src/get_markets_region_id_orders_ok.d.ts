/*!
 * ESI endpoint: get:/markets/{region_id}/orders/
 */
/**
 * range string
 */
type GetMarketsRegionIdOrdersRange =
  | "station"
  | "region"
  | "solarsystem"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "10"
  | "20"
  | "30"
  | "40";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetMarketsRegionIdOrdersOk = GetMarketsRegionIdOrders_200Ok[];

/**
 * 200 ok object
 */
interface GetMarketsRegionIdOrders_200Ok {
  /**
   * duration integer
   */
  duration: number;
  /**
   * is_buy_order boolean
   */
  is_buy_order: boolean;
  /**
   * issued string
   */
  issued: string;
  /**
   * location_id integer
   */
  location_id: number;
  /**
   * min_volume integer
   */
  min_volume: number;
  /**
   * order_id integer
   */
  order_id: number;
  /**
   * price number
   */
  price: number;
  range: GetMarketsRegionIdOrdersRange;
  /**
   * The solar system this order was placed
   */
  system_id: number;
  type_id: number;
  /**
   * volume_remain integer
   */
  volume_remain: number;
  /**
   * volume_total integer
   */
  volume_total: number;
  [k: string]: unknown | undefined;
}
