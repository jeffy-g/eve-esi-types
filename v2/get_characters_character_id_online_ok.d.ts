/**
 * ESI endpoint: /characters/{character_id}/online/
 */

/**
 * Timestamp of the last login
 */
type GetCharactersCharacterIdOnlineLastLogin = string;
/**
 * Timestamp of the last logout
 */
type GetCharactersCharacterIdOnlineLastLogout = string;
/**
 * Total number of times the character has logged in
 */
type GetCharactersCharacterIdOnlineLogins = number;
/**
 * If the character is online
 */
type GetCharactersCharacterIdOnlineOnline = boolean;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOnlineOk {
  last_login?: GetCharactersCharacterIdOnlineLastLogin;
  last_logout?: GetCharactersCharacterIdOnlineLastLogout;
  logins?: GetCharactersCharacterIdOnlineLogins;
  online: GetCharactersCharacterIdOnlineOnline;
  [k: string]: unknown | undefined;
}
