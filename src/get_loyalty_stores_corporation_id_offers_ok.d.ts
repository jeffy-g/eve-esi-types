/**
 * ESI endpoint: /loyalty/stores/{corporation_id}/offers/
 */

/**
 * Analysis kredit cost
 */
type GetLoyaltyStoresCorporationIdOffersAkCost = number;
/**
 * isk_cost integer
 */
type GetLoyaltyStoresCorporationIdOffersIskCost = number;
/**
 * lp_cost integer
 */
type GetLoyaltyStoresCorporationIdOffersLpCost = number;
/**
 * offer_id integer
 */
type GetLoyaltyStoresCorporationIdOffersOfferId = number;
/**
 * quantity integer
 */
type GetLoyaltyStoresCorporationIdOffersQuantity = number;
/**
 * quantity integer
 */
type GetLoyaltyStoresCorporationIdOffersRequiredItemQuantity = number;
/**
 * type_id integer
 */
type GetLoyaltyStoresCorporationIdOffersRequiredItemTypeId = number;
/**
 * required_items array
 *
 * @maxItems 100
 */
type GetLoyaltyStoresCorporationIdOffersRequiredItems = GetLoyaltyStoresCorporationIdOffersRequiredItem[];
/**
 * type_id integer
 */
type GetLoyaltyStoresCorporationIdOffersTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetLoyaltyStoresCorporationIdOffersOk = GetLoyaltyStoresCorporationIdOffers_200Ok[];

/**
 * 200 ok object
 */
interface GetLoyaltyStoresCorporationIdOffers_200Ok {
  ak_cost?: GetLoyaltyStoresCorporationIdOffersAkCost;
  isk_cost: GetLoyaltyStoresCorporationIdOffersIskCost;
  lp_cost: GetLoyaltyStoresCorporationIdOffersLpCost;
  offer_id: GetLoyaltyStoresCorporationIdOffersOfferId;
  quantity: GetLoyaltyStoresCorporationIdOffersQuantity;
  required_items: GetLoyaltyStoresCorporationIdOffersRequiredItems;
  type_id: GetLoyaltyStoresCorporationIdOffersTypeId;
  [k: string]: unknown | undefined;
}
/**
 * required_item object
 */
interface GetLoyaltyStoresCorporationIdOffersRequiredItem {
  quantity: GetLoyaltyStoresCorporationIdOffersRequiredItemQuantity;
  type_id: GetLoyaltyStoresCorporationIdOffersRequiredItemTypeId;
  [k: string]: unknown | undefined;
}
