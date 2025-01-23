/**
* ESI endpoint: /corporations/{corporation_id}/killmails/recent/
*/
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdKillmailsRecentOk = GetCorporationsCorporationIdKillmailsRecent_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdKillmailsRecent_200Ok {
/**
 * A hash of this killmail
 */
  killmail_hash: string;
/**
 * ID of this killmail
 */
  killmail_id: number;
  [k: string]: unknown | undefined;
}
