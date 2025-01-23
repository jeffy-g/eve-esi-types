/**
 * ESI endpoint: /characters/affiliation/
 */

/**
 * The character's alliance ID, if their corporation is in an alliance
 */
type PostCharactersAffiliationAllianceId = number;
/**
 * The character's ID
 */
type PostCharactersAffiliationCharacterId = number;
/**
 * The character's corporation ID
 */
type PostCharactersAffiliationCorporationId = number;
/**
 * The character's faction ID, if their corporation is in a faction
 */
type PostCharactersAffiliationFactionId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostCharactersAffiliationOk = PostCharactersAffiliation_200Ok[];

/**
 * 200 ok object
 */
interface PostCharactersAffiliation_200Ok {
  alliance_id?: PostCharactersAffiliationAllianceId;
  character_id: PostCharactersAffiliationCharacterId;
  corporation_id: PostCharactersAffiliationCorporationId;
  faction_id?: PostCharactersAffiliationFactionId;
  [k: string]: unknown | undefined;
}
