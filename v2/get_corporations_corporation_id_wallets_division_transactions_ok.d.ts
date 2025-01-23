/**
* ESI endpoint: /corporations/{corporation_id}/wallets/{division}/transactions/
*/
/**
 * Wallet transactions
 *
 * @maxItems 2500
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsOk =
  GetCorporationsCorporationIdWalletsDivisionTransactions_200Ok[];

/**
 * wallet transaction
 */
interface GetCorporationsCorporationIdWalletsDivisionTransactions_200Ok {
/**
 * client_id integer
 */
  client_id: number;
/**
 * Date and time of transaction
 */
  date: string;
/**
 * is_buy boolean
 */
  is_buy: boolean;
/**
 * -1 if there is no corresponding wallet journal entry
 */
  journal_ref_id: number;
/**
 * location_id integer
 */
  location_id: number;
/**
 * quantity integer
 */
  quantity: number;
/**
 * Unique transaction ID
 */
  transaction_id: number;
/**
 * type_id integer
 */
  type_id: number;
/**
 * Amount paid per unit
 */
  unit_price: number;
  [k: string]: unknown | undefined;
}
