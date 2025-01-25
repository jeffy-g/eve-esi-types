/*!
 * ESI endpoint: /characters/{character_id}/
 */
/**
 * gender string
 */
type GetCharactersCharacterIdGender = "female" | "male";

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOk {
  /**
   * The character's alliance ID
   */
  alliance_id?: number;
  /**
   * Creation date of the character
   */
  birthday: string;
  /**
   * bloodline_id integer
   */
  bloodline_id: number;
  /**
   * The character's corporation ID
   */
  corporation_id: number;
  /**
   * description string
   */
  description?: string;
  /**
   * ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
   */
  faction_id?: number;
  gender: GetCharactersCharacterIdGender;
  /**
   * name string
   */
  name: string;
  /**
   * race_id integer
   */
  race_id: number;
  /**
   * security_status number
   */
  security_status?: number;
  /**
   * The individual title of the character
   */
  title?: string;
  [k: string]: unknown | undefined;
}
