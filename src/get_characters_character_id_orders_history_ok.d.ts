/**
 * ESI endpoint: /characters/{character_id}/orders/history/
 */

/**
 * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
 */
type GetCharactersCharacterIdOrdersHistoryDuration = number;
/**
 * For buy orders, the amount of ISK in escrow
 */
type GetCharactersCharacterIdOrdersHistoryEscrow = number;
/**
 * True if the order is a bid (buy) order
 */
type GetCharactersCharacterIdOrdersHistoryIsBuyOrder = boolean;
/**
 * Signifies whether the buy/sell order was placed on behalf of a corporation.
 */
type GetCharactersCharacterIdOrdersHistoryIsCorporation = boolean;
/**
 * Date and time when this order was issued
 */
type GetCharactersCharacterIdOrdersHistoryIssued = string;
/**
 * ID of the location where order was placed
 */
type GetCharactersCharacterIdOrdersHistoryLocationId = number;
/**
 * For buy orders, the minimum quantity that will be accepted in a matching sell order
 */
type GetCharactersCharacterIdOrdersHistoryMinVolume = number;
/**
 * Unique order ID
 */
type GetCharactersCharacterIdOrdersHistoryOrderId = number;
/**
 * Cost per unit for this order
 */
type GetCharactersCharacterIdOrdersHistoryPrice = number;
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
 * ID of the region where order was placed
 */
type GetCharactersCharacterIdOrdersHistoryRegionId = number;
/**
 * Current order state
 */
type GetCharactersCharacterIdOrdersHistoryState = "cancelled" | "expired";
/**
 * The type ID of the item transacted in this order
 */
type GetCharactersCharacterIdOrdersHistoryTypeId = number;
/**
 * Quantity of items still required or offered
 */
type GetCharactersCharacterIdOrdersHistoryVolumeRemain = number;
/**
 * Quantity of items required or offered at time order was placed
 */
type GetCharactersCharacterIdOrdersHistoryVolumeTotal = number;
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
  duration: GetCharactersCharacterIdOrdersHistoryDuration;
  escrow?: GetCharactersCharacterIdOrdersHistoryEscrow;
  is_buy_order?: GetCharactersCharacterIdOrdersHistoryIsBuyOrder;
  is_corporation: GetCharactersCharacterIdOrdersHistoryIsCorporation;
  issued: GetCharactersCharacterIdOrdersHistoryIssued;
  location_id: GetCharactersCharacterIdOrdersHistoryLocationId;
  min_volume?: GetCharactersCharacterIdOrdersHistoryMinVolume;
  order_id: GetCharactersCharacterIdOrdersHistoryOrderId;
  price: GetCharactersCharacterIdOrdersHistoryPrice;
  range: GetCharactersCharacterIdOrdersHistoryRange;
  region_id: GetCharactersCharacterIdOrdersHistoryRegionId;
  state: GetCharactersCharacterIdOrdersHistoryState;
  type_id: GetCharactersCharacterIdOrdersHistoryTypeId;
  volume_remain: GetCharactersCharacterIdOrdersHistoryVolumeRemain;
  volume_total: GetCharactersCharacterIdOrdersHistoryVolumeTotal;
  [k: string]: unknown | undefined;
}
