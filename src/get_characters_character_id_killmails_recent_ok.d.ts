/*!
 * ESI endpoint: /characters/{character_id}/killmails/recent/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdKillmailsRecentOk = GetCharactersCharacterIdKillmailsRecent_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdKillmailsRecent_200Ok {
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
