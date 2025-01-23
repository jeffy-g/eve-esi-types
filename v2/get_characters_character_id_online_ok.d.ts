/**
* ESI endpoint: /characters/{character_id}/online/
*/

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOnlineOk {
/**
 * Timestamp of the last login
 */
  last_login?: string;
/**
 * Timestamp of the last logout
 */
  last_logout?: string;
/**
 * Total number of times the character has logged in
 */
  logins?: number;
/**
 * If the character is online
 */
  online: boolean;
  [k: string]: unknown | undefined;
}
