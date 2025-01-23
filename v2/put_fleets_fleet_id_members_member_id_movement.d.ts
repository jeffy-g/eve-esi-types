/**
 * ESI endpoint: /fleets/{fleet_id}/members/{member_id}/
 */

/**
 * If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
 */
type PutFleetsFleetIdMembersMemberIdRole =
  | "fleet_commander"
  | "wing_commander"
  | "squad_commander"
  | "squad_member";
/**
 * squad_id integer
 */
type PutFleetsFleetIdMembersMemberIdSquadId = number;
/**
 * wing_id integer
 */
type PutFleetsFleetIdMembersMemberIdWingId = number;

/**
 * movement object
 */
interface PutFleetsFleetIdMembersMemberIdMovement {
  role: PutFleetsFleetIdMembersMemberIdRole;
  squad_id?: PutFleetsFleetIdMembersMemberIdSquadId;
  wing_id?: PutFleetsFleetIdMembersMemberIdWingId;
  [k: string]: unknown | undefined;
}
