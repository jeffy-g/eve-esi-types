/**
 * ESI endpoint: /fleets/{fleet_id}/
 */

/**
 * Should free-move be enabled in the fleet
 */
type PutFleetsFleetIdIsFreeMove = boolean;
/**
 * New fleet MOTD in CCP flavoured HTML
 */
type PutFleetsFleetIdMotd = string;

/**
 * new_settings object
 */
interface PutFleetsFleetIdNewSettings {
  is_free_move?: PutFleetsFleetIdIsFreeMove;
  motd?: PutFleetsFleetIdMotd;
  [k: string]: unknown | undefined;
}
