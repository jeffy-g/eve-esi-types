/*!
 * ESI endpoint: get:/characters/{character_id}/loyalty/points/
 */
/**
 * 200 ok array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdLoyaltyPointsOk = GetCharactersCharacterIdLoyaltyPoints_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdLoyaltyPoints_200Ok {
  /**
   * corporation_id integer
   */
  corporation_id: number;
  /**
   * loyalty_points integer
   */
  loyalty_points: number;
  [k: string]: unknown | undefined;
}
