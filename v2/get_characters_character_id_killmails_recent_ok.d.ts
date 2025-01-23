/**
 * ESI endpoint: /characters/{character_id}/killmails/recent/
 */

/**
 * A hash of this killmail
 */
type GetCharactersCharacterIdKillmailsRecentKillmailHash = string;
/**
 * ID of this killmail
 */
type GetCharactersCharacterIdKillmailsRecentKillmailId = number;
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
  killmail_hash: GetCharactersCharacterIdKillmailsRecentKillmailHash;
  killmail_id: GetCharactersCharacterIdKillmailsRecentKillmailId;
  [k: string]: unknown | undefined;
}
