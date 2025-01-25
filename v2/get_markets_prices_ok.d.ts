/*!
 * ESI endpoint: /markets/prices/
 */
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
  /**
   * adjusted_price number
   */
  adjusted_price?: number;
  /**
   * average_price number
   */
  average_price?: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
