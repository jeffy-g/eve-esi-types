/**
 * ESI endpoint: /characters/{character_id}/contracts/{contract_id}/items/
 */

/**
 * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
 */
type GetCharactersCharacterIdContractsContractIdItemsIsIncluded = boolean;
/**
 * is_singleton boolean
 */
type GetCharactersCharacterIdContractsContractIdItemsIsSingleton = boolean;
/**
 * Number of items in the stack
 */
type GetCharactersCharacterIdContractsContractIdItemsQuantity = number;
/**
 * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
 */
type GetCharactersCharacterIdContractsContractIdItemsRawQuantity = number;
/**
 * Unique ID for the item
 */
type GetCharactersCharacterIdContractsContractIdItemsRecordId = number;
/**
 * Type ID for item
 */
type GetCharactersCharacterIdContractsContractIdItemsTypeId = number;
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
  is_included: GetCharactersCharacterIdContractsContractIdItemsIsIncluded;
  is_singleton: GetCharactersCharacterIdContractsContractIdItemsIsSingleton;
  quantity: GetCharactersCharacterIdContractsContractIdItemsQuantity;
  raw_quantity?: GetCharactersCharacterIdContractsContractIdItemsRawQuantity;
  record_id: GetCharactersCharacterIdContractsContractIdItemsRecordId;
  type_id: GetCharactersCharacterIdContractsContractIdItemsTypeId;
  [k: string]: unknown | undefined;
}
