/**
 * ESI endpoint: /characters/{character_id}/skillqueue/
 */

/**
 * Date on which training of the skill will complete. Omitted if the skill queue is paused.
 */
type GetCharactersCharacterIdSkillqueueFinishDate = string;
/**
 * finished_level integer
 */
type GetCharactersCharacterIdSkillqueueFinishedLevel = number;
/**
 * level_end_sp integer
 */
type GetCharactersCharacterIdSkillqueueLevelEndSp = number;
/**
 * Amount of SP that was in the skill when it started training it's current level. Used to calculate % of current level complete.
 */
type GetCharactersCharacterIdSkillqueueLevelStartSp = number;
/**
 * queue_position integer
 */
type GetCharactersCharacterIdSkillqueueQueuePosition = number;
/**
 * skill_id integer
 */
type GetCharactersCharacterIdSkillqueueSkillId = number;
/**
 * start_date string
 */
type GetCharactersCharacterIdSkillqueueStartDate = string;
/**
 * training_start_sp integer
 */
type GetCharactersCharacterIdSkillqueueTrainingStartSp = number;
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
  finish_date?: GetCharactersCharacterIdSkillqueueFinishDate;
  finished_level: GetCharactersCharacterIdSkillqueueFinishedLevel;
  level_end_sp?: GetCharactersCharacterIdSkillqueueLevelEndSp;
  level_start_sp?: GetCharactersCharacterIdSkillqueueLevelStartSp;
  queue_position: GetCharactersCharacterIdSkillqueueQueuePosition;
  skill_id: GetCharactersCharacterIdSkillqueueSkillId;
  start_date?: GetCharactersCharacterIdSkillqueueStartDate;
  training_start_sp?: GetCharactersCharacterIdSkillqueueTrainingStartSp;
  [k: string]: unknown | undefined;
}
