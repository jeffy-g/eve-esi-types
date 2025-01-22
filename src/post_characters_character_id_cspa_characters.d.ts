/**
 * ESI endpoint: /characters/{character_id}/cspa/
 */

/**
 * characters array
 *
 * @minItems 1
 * @maxItems 100
 */
type PostCharactersCharacterIdCspaCharacters = [
  PostCharactersCharacterIdCspaCharacter,
  ...PostCharactersCharacterIdCspaCharacter[]
];
/**
 * character integer
 */
type PostCharactersCharacterIdCspaCharacter = number;
