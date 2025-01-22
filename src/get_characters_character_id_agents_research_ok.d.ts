/**
 * ESI endpoint: /characters/{character_id}/agents_research/
 */

/**
 * agent_id integer
 */
type GetCharactersCharacterIdAgentsResearchAgentId = number;
/**
 * points_per_day number
 */
type GetCharactersCharacterIdAgentsResearchPointsPerDay = number;
/**
 * remainder_points number
 */
type GetCharactersCharacterIdAgentsResearchRemainderPoints = number;
/**
 * skill_type_id integer
 */
type GetCharactersCharacterIdAgentsResearchSkillTypeId = number;
/**
 * started_at string
 */
type GetCharactersCharacterIdAgentsResearchStartedAt = string;
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
  agent_id: GetCharactersCharacterIdAgentsResearchAgentId;
  points_per_day: GetCharactersCharacterIdAgentsResearchPointsPerDay;
  remainder_points: GetCharactersCharacterIdAgentsResearchRemainderPoints;
  skill_type_id: GetCharactersCharacterIdAgentsResearchSkillTypeId;
  started_at: GetCharactersCharacterIdAgentsResearchStartedAt;
  [k: string]: unknown | undefined;
}
