/**
 * ESI endpoint: /fleets/{fleet_id}/members/
 */

/**
 * The character you want to invite
 */
type PostFleetsFleetIdMembersCharacterId = number;
/**
 * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
 */
type PostFleetsFleetIdMembersRole = "fleet_commander" | "wing_commander" | "squad_commander" | "squad_member";
/**
 * squad_id integer
 */
type PostFleetsFleetIdMembersSquadId = number;
/**
 * wing_id integer
 */
type PostFleetsFleetIdMembersWingId = number;

/**
 * invitation object
 */
interface PostFleetsFleetIdMembersInvitation {
  character_id: PostFleetsFleetIdMembersCharacterId;
  role: PostFleetsFleetIdMembersRole;
  squad_id?: PostFleetsFleetIdMembersSquadId;
  wing_id?: PostFleetsFleetIdMembersWingId;
  [k: string]: unknown | undefined;
}
