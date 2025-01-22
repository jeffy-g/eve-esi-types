/**
 * ESI endpoint: /corporations/{corporation_id}/orders/
 */

/**
 * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
 */
type GetCorporationsCorporationIdOrdersDuration = number;
/**
 * For buy orders, the amount of ISK in escrow
 */
type GetCorporationsCorporationIdOrdersEscrow = number;
/**
 * True if the order is a bid (buy) order
 */
type GetCorporationsCorporationIdOrdersIsBuyOrder = boolean;
/**
 * Date and time when this order was issued
 */
type GetCorporationsCorporationIdOrdersIssued = string;
/**
 * The character who issued this order
 */
type GetCorporationsCorporationIdOrdersIssuedBy = number;
/**
 * ID of the location where order was placed
 */
type GetCorporationsCorporationIdOrdersLocationId = number;
/**
 * For buy orders, the minimum quantity that will be accepted in a matching sell order
 */
type GetCorporationsCorporationIdOrdersMinVolume = number;
/**
 * Unique order ID
 */
type GetCorporationsCorporationIdOrdersOrderId = number;
/**
 * Cost per unit for this order
 */
type GetCorporationsCorporationIdOrdersPrice = number;
/**
 * Valid order range, numbers are ranges in jumps
 */
type GetCorporationsCorporationIdOrdersRange =
  | "1"
  | "10"
  | "2"
  | "20"
  | "3"
  | "30"
  | "4"
  | "40"
  | "5"
  | "region"
  | "solarsystem"
  | "station";
/**
 * ID of the region where order was placed
 */
type GetCorporationsCorporationIdOrdersRegionId = number;
/**
 * The type ID of the item transacted in this order
 */
type GetCorporationsCorporationIdOrdersTypeId = number;
/**
 * Quantity of items still required or offered
 */
type GetCorporationsCorporationIdOrdersVolumeRemain = number;
/**
 * Quantity of items required or offered at time order was placed
 */
type GetCorporationsCorporationIdOrdersVolumeTotal = number;
/**
 * The corporation wallet division used for this order.
 */
type GetCorporationsCorporationIdOrdersWalletDivision = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdOrdersOk = GetCorporationsCorporationIdOrders_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdOrders_200Ok {
  duration: GetCorporationsCorporationIdOrdersDuration;
  escrow?: GetCorporationsCorporationIdOrdersEscrow;
  is_buy_order?: GetCorporationsCorporationIdOrdersIsBuyOrder;
  issued: GetCorporationsCorporationIdOrdersIssued;
  issued_by: GetCorporationsCorporationIdOrdersIssuedBy;
  location_id: GetCorporationsCorporationIdOrdersLocationId;
  min_volume?: GetCorporationsCorporationIdOrdersMinVolume;
  order_id: GetCorporationsCorporationIdOrdersOrderId;
  price: GetCorporationsCorporationIdOrdersPrice;
  range: GetCorporationsCorporationIdOrdersRange;
  region_id: GetCorporationsCorporationIdOrdersRegionId;
  type_id: GetCorporationsCorporationIdOrdersTypeId;
  volume_remain: GetCorporationsCorporationIdOrdersVolumeRemain;
  volume_total: GetCorporationsCorporationIdOrdersVolumeTotal;
  wallet_division: GetCorporationsCorporationIdOrdersWalletDivision;
  [k: string]: unknown | undefined;
}
