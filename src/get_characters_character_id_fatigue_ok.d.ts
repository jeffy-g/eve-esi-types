/**
 * ESI endpoint: /characters/{character_id}/fatigue/
 */

/**
 * Character's jump fatigue expiry
 */
type GetCharactersCharacterIdFatigueJumpFatigueExpireDate = string;
/**
 * Character's last jump activation
 */
type GetCharactersCharacterIdFatigueLastJumpDate = string;
/**
 * Character's last jump update
 */
type GetCharactersCharacterIdFatigueLastUpdateDate = string;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFatigueOk {
  jump_fatigue_expire_date?: GetCharactersCharacterIdFatigueJumpFatigueExpireDate;
  last_jump_date?: GetCharactersCharacterIdFatigueLastJumpDate;
  last_update_date?: GetCharactersCharacterIdFatigueLastUpdateDate;
  [k: string]: unknown | undefined;
}
