/*!
 * ESI endpoint: get:/corporation/{corporation_id}/mining/observers/{observer_id}/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationCorporationIdMiningObserversObserverIdOk =
  GetCorporationCorporationIdMiningObserversObserverId_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationCorporationIdMiningObserversObserverId_200Ok {
  /**
   * The character that did the mining
   *
   */
  character_id: number;
  /**
   * last_updated string
   */
  last_updated: string;
  /**
   * quantity integer
   */
  quantity: number;
  /**
   * The corporation id of the character at the time data was recorded.
   *
   */
  recorded_corporation_id: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
