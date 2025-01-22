/**
 * ESI endpoint: /corporations/{corporation_id}/contracts/{contract_id}/bids/
 */

/**
 * The amount bid, in ISK
 */
type GetCorporationsCorporationIdContractsContractIdBidsAmount = number;
/**
 * Unique ID for the bid
 */
type GetCorporationsCorporationIdContractsContractIdBidsBidId = number;
/**
 * Character ID of the bidder
 */
type GetCorporationsCorporationIdContractsContractIdBidsBidderId = number;
/**
 * Datetime when the bid was placed
 */
type GetCorporationsCorporationIdContractsContractIdBidsDateBid = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdContractsContractIdBidsOk =
  GetCorporationsCorporationIdContractsContractIdBids_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdContractsContractIdBids_200Ok {
  amount: GetCorporationsCorporationIdContractsContractIdBidsAmount;
  bid_id: GetCorporationsCorporationIdContractsContractIdBidsBidId;
  bidder_id: GetCorporationsCorporationIdContractsContractIdBidsBidderId;
  date_bid: GetCorporationsCorporationIdContractsContractIdBidsDateBid;
  [k: string]: unknown | undefined;
}
