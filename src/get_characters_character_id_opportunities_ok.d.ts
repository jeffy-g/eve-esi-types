/*!
 * ESI endpoint: /characters/{character_id}/opportunities/
 */
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
  /**
   * completed_at string
   */
  completed_at: string;
  /**
   * task_id integer
   */
  task_id: number;
  [k: string]: unknown | undefined;
}
