/*!
 * ESI endpoint: /characters/{character_id}/skillqueue/
 */
/**
 * 200 ok array
 *
 * @maxItems 150
 */
type GetCharactersCharacterIdSkillqueueOk = GetCharactersCharacterIdSkillqueue_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdSkillqueue_200Ok {
  /**
   * Date on which training of the skill will complete. Omitted if the skill queue is paused.
   */
  finish_date?: string;
  /**
   * finished_level integer
   */
  finished_level: number;
  /**
   * level_end_sp integer
   */
  level_end_sp?: number;
  /**
   * Amount of SP that was in the skill when it started training it's current level. Used to calculate % of current level complete.
   */
  level_start_sp?: number;
  /**
   * queue_position integer
   */
  queue_position: number;
  /**
   * skill_id integer
   */
  skill_id: number;
  /**
   * start_date string
   */
  start_date?: string;
  /**
   * training_start_sp integer
   */
  training_start_sp?: number;
  [k: string]: unknown | undefined;
}
