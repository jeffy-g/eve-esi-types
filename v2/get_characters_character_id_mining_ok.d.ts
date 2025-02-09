/*!
 * ESI endpoint: get:/characters/{character_id}/mining/
 */
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
  /**
   * date string
   */
  date: string;
  /**
   * quantity integer
   */
  quantity: number;
  /**
   * solar_system_id integer
   */
  solar_system_id: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
