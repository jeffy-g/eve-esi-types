/**
 * ESI endpoint: /corporations/{corporation_id}/contracts/{contract_id}/items/
 */

/**
 * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
 */
type GetCorporationsCorporationIdContractsContractIdItemsIsIncluded = boolean;
/**
 * is_singleton boolean
 */
type GetCorporationsCorporationIdContractsContractIdItemsIsSingleton = boolean;
/**
 * Number of items in the stack
 */
type GetCorporationsCorporationIdContractsContractIdItemsQuantity = number;
/**
 * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
 */
type GetCorporationsCorporationIdContractsContractIdItemsRawQuantity = number;
/**
 * Unique ID for the item
 */
type GetCorporationsCorporationIdContractsContractIdItemsRecordId = number;
/**
 * Type ID for item
 */
type GetCorporationsCorporationIdContractsContractIdItemsTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 5000
 */
type GetCorporationsCorporationIdContractsContractIdItemsOk =
  GetCorporationsCorporationIdContractsContractIdItems_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdContractsContractIdItems_200Ok {
  is_included: GetCorporationsCorporationIdContractsContractIdItemsIsIncluded;
  is_singleton: GetCorporationsCorporationIdContractsContractIdItemsIsSingleton;
  quantity: GetCorporationsCorporationIdContractsContractIdItemsQuantity;
  raw_quantity?: GetCorporationsCorporationIdContractsContractIdItemsRawQuantity;
  record_id: GetCorporationsCorporationIdContractsContractIdItemsRecordId;
  type_id: GetCorporationsCorporationIdContractsContractIdItemsTypeId;
  [k: string]: unknown | undefined;
}
