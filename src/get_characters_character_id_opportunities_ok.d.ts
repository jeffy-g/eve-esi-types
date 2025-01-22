/**
 * ESI endpoint: /characters/{character_id}/opportunities/
 */

/**
 * completed_at string
 */
type GetCharactersCharacterIdOpportunitiesCompletedAt = string;
/**
 * task_id integer
 */
type GetCharactersCharacterIdOpportunitiesTaskId = number;
/**
 * 200 ok array
 *
 * @maxItems 100
 */
type GetCharactersCharacterIdOpportunitiesOk = GetCharactersCharacterIdOpportunities_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOpportunities_200Ok {
  completed_at: GetCharactersCharacterIdOpportunitiesCompletedAt;
  task_id: GetCharactersCharacterIdOpportunitiesTaskId;
  [k: string]: unknown | undefined;
}
