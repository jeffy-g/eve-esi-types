/**
* ESI endpoint: /loyalty/stores/{corporation_id}/offers/
*/
/**
 * required_items array
 *
 * @maxItems 100
 */
type GetLoyaltyStoresCorporationIdOffersRequiredItems = GetLoyaltyStoresCorporationIdOffersRequiredItem[];
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
/**
 * Analysis kredit cost
 */
  ak_cost?: number;
/**
 * isk_cost integer
 */
  isk_cost: number;
/**
 * lp_cost integer
 */
  lp_cost: number;
/**
 * offer_id integer
 */
  offer_id: number;
/**
 * quantity integer
 */
  quantity: number;
  required_items: GetLoyaltyStoresCorporationIdOffersRequiredItems;
/**
 * type_id integer
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * required_item object
 */
interface GetLoyaltyStoresCorporationIdOffersRequiredItem {
/**
 * quantity integer
 */
  quantity: number;
/**
 * type_id integer
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
