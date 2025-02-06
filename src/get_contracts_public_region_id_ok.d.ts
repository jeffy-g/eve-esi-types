/*!
 * ESI endpoint: /contracts/public/{region_id}/
 */
/**
 * Type of the contract
 */
type GetContractsPublicRegionIdType = "unknown" | "item_exchange" | "auction" | "courier" | "loan";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetContractsPublicRegionIdOk = GetContractsPublicRegionId_200Ok[];

/**
 * 200 ok object
 */
interface GetContractsPublicRegionId_200Ok {
  /**
   * Buyout price (for Auctions only)
   */
  buyout?: number;
  /**
   * Collateral price (for Couriers only)
   */
  collateral?: number;
  /**
   * contract_id integer
   */
  contract_id: number;
  /**
   * Expiration date of the contract
   */
  date_expired: string;
  /**
   * Сreation date of the contract
   */
  date_issued: string;
  /**
   * Number of days to perform the contract
   */
  days_to_complete?: number;
  /**
   * End location ID (for Couriers contract)
   */
  end_location_id?: number;
  /**
   * true if the contract was issued on behalf of the issuer's corporation
   */
  for_corporation?: boolean;
  /**
   * Character's corporation ID for the issuer
   */
  issuer_corporation_id: number;
  /**
   * Character ID for the issuer
   */
  issuer_id: number;
  /**
   * Price of contract (for ItemsExchange and Auctions)
   */
  price?: number;
  /**
   * Remuneration for contract (for Couriers only)
   */
  reward?: number;
  /**
   * Start location ID (for Couriers contract)
   */
  start_location_id?: number;
  /**
   * Title of the contract
   */
  title?: string;
  type: GetContractsPublicRegionIdType;
  /**
   * Volume of items in the contract
   */
  volume?: number;
  [k: string]: unknown | undefined;
}
