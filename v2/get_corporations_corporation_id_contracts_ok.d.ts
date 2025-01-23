/**
 * ESI endpoint: /corporations/{corporation_id}/contracts/
 */

/**
 * Who will accept the contract
 */
type GetCorporationsCorporationIdContractsAcceptorId = number;
/**
 * ID to whom the contract is assigned, can be corporation or character ID
 */
type GetCorporationsCorporationIdContractsAssigneeId = number;
/**
 * To whom the contract is available
 */
type GetCorporationsCorporationIdContractsAvailability = "public" | "personal" | "corporation" | "alliance";
/**
 * Buyout price (for Auctions only)
 */
type GetCorporationsCorporationIdContractsBuyout = number;
/**
 * Collateral price (for Couriers only)
 */
type GetCorporationsCorporationIdContractsCollateral = number;
/**
 * contract_id integer
 */
type GetCorporationsCorporationIdContractsContractId = number;
/**
 * Date of confirmation of contract
 */
type GetCorporationsCorporationIdContractsDateAccepted = string;
/**
 * Date of completed of contract
 */
type GetCorporationsCorporationIdContractsDateCompleted = string;
/**
 * Expiration date of the contract
 */
type GetCorporationsCorporationIdContractsDateExpired = string;
/**
 * Сreation date of the contract
 */
type GetCorporationsCorporationIdContractsDateIssued = string;
/**
 * Number of days to perform the contract
 */
type GetCorporationsCorporationIdContractsDaysToComplete = number;
/**
 * End location ID (for Couriers contract)
 */
type GetCorporationsCorporationIdContractsEndLocationId = number;
/**
 * true if the contract was issued on behalf of the issuer's corporation
 */
type GetCorporationsCorporationIdContractsForCorporation = boolean;
/**
 * Character's corporation ID for the issuer
 */
type GetCorporationsCorporationIdContractsIssuerCorporationId = number;
/**
 * Character ID for the issuer
 */
type GetCorporationsCorporationIdContractsIssuerId = number;
/**
 * Price of contract (for ItemsExchange and Auctions)
 */
type GetCorporationsCorporationIdContractsPrice = number;
/**
 * Remuneration for contract (for Couriers only)
 */
type GetCorporationsCorporationIdContractsReward = number;
/**
 * Start location ID (for Couriers contract)
 */
type GetCorporationsCorporationIdContractsStartLocationId = number;
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
 * Title of the contract
 */
type GetCorporationsCorporationIdContractsTitle = string;
/**
 * Type of the contract
 */
type GetCorporationsCorporationIdContractsType = "unknown" | "item_exchange" | "auction" | "courier" | "loan";
/**
 * Volume of items in the contract
 */
type GetCorporationsCorporationIdContractsVolume = number;
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
  acceptor_id: GetCorporationsCorporationIdContractsAcceptorId;
  assignee_id: GetCorporationsCorporationIdContractsAssigneeId;
  availability: GetCorporationsCorporationIdContractsAvailability;
  buyout?: GetCorporationsCorporationIdContractsBuyout;
  collateral?: GetCorporationsCorporationIdContractsCollateral;
  contract_id: GetCorporationsCorporationIdContractsContractId;
  date_accepted?: GetCorporationsCorporationIdContractsDateAccepted;
  date_completed?: GetCorporationsCorporationIdContractsDateCompleted;
  date_expired: GetCorporationsCorporationIdContractsDateExpired;
  date_issued: GetCorporationsCorporationIdContractsDateIssued;
  days_to_complete?: GetCorporationsCorporationIdContractsDaysToComplete;
  end_location_id?: GetCorporationsCorporationIdContractsEndLocationId;
  for_corporation: GetCorporationsCorporationIdContractsForCorporation;
  issuer_corporation_id: GetCorporationsCorporationIdContractsIssuerCorporationId;
  issuer_id: GetCorporationsCorporationIdContractsIssuerId;
  price?: GetCorporationsCorporationIdContractsPrice;
  reward?: GetCorporationsCorporationIdContractsReward;
  start_location_id?: GetCorporationsCorporationIdContractsStartLocationId;
  status: GetCorporationsCorporationIdContractsStatus;
  title?: GetCorporationsCorporationIdContractsTitle;
  type: GetCorporationsCorporationIdContractsType;
  volume?: GetCorporationsCorporationIdContractsVolume;
  [k: string]: unknown | undefined;
}
