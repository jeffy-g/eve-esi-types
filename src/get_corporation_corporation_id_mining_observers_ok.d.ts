/**
 * ESI endpoint: /corporation/{corporation_id}/mining/observers/
 */

/**
 * last_updated string
 */
type GetCorporationCorporationIdMiningObserversLastUpdated = string;
/**
 * The entity that was observing the asteroid field when it was mined.
 *
 */
type GetCorporationCorporationIdMiningObserversObserverId = number;
/**
 * The category of the observing entity
 */
type GetCorporationCorporationIdMiningObserversObserverType = "structure";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationCorporationIdMiningObserversOk = GetCorporationCorporationIdMiningObservers_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationCorporationIdMiningObservers_200Ok {
  last_updated: GetCorporationCorporationIdMiningObserversLastUpdated;
  observer_id: GetCorporationCorporationIdMiningObserversObserverId;
  observer_type: GetCorporationCorporationIdMiningObserversObserverType;
  [k: string]: unknown | undefined;
}
