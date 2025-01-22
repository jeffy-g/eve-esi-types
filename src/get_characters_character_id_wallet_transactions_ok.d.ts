/**
 * ESI endpoint: /characters/{character_id}/wallet/transactions/
 */

/**
 * client_id integer
 */
type GetCharactersCharacterIdWalletTransactionsClientId = number;
/**
 * Date and time of transaction
 */
type GetCharactersCharacterIdWalletTransactionsDate = string;
/**
 * is_buy boolean
 */
type GetCharactersCharacterIdWalletTransactionsIsBuy = boolean;
/**
 * is_personal boolean
 */
type GetCharactersCharacterIdWalletTransactionsIsPersonal = boolean;
/**
 * journal_ref_id integer
 */
type GetCharactersCharacterIdWalletTransactionsJournalRefId = number;
/**
 * location_id integer
 */
type GetCharactersCharacterIdWalletTransactionsLocationId = number;
/**
 * quantity integer
 */
type GetCharactersCharacterIdWalletTransactionsQuantity = number;
/**
 * Unique transaction ID
 */
type GetCharactersCharacterIdWalletTransactionsTransactionId = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdWalletTransactionsTypeId = number;
/**
 * Amount paid per unit
 */
type GetCharactersCharacterIdWalletTransactionsUnitPrice = number;
/**
 * Wallet transactions
 *
 * @maxItems 2500
 */
type GetCharactersCharacterIdWalletTransactionsOk = GetCharactersCharacterIdWalletTransactions_200Ok[];

/**
 * wallet transaction
 */
interface GetCharactersCharacterIdWalletTransactions_200Ok {
  client_id: GetCharactersCharacterIdWalletTransactionsClientId;
  date: GetCharactersCharacterIdWalletTransactionsDate;
  is_buy: GetCharactersCharacterIdWalletTransactionsIsBuy;
  is_personal: GetCharactersCharacterIdWalletTransactionsIsPersonal;
  journal_ref_id: GetCharactersCharacterIdWalletTransactionsJournalRefId;
  location_id: GetCharactersCharacterIdWalletTransactionsLocationId;
  quantity: GetCharactersCharacterIdWalletTransactionsQuantity;
  transaction_id: GetCharactersCharacterIdWalletTransactionsTransactionId;
  type_id: GetCharactersCharacterIdWalletTransactionsTypeId;
  unit_price: GetCharactersCharacterIdWalletTransactionsUnitPrice;
  [k: string]: unknown | undefined;
}
