/**
 * ESI endpoint: /characters/{character_id}/orders/
 */

/**
 * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
 */
type GetCharactersCharacterIdOrdersDuration = number;
/**
 * For buy orders, the amount of ISK in escrow
 */
type GetCharactersCharacterIdOrdersEscrow = number;
/**
 * True if the order is a bid (buy) order
 */
type GetCharactersCharacterIdOrdersIsBuyOrder = boolean;
/**
 * Signifies whether the buy/sell order was placed on behalf of a corporation.
 */
type GetCharactersCharacterIdOrdersIsCorporation = boolean;
/**
 * Date and time when this order was issued
 */
type GetCharactersCharacterIdOrdersIssued = string;
/**
 * ID of the location where order was placed
 */
type GetCharactersCharacterIdOrdersLocationId = number;
/**
 * For buy orders, the minimum quantity that will be accepted in a matching sell order
 */
type GetCharactersCharacterIdOrdersMinVolume = number;
/**
 * Unique order ID
 */
type GetCharactersCharacterIdOrdersOrderId = number;
/**
 * Cost per unit for this order
 */
type GetCharactersCharacterIdOrdersPrice = number;
/**
 * Valid order range, numbers are ranges in jumps
 */
type GetCharactersCharacterIdOrdersRange =
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
type GetCharactersCharacterIdOrdersRegionId = number;
/**
 * The type ID of the item transacted in this order
 */
type GetCharactersCharacterIdOrdersTypeId = number;
/**
 * Quantity of items still required or offered
 */
type GetCharactersCharacterIdOrdersVolumeRemain = number;
/**
 * Quantity of items required or offered at time order was placed
 */
type GetCharactersCharacterIdOrdersVolumeTotal = number;
/**
 * 200 ok array
 *
 * @maxItems 305
 */
type GetCharactersCharacterIdOrdersOk = GetCharactersCharacterIdOrders_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOrders_200Ok {
  duration: GetCharactersCharacterIdOrdersDuration;
  escrow?: GetCharactersCharacterIdOrdersEscrow;
  is_buy_order?: GetCharactersCharacterIdOrdersIsBuyOrder;
  is_corporation: GetCharactersCharacterIdOrdersIsCorporation;
  issued: GetCharactersCharacterIdOrdersIssued;
  location_id: GetCharactersCharacterIdOrdersLocationId;
  min_volume?: GetCharactersCharacterIdOrdersMinVolume;
  order_id: GetCharactersCharacterIdOrdersOrderId;
  price: GetCharactersCharacterIdOrdersPrice;
  range: GetCharactersCharacterIdOrdersRange;
  region_id: GetCharactersCharacterIdOrdersRegionId;
  type_id: GetCharactersCharacterIdOrdersTypeId;
  volume_remain: GetCharactersCharacterIdOrdersVolumeRemain;
  volume_total: GetCharactersCharacterIdOrdersVolumeTotal;
  [k: string]: unknown | undefined;
}
