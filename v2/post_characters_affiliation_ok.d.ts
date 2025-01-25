/*!
 * ESI endpoint: /characters/affiliation/
 */
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
  /**
   * The character's alliance ID, if their corporation is in an alliance
   */
  alliance_id?: number;
  /**
   * The character's ID
   */
  character_id: number;
  /**
   * The character's corporation ID
   */
  corporation_id: number;
  /**
   * The character's faction ID, if their corporation is in a faction
   */
  faction_id?: number;
  [k: string]: unknown | undefined;
}
