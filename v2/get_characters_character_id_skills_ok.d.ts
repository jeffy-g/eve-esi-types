/**
 * ESI endpoint: /characters/{character_id}/skills/
 */

/**
 * active_skill_level integer
 */
type GetCharactersCharacterIdSkillsActiveSkillLevel = number;
/**
 * skill_id integer
 */
type GetCharactersCharacterIdSkillsSkillId = number;
/**
 * skillpoints_in_skill integer
 */
type GetCharactersCharacterIdSkillsSkillpointsInSkill = number;
/**
 * trained_skill_level integer
 */
type GetCharactersCharacterIdSkillsTrainedSkillLevel = number;
/**
 * skills array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdSkillsSkills = GetCharactersCharacterIdSkillsSkill[];
/**
 * total_sp integer
 */
type GetCharactersCharacterIdSkillsTotalSp = number;
/**
 * Skill points available to be assigned
 */
type GetCharactersCharacterIdSkillsUnallocatedSp = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdSkillsOk {
  skills: GetCharactersCharacterIdSkillsSkills;
  total_sp: GetCharactersCharacterIdSkillsTotalSp;
  unallocated_sp?: GetCharactersCharacterIdSkillsUnallocatedSp;
  [k: string]: unknown | undefined;
}
/**
 * skill object
 */
interface GetCharactersCharacterIdSkillsSkill {
  active_skill_level: GetCharactersCharacterIdSkillsActiveSkillLevel;
  skill_id: GetCharactersCharacterIdSkillsSkillId;
  skillpoints_in_skill: GetCharactersCharacterIdSkillsSkillpointsInSkill;
  trained_skill_level: GetCharactersCharacterIdSkillsTrainedSkillLevel;
  [k: string]: unknown | undefined;
}
