/*!
 * ESI endpoint: get:/corporations/{corporation_id}/contracts/{contract_id}/bids/
 */
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
  /**
   * The amount bid, in ISK
   */
  amount: number;
  /**
   * Unique ID for the bid
   */
  bid_id: number;
  /**
   * Character ID of the bidder
   */
  bidder_id: number;
  /**
   * Datetime when the bid was placed
   */
  date_bid: string;
  [k: string]: unknown | undefined;
}
