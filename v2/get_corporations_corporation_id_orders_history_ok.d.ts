/**
 * ESI endpoint: /corporations/{corporation_id}/orders/history/
 */

/**
 * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
 */
type GetCorporationsCorporationIdOrdersHistoryDuration = number;
/**
 * For buy orders, the amount of ISK in escrow
 */
type GetCorporationsCorporationIdOrdersHistoryEscrow = number;
/**
 * True if the order is a bid (buy) order
 */
type GetCorporationsCorporationIdOrdersHistoryIsBuyOrder = boolean;
/**
 * Date and time when this order was issued
 */
type GetCorporationsCorporationIdOrdersHistoryIssued = string;
/**
 * The character who issued this order
 */
type GetCorporationsCorporationIdOrdersHistoryIssuedBy = number;
/**
 * ID of the location where order was placed
 */
type GetCorporationsCorporationIdOrdersHistoryLocationId = number;
/**
 * For buy orders, the minimum quantity that will be accepted in a matching sell order
 */
type GetCorporationsCorporationIdOrdersHistoryMinVolume = number;
/**
 * Unique order ID
 */
type GetCorporationsCorporationIdOrdersHistoryOrderId = number;
/**
 * Cost per unit for this order
 */
type GetCorporationsCorporationIdOrdersHistoryPrice = number;
/**
 * Valid order range, numbers are ranges in jumps
 */
type GetCorporationsCorporationIdOrdersHistoryRange =
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
type GetCorporationsCorporationIdOrdersHistoryRegionId = number;
/**
 * Current order state
 */
type GetCorporationsCorporationIdOrdersHistoryState = "cancelled" | "expired";
/**
 * The type ID of the item transacted in this order
 */
type GetCorporationsCorporationIdOrdersHistoryTypeId = number;
/**
 * Quantity of items still required or offered
 */
type GetCorporationsCorporationIdOrdersHistoryVolumeRemain = number;
/**
 * Quantity of items required or offered at time order was placed
 */
type GetCorporationsCorporationIdOrdersHistoryVolumeTotal = number;
/**
 * The corporation wallet division used for this order
 */
type GetCorporationsCorporationIdOrdersHistoryWalletDivision = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdOrdersHistoryOk = GetCorporationsCorporationIdOrdersHistory_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdOrdersHistory_200Ok {
  duration: GetCorporationsCorporationIdOrdersHistoryDuration;
  escrow?: GetCorporationsCorporationIdOrdersHistoryEscrow;
  is_buy_order?: GetCorporationsCorporationIdOrdersHistoryIsBuyOrder;
  issued: GetCorporationsCorporationIdOrdersHistoryIssued;
  issued_by?: GetCorporationsCorporationIdOrdersHistoryIssuedBy;
  location_id: GetCorporationsCorporationIdOrdersHistoryLocationId;
  min_volume?: GetCorporationsCorporationIdOrdersHistoryMinVolume;
  order_id: GetCorporationsCorporationIdOrdersHistoryOrderId;
  price: GetCorporationsCorporationIdOrdersHistoryPrice;
  range: GetCorporationsCorporationIdOrdersHistoryRange;
  region_id: GetCorporationsCorporationIdOrdersHistoryRegionId;
  state: GetCorporationsCorporationIdOrdersHistoryState;
  type_id: GetCorporationsCorporationIdOrdersHistoryTypeId;
  volume_remain: GetCorporationsCorporationIdOrdersHistoryVolumeRemain;
  volume_total: GetCorporationsCorporationIdOrdersHistoryVolumeTotal;
  wallet_division: GetCorporationsCorporationIdOrdersHistoryWalletDivision;
  [k: string]: unknown | undefined;
}
