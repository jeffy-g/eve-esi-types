/**
* ESI endpoint: /fleets/{fleet_id}/
*/

/**
 * new_settings object
 */
interface PutFleetsFleetIdNewSettings {
/**
 * Should free-move be enabled in the fleet
 */
  is_free_move?: boolean;
/**
 * New fleet MOTD in CCP flavoured HTML
 */
  motd?: string;
  [k: string]: unknown | undefined;
}
