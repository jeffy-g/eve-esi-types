/**
 * ESI endpoint: /characters/{character_id}/contracts/{contract_id}/bids/
 */

/**
 * The amount bid, in ISK
 */
type GetCharactersCharacterIdContractsContractIdBidsAmount = number;
/**
 * Unique ID for the bid
 */
type GetCharactersCharacterIdContractsContractIdBidsBidId = number;
/**
 * Character ID of the bidder
 */
type GetCharactersCharacterIdContractsContractIdBidsBidderId = number;
/**
 * Datetime when the bid was placed
 */
type GetCharactersCharacterIdContractsContractIdBidsDateBid = string;
/**
 * 200 ok array
 *
 * @maxItems 5000
 */
type GetCharactersCharacterIdContractsContractIdBidsOk = GetCharactersCharacterIdContractsContractIdBids_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdContractsContractIdBids_200Ok {
  amount: GetCharactersCharacterIdContractsContractIdBidsAmount;
  bid_id: GetCharactersCharacterIdContractsContractIdBidsBidId;
  bidder_id: GetCharactersCharacterIdContractsContractIdBidsBidderId;
  date_bid: GetCharactersCharacterIdContractsContractIdBidsDateBid;
  [k: string]: unknown | undefined;
}
