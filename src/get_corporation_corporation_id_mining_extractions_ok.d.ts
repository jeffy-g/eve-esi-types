/**
 * ESI endpoint: /corporation/{corporation_id}/mining/extractions/
 */

/**
 * The time at which the chunk being extracted will arrive and can be fractured by the moon mining drill.
 *
 */
type GetCorporationCorporationIdMiningExtractionsChunkArrivalTime = string;
/**
 * The time at which the current extraction was initiated.
 *
 */
type GetCorporationCorporationIdMiningExtractionsExtractionStartTime = string;
/**
 * moon_id integer
 */
type GetCorporationCorporationIdMiningExtractionsMoonId = number;
/**
 * The time at which the chunk being extracted will naturally fracture if it is not first fractured by the moon mining drill.
 *
 */
type GetCorporationCorporationIdMiningExtractionsNaturalDecayTime = string;
/**
 * structure_id integer
 */
type GetCorporationCorporationIdMiningExtractionsStructureId = number;
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
  chunk_arrival_time: GetCorporationCorporationIdMiningExtractionsChunkArrivalTime;
  extraction_start_time: GetCorporationCorporationIdMiningExtractionsExtractionStartTime;
  moon_id: GetCorporationCorporationIdMiningExtractionsMoonId;
  natural_decay_time: GetCorporationCorporationIdMiningExtractionsNaturalDecayTime;
  structure_id: GetCorporationCorporationIdMiningExtractionsStructureId;
  [k: string]: unknown | undefined;
}
