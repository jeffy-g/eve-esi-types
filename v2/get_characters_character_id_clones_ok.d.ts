/**
 * ESI endpoint: /characters/{character_id}/clones/
 */

/**
 * location_id integer
 */
type GetCharactersCharacterIdClonesLocationId = number;
/**
 * location_type string
 */
type GetCharactersCharacterIdClonesLocationType = "station" | "structure";
/**
 * implant integer
 */
type GetCharactersCharacterIdClonesImplant = number;
/**
 * implants array
 *
 * @maxItems 64
 */
type GetCharactersCharacterIdClonesImplants = GetCharactersCharacterIdClonesImplant[];
/**
 * jump_clone_id integer
 */
type GetCharactersCharacterIdClonesJumpCloneId = number;
/**
 * location_id integer
 */
type GetCharactersCharacterIdClonesJumpCloneLocationId = number;
/**
 * location_type string
 */
type GetCharactersCharacterIdClonesJumpCloneLocationType = "station" | "structure";
/**
 * name string
 */
type GetCharactersCharacterIdClonesName = string;
/**
 * jump_clones array
 *
 * @maxItems 64
 */
type GetCharactersCharacterIdClonesJumpClones = GetCharactersCharacterIdClonesJumpClone[];
/**
 * last_clone_jump_date string
 */
type GetCharactersCharacterIdClonesLastCloneJumpDate = string;
/**
 * last_station_change_date string
 */
type GetCharactersCharacterIdClonesLastStationChangeDate = string;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdClonesOk {
  home_location?: GetCharactersCharacterIdClonesHomeLocation;
  jump_clones: GetCharactersCharacterIdClonesJumpClones;
  last_clone_jump_date?: GetCharactersCharacterIdClonesLastCloneJumpDate;
  last_station_change_date?: GetCharactersCharacterIdClonesLastStationChangeDate;
  [k: string]: unknown | undefined;
}
/**
 * home_location object
 */
interface GetCharactersCharacterIdClonesHomeLocation {
  location_id?: GetCharactersCharacterIdClonesLocationId;
  location_type?: GetCharactersCharacterIdClonesLocationType;
  [k: string]: unknown | undefined;
}
/**
 * jump_clone object
 */
interface GetCharactersCharacterIdClonesJumpClone {
  implants: GetCharactersCharacterIdClonesImplants;
  jump_clone_id: GetCharactersCharacterIdClonesJumpCloneId;
  location_id: GetCharactersCharacterIdClonesJumpCloneLocationId;
  location_type: GetCharactersCharacterIdClonesJumpCloneLocationType;
  name?: GetCharactersCharacterIdClonesName;
  [k: string]: unknown | undefined;
}
