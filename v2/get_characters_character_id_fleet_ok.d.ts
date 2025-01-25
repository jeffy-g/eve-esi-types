/*!
 * ESI endpoint: /characters/{character_id}/fleet/
 */
/**
 * Member’s role in fleet
 */
type GetCharactersCharacterIdFleetRole =
  | "fleet_commander"
  | "squad_commander"
  | "squad_member"
  | "wing_commander";

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFleetOk {
  /**
   * The character's current fleet ID
   */
  fleet_id: number;
  role: GetCharactersCharacterIdFleetRole;
  /**
   * ID of the squad the member is in. If not applicable, will be set to -1
   */
  squad_id: number;
  /**
   * ID of the wing the member is in. If not applicable, will be set to -1
   */
  wing_id: number;
  [k: string]: unknown | undefined;
}
