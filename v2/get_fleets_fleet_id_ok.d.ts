/*!
 * ESI endpoint: get:/fleets/{fleet_id}/
 */

/**
 * 200 ok object
 */
interface GetFleetsFleetIdOk {
  /**
   * Is free-move enabled
   */
  is_free_move: boolean;
  /**
   * Does the fleet have an active fleet advertisement
   */
  is_registered: boolean;
  /**
   * Is EVE Voice enabled
   */
  is_voice_enabled: boolean;
  /**
   * Fleet MOTD in CCP flavoured HTML
   */
  motd: string;
  [k: string]: unknown | undefined;
}
