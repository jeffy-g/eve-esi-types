/*!
 * ESI endpoint: /corporation/{corporation_id}/mining/extractions/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationCorporationIdMiningExtractionsOk = GetCorporationCorporationIdMiningExtractions_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationCorporationIdMiningExtractions_200Ok {
  /**
   * The time at which the chunk being extracted will arrive and can be fractured by the moon mining drill.
   *
   */
  chunk_arrival_time: string;
  /**
   * The time at which the current extraction was initiated.
   *
   */
  extraction_start_time: string;
  /**
   * moon_id integer
   */
  moon_id: number;
  /**
   * The time at which the chunk being extracted will naturally fracture if it is not first fractured by the moon mining drill.
   *
   */
  natural_decay_time: string;
  /**
   * structure_id integer
   */
  structure_id: number;
  [k: string]: unknown | undefined;
}
