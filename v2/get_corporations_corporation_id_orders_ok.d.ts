/*!
 * ESI endpoint: get:/corporations/{corporation_id}/orders/
 */
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
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdOrdersOk = GetCorporationsCorporationIdOrders_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdOrders_200Ok {
  /**
   * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
   */
  duration: number;
  /**
   * For buy orders, the amount of ISK in escrow
   */
  escrow?: number;
  /**
   * True if the order is a bid (buy) order
   */
  is_buy_order?: boolean;
  /**
   * Date and time when this order was issued
   */
  issued: string;
  /**
   * The character who issued this order
   */
  issued_by: number;
  /**
   * ID of the location where order was placed
   */
  location_id: number;
  /**
   * For buy orders, the minimum quantity that will be accepted in a matching sell order
   */
  min_volume?: number;
  /**
   * Unique order ID
   */
  order_id: number;
  /**
   * Cost per unit for this order
   */
  price: number;
  range: GetCorporationsCorporationIdOrdersRange;
  /**
   * ID of the region where order was placed
   */
  region_id: number;
  type_id: number;
  /**
   * Quantity of items still required or offered
   */
  volume_remain: number;
  /**
   * Quantity of items required or offered at time order was placed
   */
  volume_total: number;
  /**
   * The corporation wallet division used for this order.
   */
  wallet_division: number;
  [k: string]: unknown | undefined;
}
