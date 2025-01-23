/**
 * ESI endpoint: /contracts/public/items/{contract_id}/
 */

/**
 * is_blueprint_copy boolean
 */
type GetContractsPublicItemsContractIdIsBlueprintCopy = boolean;
/**
 * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
 */
type GetContractsPublicItemsContractIdIsIncluded = boolean;
/**
 * Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract
 */
type GetContractsPublicItemsContractIdItemId = number;
/**
 * Material Efficiency Level of the blueprint
 */
type GetContractsPublicItemsContractIdMaterialEfficiency = number;
/**
 * Number of items in the stack
 */
type GetContractsPublicItemsContractIdQuantity = number;
/**
 * Unique ID for the item, used by the contract system
 */
type GetContractsPublicItemsContractIdRecordId = number;
/**
 * Number of runs remaining if the blueprint is a copy, -1 if it is an original
 */
type GetContractsPublicItemsContractIdRuns = number;
/**
 * Time Efficiency Level of the blueprint
 */
type GetContractsPublicItemsContractIdTimeEfficiency = number;
/**
 * Type ID for item
 */
type GetContractsPublicItemsContractIdTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetContractsPublicItemsContractIdOk = GetContractsPublicItemsContractId_200Ok[];

/**
 * 200 ok object
 */
interface GetContractsPublicItemsContractId_200Ok {
  is_blueprint_copy?: GetContractsPublicItemsContractIdIsBlueprintCopy;
  is_included: GetContractsPublicItemsContractIdIsIncluded;
  item_id?: GetContractsPublicItemsContractIdItemId;
  material_efficiency?: GetContractsPublicItemsContractIdMaterialEfficiency;
  quantity: GetContractsPublicItemsContractIdQuantity;
  record_id: GetContractsPublicItemsContractIdRecordId;
  runs?: GetContractsPublicItemsContractIdRuns;
  time_efficiency?: GetContractsPublicItemsContractIdTimeEfficiency;
  type_id: GetContractsPublicItemsContractIdTypeId;
  [k: string]: unknown | undefined;
}
