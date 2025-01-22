/**
 * ESI endpoint: /contracts/public/{region_id}/
 */

/**
 * Buyout price (for Auctions only)
 */
type GetContractsPublicRegionIdBuyout = number;
/**
 * Collateral price (for Couriers only)
 */
type GetContractsPublicRegionIdCollateral = number;
/**
 * contract_id integer
 */
type GetContractsPublicRegionIdContractId = number;
/**
 * Expiration date of the contract
 */
type GetContractsPublicRegionIdDateExpired = string;
/**
 * Сreation date of the contract
 */
type GetContractsPublicRegionIdDateIssued = string;
/**
 * Number of days to perform the contract
 */
type GetContractsPublicRegionIdDaysToComplete = number;
/**
 * End location ID (for Couriers contract)
 */
type GetContractsPublicRegionIdEndLocationId = number;
/**
 * true if the contract was issued on behalf of the issuer's corporation
 */
type GetContractsPublicRegionIdForCorporation = boolean;
/**
 * Character's corporation ID for the issuer
 */
type GetContractsPublicRegionIdIssuerCorporationId = number;
/**
 * Character ID for the issuer
 */
type GetContractsPublicRegionIdIssuerId = number;
/**
 * Price of contract (for ItemsExchange and Auctions)
 */
type GetContractsPublicRegionIdPrice = number;
/**
 * Remuneration for contract (for Couriers only)
 */
type GetContractsPublicRegionIdReward = number;
/**
 * Start location ID (for Couriers contract)
 */
type GetContractsPublicRegionIdStartLocationId = number;
/**
 * Title of the contract
 */
type GetContractsPublicRegionIdTitle = string;
/**
 * Type of the contract
 */
type GetContractsPublicRegionIdType = "unknown" | "item_exchange" | "auction" | "courier" | "loan";
/**
 * Volume of items in the contract
 */
type GetContractsPublicRegionIdVolume = number;
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
  buyout?: GetContractsPublicRegionIdBuyout;
  collateral?: GetContractsPublicRegionIdCollateral;
  contract_id: GetContractsPublicRegionIdContractId;
  date_expired: GetContractsPublicRegionIdDateExpired;
  date_issued: GetContractsPublicRegionIdDateIssued;
  days_to_complete?: GetContractsPublicRegionIdDaysToComplete;
  end_location_id?: GetContractsPublicRegionIdEndLocationId;
  for_corporation?: GetContractsPublicRegionIdForCorporation;
  issuer_corporation_id: GetContractsPublicRegionIdIssuerCorporationId;
  issuer_id: GetContractsPublicRegionIdIssuerId;
  price?: GetContractsPublicRegionIdPrice;
  reward?: GetContractsPublicRegionIdReward;
  start_location_id?: GetContractsPublicRegionIdStartLocationId;
  title?: GetContractsPublicRegionIdTitle;
  type: GetContractsPublicRegionIdType;
  volume?: GetContractsPublicRegionIdVolume;
  [k: string]: unknown | undefined;
}
