/*!
 * ESI endpoint: get:/characters/{character_id}/orders/history/
 */
/**
 * Valid order range, numbers are ranges in jumps
 */
type GetCharactersCharacterIdOrdersHistoryRange =
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
 * Current order state
 */
type GetCharactersCharacterIdOrdersHistoryState = "cancelled" | "expired";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdOrdersHistoryOk = GetCharactersCharacterIdOrdersHistory_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOrdersHistory_200Ok {
  /**
   * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
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
   * Signifies whether the buy/sell order was placed on behalf of a corporation.
   */
  is_corporation: boolean;
  /**
   * Date and time when this order was issued
   */
  issued: string;
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
  range: GetCharactersCharacterIdOrdersHistoryRange;
  /**
   * ID of the region where order was placed
   */
  region_id: number;
  state: GetCharactersCharacterIdOrdersHistoryState;
  type_id: number;
  /**
   * Quantity of items still required or offered
   */
  volume_remain: number;
  /**
   * Quantity of items required or offered at time order was placed
   */
  volume_total: number;
  [k: string]: unknown | undefined;
}
