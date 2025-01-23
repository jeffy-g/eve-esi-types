/**
 * ESI endpoint: /fleets/{fleet_id}/wings/{wing_id}/squads/
 */

/**
 * The squad_id of the newly created squad
 */
type PostFleetsFleetIdWingsWingIdSquadsSquadId = number;

/**
 * 201 created object
 */
interface PostFleetsFleetIdWingsWingIdSquadsCreated {
  squad_id: PostFleetsFleetIdWingsWingIdSquadsSquadId;
  [k: string]: unknown | undefined;
}
