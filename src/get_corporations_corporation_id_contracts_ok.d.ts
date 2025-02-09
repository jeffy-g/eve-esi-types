/*!
 * ESI endpoint: get:/corporations/{corporation_id}/contracts/
 */
/**
 * To whom the contract is available
 */
type GetCorporationsCorporationIdContractsAvailability = "public" | "personal" | "corporation" | "alliance";
/**
 * Status of the the contract
 */
type GetCorporationsCorporationIdContractsStatus =
  | "outstanding"
  | "in_progress"
  | "finished_issuer"
  | "finished_contractor"
  | "finished"
  | "cancelled"
  | "rejected"
  | "failed"
  | "deleted"
  | "reversed";
/**
 * Type of the contract
 */
type GetCorporationsCorporationIdContractsType = "unknown" | "item_exchange" | "auction" | "courier" | "loan";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdContractsOk = GetCorporationsCorporationIdContracts_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdContracts_200Ok {
  /**
   * Who will accept the contract
   */
  acceptor_id: number;
  /**
   * ID to whom the contract is assigned, can be corporation or character ID
   */
  assignee_id: number;
  availability: GetCorporationsCorporationIdContractsAvailability;
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
   * Date of confirmation of contract
   */
  date_accepted?: string;
  /**
   * Date of completed of contract
   */
  date_completed?: string;
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
  for_corporation: boolean;
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
  status: GetCorporationsCorporationIdContractsStatus;
  /**
   * Title of the contract
   */
  title?: string;
  type: GetCorporationsCorporationIdContractsType;
  /**
   * Volume of items in the contract
   */
  volume?: number;
  [k: string]: unknown | undefined;
}
