/**
 * ESI endpoint: /characters/{character_id}/mining/
 */

/**
 * date string
 */
type GetCharactersCharacterIdMiningDate = string;
/**
 * quantity integer
 */
type GetCharactersCharacterIdMiningQuantity = number;
/**
 * solar_system_id integer
 */
type GetCharactersCharacterIdMiningSolarSystemId = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdMiningTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdMiningOk = GetCharactersCharacterIdMining_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMining_200Ok {
  date: GetCharactersCharacterIdMiningDate;
  quantity: GetCharactersCharacterIdMiningQuantity;
  solar_system_id: GetCharactersCharacterIdMiningSolarSystemId;
  type_id: GetCharactersCharacterIdMiningTypeId;
  [k: string]: unknown | undefined;
}
