/**
* ESI endpoint: /characters/{character_id}/contracts/{contract_id}/items/
*/
/**
 * 200 ok array
 *
 * @maxItems 5000
 */
type GetCharactersCharacterIdContractsContractIdItemsOk =
  GetCharactersCharacterIdContractsContractIdItems_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdContractsContractIdItems_200Ok {
/**
 * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
 */
  is_included: boolean;
/**
 * is_singleton boolean
 */
  is_singleton: boolean;
/**
 * Number of items in the stack
 */
  quantity: number;
/**
 * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
 */
  raw_quantity?: number;
/**
 * Unique ID for the item
 */
  record_id: number;
/**
 * Type ID for item
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
