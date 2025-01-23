/**
 * ESI endpoint: /corporation/{corporation_id}/mining/observers/{observer_id}/
 */

/**
 * The character that did the mining
 *
 */
type GetCorporationCorporationIdMiningObserversObserverIdCharacterId = number;
/**
 * last_updated string
 */
type GetCorporationCorporationIdMiningObserversObserverIdLastUpdated = string;
/**
 * quantity integer
 */
type GetCorporationCorporationIdMiningObserversObserverIdQuantity = number;
/**
 * The corporation id of the character at the time data was recorded.
 *
 */
type GetCorporationCorporationIdMiningObserversObserverIdRecordedCorporationId = number;
/**
 * type_id integer
 */
type GetCorporationCorporationIdMiningObserversObserverIdTypeId = number;
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
  character_id: GetCorporationCorporationIdMiningObserversObserverIdCharacterId;
  last_updated: GetCorporationCorporationIdMiningObserversObserverIdLastUpdated;
  quantity: GetCorporationCorporationIdMiningObserversObserverIdQuantity;
  recorded_corporation_id: GetCorporationCorporationIdMiningObserversObserverIdRecordedCorporationId;
  type_id: GetCorporationCorporationIdMiningObserversObserverIdTypeId;
  [k: string]: unknown | undefined;
}
