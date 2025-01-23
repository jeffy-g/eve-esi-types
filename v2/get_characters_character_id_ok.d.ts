/**
 * ESI endpoint: /characters/{character_id}/
 */

/**
 * The character's alliance ID
 */
type GetCharactersCharacterIdAllianceId = number;
/**
 * Creation date of the character
 */
type GetCharactersCharacterIdBirthday = string;
/**
 * bloodline_id integer
 */
type GetCharactersCharacterIdBloodlineId = number;
/**
 * The character's corporation ID
 */
type GetCharactersCharacterIdCorporationId = number;
/**
 * description string
 */
type GetCharactersCharacterIdDescription = string;
/**
 * ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
 */
type GetCharactersCharacterIdFactionId = number;
/**
 * gender string
 */
type GetCharactersCharacterIdGender = "female" | "male";
/**
 * name string
 */
type GetCharactersCharacterIdName = string;
/**
 * race_id integer
 */
type GetCharactersCharacterIdRaceId = number;
/**
 * security_status number
 */
type GetCharactersCharacterIdSecurityStatus = number;
/**
 * The individual title of the character
 */
type GetCharactersCharacterIdTitle = string;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOk {
  alliance_id?: GetCharactersCharacterIdAllianceId;
  birthday: GetCharactersCharacterIdBirthday;
  bloodline_id: GetCharactersCharacterIdBloodlineId;
  corporation_id: GetCharactersCharacterIdCorporationId;
  description?: GetCharactersCharacterIdDescription;
  faction_id?: GetCharactersCharacterIdFactionId;
  gender: GetCharactersCharacterIdGender;
  name: GetCharactersCharacterIdName;
  race_id: GetCharactersCharacterIdRaceId;
  security_status?: GetCharactersCharacterIdSecurityStatus;
  title?: GetCharactersCharacterIdTitle;
  [k: string]: unknown | undefined;
}
