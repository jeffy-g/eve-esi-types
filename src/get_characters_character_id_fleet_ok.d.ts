/**
 * ESI endpoint: /characters/{character_id}/fleet/
 */

/**
 * The character's current fleet ID
 */
type GetCharactersCharacterIdFleetFleetId = number;
/**
 * Member’s role in fleet
 */
type GetCharactersCharacterIdFleetRole =
  | "fleet_commander"
  | "squad_commander"
  | "squad_member"
  | "wing_commander";
/**
 * ID of the squad the member is in. If not applicable, will be set to -1
 */
type GetCharactersCharacterIdFleetSquadId = number;
/**
 * ID of the wing the member is in. If not applicable, will be set to -1
 */
type GetCharactersCharacterIdFleetWingId = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFleetOk {
  fleet_id: GetCharactersCharacterIdFleetFleetId;
  role: GetCharactersCharacterIdFleetRole;
  squad_id: GetCharactersCharacterIdFleetSquadId;
  wing_id: GetCharactersCharacterIdFleetWingId;
  [k: string]: unknown | undefined;
}
