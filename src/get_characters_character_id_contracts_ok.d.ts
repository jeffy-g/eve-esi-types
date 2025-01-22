/**
 * ESI endpoint: /characters/{character_id}/contracts/
 */

/**
 * Who will accept the contract
 */
type GetCharactersCharacterIdContractsAcceptorId = number;
/**
 * ID to whom the contract is assigned, can be alliance, corporation or character ID
 */
type GetCharactersCharacterIdContractsAssigneeId = number;
/**
 * To whom the contract is available
 */
type GetCharactersCharacterIdContractsAvailability = "public" | "personal" | "corporation" | "alliance";
/**
 * Buyout price (for Auctions only)
 */
type GetCharactersCharacterIdContractsBuyout = number;
/**
 * Collateral price (for Couriers only)
 */
type GetCharactersCharacterIdContractsCollateral = number;
/**
 * contract_id integer
 */
type GetCharactersCharacterIdContractsContractId = number;
/**
 * Date of confirmation of contract
 */
type GetCharactersCharacterIdContractsDateAccepted = string;
/**
 * Date of completed of contract
 */
type GetCharactersCharacterIdContractsDateCompleted = string;
/**
 * Expiration date of the contract
 */
type GetCharactersCharacterIdContractsDateExpired = string;
/**
 * Сreation date of the contract
 */
type GetCharactersCharacterIdContractsDateIssued = string;
/**
 * Number of days to perform the contract
 */
type GetCharactersCharacterIdContractsDaysToComplete = number;
/**
 * End location ID (for Couriers contract)
 */
type GetCharactersCharacterIdContractsEndLocationId = number;
/**
 * true if the contract was issued on behalf of the issuer's corporation
 */
type GetCharactersCharacterIdContractsForCorporation = boolean;
/**
 * Character's corporation ID for the issuer
 */
type GetCharactersCharacterIdContractsIssuerCorporationId = number;
/**
 * Character ID for the issuer
 */
type GetCharactersCharacterIdContractsIssuerId = number;
/**
 * Price of contract (for ItemsExchange and Auctions)
 */
type GetCharactersCharacterIdContractsPrice = number;
/**
 * Remuneration for contract (for Couriers only)
 */
type GetCharactersCharacterIdContractsReward = number;
/**
 * Start location ID (for Couriers contract)
 */
type GetCharactersCharacterIdContractsStartLocationId = number;
/**
 * Status of the the contract
 */
type GetCharactersCharacterIdContractsStatus =
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
type GetCharactersCharacterIdContractsTitle = string;
/**
 * Type of the contract
 */
type GetCharactersCharacterIdContractsType = "unknown" | "item_exchange" | "auction" | "courier" | "loan";
/**
 * Volume of items in the contract
 */
type GetCharactersCharacterIdContractsVolume = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdContractsOk = GetCharactersCharacterIdContracts_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdContracts_200Ok {
  acceptor_id: GetCharactersCharacterIdContractsAcceptorId;
  assignee_id: GetCharactersCharacterIdContractsAssigneeId;
  availability: GetCharactersCharacterIdContractsAvailability;
  buyout?: GetCharactersCharacterIdContractsBuyout;
  collateral?: GetCharactersCharacterIdContractsCollateral;
  contract_id: GetCharactersCharacterIdContractsContractId;
  date_accepted?: GetCharactersCharacterIdContractsDateAccepted;
  date_completed?: GetCharactersCharacterIdContractsDateCompleted;
  date_expired: GetCharactersCharacterIdContractsDateExpired;
  date_issued: GetCharactersCharacterIdContractsDateIssued;
  days_to_complete?: GetCharactersCharacterIdContractsDaysToComplete;
  end_location_id?: GetCharactersCharacterIdContractsEndLocationId;
  for_corporation: GetCharactersCharacterIdContractsForCorporation;
  issuer_corporation_id: GetCharactersCharacterIdContractsIssuerCorporationId;
  issuer_id: GetCharactersCharacterIdContractsIssuerId;
  price?: GetCharactersCharacterIdContractsPrice;
  reward?: GetCharactersCharacterIdContractsReward;
  start_location_id?: GetCharactersCharacterIdContractsStartLocationId;
  status: GetCharactersCharacterIdContractsStatus;
  title?: GetCharactersCharacterIdContractsTitle;
  type: GetCharactersCharacterIdContractsType;
  volume?: GetCharactersCharacterIdContractsVolume;
  [k: string]: unknown | undefined;
}
