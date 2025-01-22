/**
 * ESI endpoint: /alliances/{alliance_id}/
 */

/**
 * ID of the corporation that created the alliance
 */
type GetAlliancesAllianceIdCreatorCorporationId = number;
/**
 * ID of the character that created the alliance
 */
type GetAlliancesAllianceIdCreatorId = number;
/**
 * date_founded string
 */
type GetAlliancesAllianceIdDateFounded = string;
/**
 * the executor corporation ID, if this alliance is not closed
 */
type GetAlliancesAllianceIdExecutorCorporationId = number;
/**
 * Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
 */
type GetAlliancesAllianceIdFactionId = number;
/**
 * the full name of the alliance
 */
type GetAlliancesAllianceIdName = string;
/**
 * the short name of the alliance
 */
type GetAlliancesAllianceIdTicker = string;

/**
 * 200 ok object
 */
interface GetAlliancesAllianceIdOk {
  creator_corporation_id: GetAlliancesAllianceIdCreatorCorporationId;
  creator_id: GetAlliancesAllianceIdCreatorId;
  date_founded: GetAlliancesAllianceIdDateFounded;
  executor_corporation_id?: GetAlliancesAllianceIdExecutorCorporationId;
  faction_id?: GetAlliancesAllianceIdFactionId;
  name: GetAlliancesAllianceIdName;
  ticker: GetAlliancesAllianceIdTicker;
  [k: string]: unknown | undefined;
}
