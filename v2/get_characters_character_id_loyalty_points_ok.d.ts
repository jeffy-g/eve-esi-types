/**
 * ESI endpoint: /characters/{character_id}/loyalty/points/
 */

/**
 * corporation_id integer
 */
type GetCharactersCharacterIdLoyaltyPointsCorporationId = number;
/**
 * loyalty_points integer
 */
type GetCharactersCharacterIdLoyaltyPointsLoyaltyPoints = number;
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
  corporation_id: GetCharactersCharacterIdLoyaltyPointsCorporationId;
  loyalty_points: GetCharactersCharacterIdLoyaltyPointsLoyaltyPoints;
  [k: string]: unknown | undefined;
}
