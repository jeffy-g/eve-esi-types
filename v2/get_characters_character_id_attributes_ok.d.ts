/*!
 * ESI endpoint: get:/characters/{character_id}/attributes/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdAttributesOk {
  /**
   * Neural remapping cooldown after a character uses remap accrued over time
   */
  accrued_remap_cooldown_date?: string;
  /**
   * Number of available bonus character neural remaps
   */
  bonus_remaps?: number;
  /**
   * charisma integer
   */
  charisma: number;
  /**
   * intelligence integer
   */
  intelligence: number;
  /**
   * Datetime of last neural remap, including usage of bonus remaps
   */
  last_remap_date?: string;
  /**
   * memory integer
   */
  memory: number;
  /**
   * perception integer
   */
  perception: number;
  /**
   * willpower integer
   */
  willpower: number;
  [k: string]: unknown | undefined;
}
