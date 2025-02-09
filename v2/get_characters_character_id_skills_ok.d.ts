/*!
 * ESI endpoint: get:/characters/{character_id}/skills/
 */
/**
 * skills array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdSkillsSkills = GetCharactersCharacterIdSkillsSkill[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdSkillsOk {
  skills: GetCharactersCharacterIdSkillsSkills;
  /**
   * total_sp integer
   */
  total_sp: number;
  /**
   * Skill points available to be assigned
   */
  unallocated_sp?: number;
  [k: string]: unknown | undefined;
}
/**
 * skill object
 */
interface GetCharactersCharacterIdSkillsSkill {
  /**
   * active_skill_level integer
   */
  active_skill_level: number;
  /**
   * skill_id integer
   */
  skill_id: number;
  /**
   * skillpoints_in_skill integer
   */
  skillpoints_in_skill: number;
  /**
   * trained_skill_level integer
   */
  trained_skill_level: number;
  [k: string]: unknown | undefined;
}
