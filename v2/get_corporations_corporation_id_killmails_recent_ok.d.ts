/**
 * ESI endpoint: /corporations/{corporation_id}/killmails/recent/
 */

/**
 * A hash of this killmail
 */
type GetCorporationsCorporationIdKillmailsRecentKillmailHash = string;
/**
 * ID of this killmail
 */
type GetCorporationsCorporationIdKillmailsRecentKillmailId = number;
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
  killmail_hash: GetCorporationsCorporationIdKillmailsRecentKillmailHash;
  killmail_id: GetCorporationsCorporationIdKillmailsRecentKillmailId;
  [k: string]: unknown | undefined;
}
