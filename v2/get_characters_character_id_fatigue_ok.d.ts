/*!
 * ESI endpoint: get:/characters/{character_id}/fatigue/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFatigueOk {
  /**
   * Character's jump fatigue expiry
   */
  jump_fatigue_expire_date?: string;
  /**
   * Character's last jump activation
   */
  last_jump_date?: string;
  /**
   * Character's last jump update
   */
  last_update_date?: string;
  [k: string]: unknown | undefined;
}
