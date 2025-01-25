/*!
 * ESI endpoint: /contracts/public/bids/{contract_id}/
 */
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
  /**
   * The amount bid, in ISK
   */
  amount: number;
  /**
   * Unique ID for the bid
   */
  bid_id: number;
  /**
   * Datetime when the bid was placed
   */
  date_bid: string;
  [k: string]: unknown | undefined;
}
