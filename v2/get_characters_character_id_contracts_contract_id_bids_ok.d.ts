/**
* ESI endpoint: /characters/{character_id}/contracts/{contract_id}/bids/
*/
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
