/*!
 * ESI endpoint: get:/characters/{character_id}/clones/
 */
/**
 * location_type string
 */
type GetCharactersCharacterIdClonesLocationType = "station" | "structure";
/**
 * location_type string
 */
type GetCharactersCharacterIdClonesJumpCloneLocationType = "station" | "structure";
/**
 * jump_clones array
 *
 * @maxItems 64
 */
type GetCharactersCharacterIdClonesJumpClones = GetCharactersCharacterIdClonesJumpClone[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdClonesOk {
  home_location?: GetCharactersCharacterIdClonesHomeLocation;
  jump_clones: GetCharactersCharacterIdClonesJumpClones;
  /**
   * last_clone_jump_date string
   */
  last_clone_jump_date?: string;
  /**
   * last_station_change_date string
   */
  last_station_change_date?: string;
  [k: string]: unknown | undefined;
}
/**
 * home_location object
 */
interface GetCharactersCharacterIdClonesHomeLocation {
  /**
   * location_id integer
   */
  location_id?: number;
  location_type?: GetCharactersCharacterIdClonesLocationType;
  [k: string]: unknown | undefined;
}
/**
 * jump_clone object
 */
interface GetCharactersCharacterIdClonesJumpClone {
  /**
   * implants array
   *
   * @maxItems 64
   */
  implants: number[];
  /**
   * jump_clone_id integer
   */
  jump_clone_id: number;
  /**
   * location_id integer
   */
  location_id: number;
  location_type: GetCharactersCharacterIdClonesJumpCloneLocationType;
  /**
   * name string
   */
  name?: string;
  [k: string]: unknown | undefined;
}
