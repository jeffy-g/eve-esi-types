/*!
 * ESI endpoint: get:/fleets/{fleet_id}/members/
 */
/**
 * Member’s role in fleet
 */
type GetFleetsFleetIdMembersRole = "fleet_commander" | "wing_commander" | "squad_commander" | "squad_member";
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
  /**
   * character_id integer
   */
  character_id: number;
  /**
   * join_time string
   */
  join_time: string;
  role: GetFleetsFleetIdMembersRole;
  /**
   * Localized role names
   */
  role_name: string;
  ship_type_id: number;
  /**
   * Solar system the member is located in
   */
  solar_system_id: number;
  /**
   * ID of the squad the member is in. If not applicable, will be set to -1
   */
  squad_id: number;
  /**
   * Station in which the member is docked in, if applicable
   */
  station_id?: number;
  /**
   * Whether the member take fleet warps
   */
  takes_fleet_warp: boolean;
  /**
   * ID of the wing the member is in. If not applicable, will be set to -1
   */
  wing_id: number;
  [k: string]: unknown | undefined;
}
