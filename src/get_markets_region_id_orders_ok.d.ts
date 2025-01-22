/**
 * ESI endpoint: /markets/{region_id}/orders/
 */

/**
 * duration integer
 */
type GetMarketsRegionIdOrdersDuration = number;
/**
 * is_buy_order boolean
 */
type GetMarketsRegionIdOrdersIsBuyOrder = boolean;
/**
 * issued string
 */
type GetMarketsRegionIdOrdersIssued = string;
/**
 * location_id integer
 */
type GetMarketsRegionIdOrdersLocationId = number;
/**
 * min_volume integer
 */
type GetMarketsRegionIdOrdersMinVolume = number;
/**
 * order_id integer
 */
type GetMarketsRegionIdOrdersOrderId = number;
/**
 * price number
 */
type GetMarketsRegionIdOrdersPrice = number;
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
 * The solar system this order was placed
 */
type GetMarketsRegionIdOrdersSystemId = number;
/**
 * type_id integer
 */
type GetMarketsRegionIdOrdersTypeId = number;
/**
 * volume_remain integer
 */
type GetMarketsRegionIdOrdersVolumeRemain = number;
/**
 * volume_total integer
 */
type GetMarketsRegionIdOrdersVolumeTotal = number;
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
  duration: GetMarketsRegionIdOrdersDuration;
  is_buy_order: GetMarketsRegionIdOrdersIsBuyOrder;
  issued: GetMarketsRegionIdOrdersIssued;
  location_id: GetMarketsRegionIdOrdersLocationId;
  min_volume: GetMarketsRegionIdOrdersMinVolume;
  order_id: GetMarketsRegionIdOrdersOrderId;
  price: GetMarketsRegionIdOrdersPrice;
  range: GetMarketsRegionIdOrdersRange;
  system_id: GetMarketsRegionIdOrdersSystemId;
  type_id: GetMarketsRegionIdOrdersTypeId;
  volume_remain: GetMarketsRegionIdOrdersVolumeRemain;
  volume_total: GetMarketsRegionIdOrdersVolumeTotal;
  [k: string]: unknown | undefined;
}
