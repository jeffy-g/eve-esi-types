/**
 * ESI endpoint: /characters/{character_id}/attributes/
 */

/**
 * Neural remapping cooldown after a character uses remap accrued over time
 */
type GetCharactersCharacterIdAttributesAccruedRemapCooldownDate = string;
/**
 * Number of available bonus character neural remaps
 */
type GetCharactersCharacterIdAttributesBonusRemaps = number;
/**
 * charisma integer
 */
type GetCharactersCharacterIdAttributesCharisma = number;
/**
 * intelligence integer
 */
type GetCharactersCharacterIdAttributesIntelligence = number;
/**
 * Datetime of last neural remap, including usage of bonus remaps
 */
type GetCharactersCharacterIdAttributesLastRemapDate = string;
/**
 * memory integer
 */
type GetCharactersCharacterIdAttributesMemory = number;
/**
 * perception integer
 */
type GetCharactersCharacterIdAttributesPerception = number;
/**
 * willpower integer
 */
type GetCharactersCharacterIdAttributesWillpower = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdAttributesOk {
  accrued_remap_cooldown_date?: GetCharactersCharacterIdAttributesAccruedRemapCooldownDate;
  bonus_remaps?: GetCharactersCharacterIdAttributesBonusRemaps;
  charisma: GetCharactersCharacterIdAttributesCharisma;
  intelligence: GetCharactersCharacterIdAttributesIntelligence;
  last_remap_date?: GetCharactersCharacterIdAttributesLastRemapDate;
  memory: GetCharactersCharacterIdAttributesMemory;
  perception: GetCharactersCharacterIdAttributesPerception;
  willpower: GetCharactersCharacterIdAttributesWillpower;
  [k: string]: unknown | undefined;
}
