/**
 * ESI endpoint: /fleets/{fleet_id}/
 */

/**
 * Is free-move enabled
 */
type GetFleetsFleetIdIsFreeMove = boolean;
/**
 * Does the fleet have an active fleet advertisement
 */
type GetFleetsFleetIdIsRegistered = boolean;
/**
 * Is EVE Voice enabled
 */
type GetFleetsFleetIdIsVoiceEnabled = boolean;
/**
 * Fleet MOTD in CCP flavoured HTML
 */
type GetFleetsFleetIdMotd = string;

/**
 * 200 ok object
 */
interface GetFleetsFleetIdOk {
  is_free_move: GetFleetsFleetIdIsFreeMove;
  is_registered: GetFleetsFleetIdIsRegistered;
  is_voice_enabled: GetFleetsFleetIdIsVoiceEnabled;
  motd: GetFleetsFleetIdMotd;
  [k: string]: unknown | undefined;
}
