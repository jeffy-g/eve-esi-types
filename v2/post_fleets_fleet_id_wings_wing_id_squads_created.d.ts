/*!
 * ESI endpoint: post:/fleets/{fleet_id}/wings/{wing_id}/squads/
 */

/**
 * 201 created object
 */
interface PostFleetsFleetIdWingsWingIdSquadsCreated {
  /**
   * The squad_id of the newly created squad
   */
  squad_id: number;
  [k: string]: unknown | undefined;
}
