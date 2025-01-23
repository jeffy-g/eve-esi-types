/**
 * ESI endpoint: /wars/{war_id}/killmails/
 */

/**
 * A hash of this killmail
 */
type GetWarsWarIdKillmailsKillmailHash = string;
/**
 * ID of this killmail
 */
type GetWarsWarIdKillmailsKillmailId = number;
/**
 * 200 ok array
 *
 * @maxItems 2000
 */
type GetWarsWarIdKillmailsOk = GetWarsWarIdKillmails_200Ok[];

/**
 * 200 ok object
 */
interface GetWarsWarIdKillmails_200Ok {
  killmail_hash: GetWarsWarIdKillmailsKillmailHash;
  killmail_id: GetWarsWarIdKillmailsKillmailId;
  [k: string]: unknown | undefined;
}
