/*!
 * ESI endpoint: get:/contracts/public/items/{contract_id}/
 */
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
  /**
   * is_blueprint_copy boolean
   */
  is_blueprint_copy?: boolean;
  /**
   * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
   */
  is_included: boolean;
  /**
   * Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract
   */
  item_id?: number;
  /**
   * Material Efficiency Level of the blueprint
   */
  material_efficiency?: number;
  /**
   * Number of items in the stack
   */
  quantity: number;
  /**
   * Unique ID for the item, used by the contract system
   */
  record_id: number;
  /**
   * Number of runs remaining if the blueprint is a copy, -1 if it is an original
   */
  runs?: number;
  /**
   * Time Efficiency Level of the blueprint
   */
  time_efficiency?: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
