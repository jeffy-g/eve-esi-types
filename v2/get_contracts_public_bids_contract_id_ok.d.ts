/**
 * ESI endpoint: /contracts/public/bids/{contract_id}/
 */

/**
 * The amount bid, in ISK
 */
type GetContractsPublicBidsContractIdAmount = number;
/**
 * Unique ID for the bid
 */
type GetContractsPublicBidsContractIdBidId = number;
/**
 * Datetime when the bid was placed
 */
type GetContractsPublicBidsContractIdDateBid = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetContractsPublicBidsContractIdOk = GetContractsPublicBidsContractId_200Ok[];

/**
 * 200 ok object
 */
interface GetContractsPublicBidsContractId_200Ok {
  amount: GetContractsPublicBidsContractIdAmount;
  bid_id: GetContractsPublicBidsContractIdBidId;
  date_bid: GetContractsPublicBidsContractIdDateBid;
  [k: string]: unknown | undefined;
}
