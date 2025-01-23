/**
 * ESI endpoint: /fleets/{fleet_id}/members/
 */

/**
 * character_id integer
 */
type GetFleetsFleetIdMembersCharacterId = number;
/**
 * join_time string
 */
type GetFleetsFleetIdMembersJoinTime = string;
/**
 * Member’s role in fleet
 */
type GetFleetsFleetIdMembersRole = "fleet_commander" | "wing_commander" | "squad_commander" | "squad_member";
/**
 * Localized role names
 */
type GetFleetsFleetIdMembersRoleName = string;
/**
 * ship_type_id integer
 */
type GetFleetsFleetIdMembersShipTypeId = number;
/**
 * Solar system the member is located in
 */
type GetFleetsFleetIdMembersSolarSystemId = number;
/**
 * ID of the squad the member is in. If not applicable, will be set to -1
 */
type GetFleetsFleetIdMembersSquadId = number;
/**
 * Station in which the member is docked in, if applicable
 */
type GetFleetsFleetIdMembersStationId = number;
/**
 * Whether the member take fleet warps
 */
type GetFleetsFleetIdMembersTakesFleetWarp = boolean;
/**
 * ID of the wing the member is in. If not applicable, will be set to -1
 */
type GetFleetsFleetIdMembersWingId = number;
/**
 * 200 ok array
 *
 * @maxItems 256
 */
type GetFleetsFleetIdMembersOk = GetFleetsFleetIdMembers_200Ok[];

/**
 * 200 ok object
 */
interface GetFleetsFleetIdMembers_200Ok {
  character_id: GetFleetsFleetIdMembersCharacterId;
  join_time: GetFleetsFleetIdMembersJoinTime;
  role: GetFleetsFleetIdMembersRole;
  role_name: GetFleetsFleetIdMembersRoleName;
  ship_type_id: GetFleetsFleetIdMembersShipTypeId;
  solar_system_id: GetFleetsFleetIdMembersSolarSystemId;
  squad_id: GetFleetsFleetIdMembersSquadId;
  station_id?: GetFleetsFleetIdMembersStationId;
  takes_fleet_warp: GetFleetsFleetIdMembersTakesFleetWarp;
  wing_id: GetFleetsFleetIdMembersWingId;
  [k: string]: unknown | undefined;
}
