/*!
 * ESI endpoint: /characters/{character_id}/wallet/transactions/
 */
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
   * is_personal boolean
   */
  is_personal: boolean;
  /**
   * journal_ref_id integer
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
  type_id: number;
  /**
   * Amount paid per unit
   */
  unit_price: number;
  [k: string]: unknown | undefined;
}
