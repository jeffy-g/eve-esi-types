/**
 * ESI endpoint: /characters/{character_id}/fittings/
 */

/**
 * fitting_id integer
 */
type PostCharactersCharacterIdFittingsFittingId = number;

/**
 * 201 created object
 */
interface PostCharactersCharacterIdFittingsCreated {
  fitting_id: PostCharactersCharacterIdFittingsFittingId;
  [k: string]: unknown | undefined;
}
