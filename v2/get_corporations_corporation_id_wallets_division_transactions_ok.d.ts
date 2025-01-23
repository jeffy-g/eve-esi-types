/**
 * ESI endpoint: /corporations/{corporation_id}/wallets/{division}/transactions/
 */

/**
 * client_id integer
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsClientId = number;
/**
 * Date and time of transaction
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsDate = string;
/**
 * is_buy boolean
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsIsBuy = boolean;
/**
 * -1 if there is no corresponding wallet journal entry
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsJournalRefId = number;
/**
 * location_id integer
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsLocationId = number;
/**
 * quantity integer
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsQuantity = number;
/**
 * Unique transaction ID
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsTransactionId = number;
/**
 * type_id integer
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsTypeId = number;
/**
 * Amount paid per unit
 */
type GetCorporationsCorporationIdWalletsDivisionTransactionsUnitPrice = number;
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
  client_id: GetCorporationsCorporationIdWalletsDivisionTransactionsClientId;
  date: GetCorporationsCorporationIdWalletsDivisionTransactionsDate;
  is_buy: GetCorporationsCorporationIdWalletsDivisionTransactionsIsBuy;
  journal_ref_id: GetCorporationsCorporationIdWalletsDivisionTransactionsJournalRefId;
  location_id: GetCorporationsCorporationIdWalletsDivisionTransactionsLocationId;
  quantity: GetCorporationsCorporationIdWalletsDivisionTransactionsQuantity;
  transaction_id: GetCorporationsCorporationIdWalletsDivisionTransactionsTransactionId;
  type_id: GetCorporationsCorporationIdWalletsDivisionTransactionsTypeId;
  unit_price: GetCorporationsCorporationIdWalletsDivisionTransactionsUnitPrice;
  [k: string]: unknown | undefined;
}
