/*!
 * ESI endpoint: get:/characters/{character_id}/agents_research/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdAgentsResearchOk = GetCharactersCharacterIdAgentsResearch_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdAgentsResearch_200Ok {
  /**
   * agent_id integer
   */
  agent_id: number;
  /**
   * points_per_day number
   */
  points_per_day: number;
  /**
   * remainder_points number
   */
  remainder_points: number;
  skill_type_id: number;
  /**
   * started_at string
   */
  started_at: string;
  [k: string]: unknown | undefined;
}
