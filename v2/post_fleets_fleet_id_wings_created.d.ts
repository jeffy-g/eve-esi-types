/**
 * ESI endpoint: /fleets/{fleet_id}/wings/
 */

/**
 * The wing_id of the newly created wing
 */
type PostFleetsFleetIdWingsWingId = number;

/**
 * 201 created object
 */
interface PostFleetsFleetIdWingsCreated {
  wing_id: PostFleetsFleetIdWingsWingId;
  [k: string]: unknown | undefined;
}
