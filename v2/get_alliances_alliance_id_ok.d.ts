/**
* ESI endpoint: /alliances/{alliance_id}/
*/

/**
 * 200 ok object
 */
interface GetAlliancesAllianceIdOk {
/**
 * ID of the corporation that created the alliance
 */
  creator_corporation_id: number;
/**
 * ID of the character that created the alliance
 */
  creator_id: number;
/**
 * date_founded string
 */
  date_founded: string;
/**
 * the executor corporation ID, if this alliance is not closed
 */
  executor_corporation_id?: number;
/**
 * Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
 */
  faction_id?: number;
/**
 * the full name of the alliance
 */
  name: string;
/**
 * the short name of the alliance
 */
  ticker: string;
  [k: string]: unknown | undefined;
}
