/**
 * ESI endpoint: /markets/prices/
 */

/**
 * adjusted_price number
 */
type GetMarketsPricesAdjustedPrice = number;
/**
 * average_price number
 */
type GetMarketsPricesAveragePrice = number;
/**
 * type_id integer
 */
type GetMarketsPricesTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 20000
 */
type GetMarketsPricesOk = GetMarketsPrices_200Ok[];

/**
 * 200 ok object
 */
interface GetMarketsPrices_200Ok {
  adjusted_price?: GetMarketsPricesAdjustedPrice;
  average_price?: GetMarketsPricesAveragePrice;
  type_id: GetMarketsPricesTypeId;
  [k: string]: unknown | undefined;
}
