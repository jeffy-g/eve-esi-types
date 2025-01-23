/**
* ESI endpoint: /fleets/{fleet_id}/members/
*/
/**
 * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
 */
type PostFleetsFleetIdMembersRole = "fleet_commander" | "wing_commander" | "squad_commander" | "squad_member";

/**
 * invitation object
 */
interface PostFleetsFleetIdMembersInvitation {
/**
 * The character you want to invite
 */
  character_id: number;
  role: PostFleetsFleetIdMembersRole;
/**
 * squad_id integer
 */
  squad_id?: number;
/**
 * wing_id integer
 */
  wing_id?: number;
  [k: string]: unknown | undefined;
}
