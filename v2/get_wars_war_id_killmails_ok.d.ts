/*!
 * ESI endpoint: get:/wars/{war_id}/killmails/
 */
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
