/**
 * ESI endpoint: /status/
 */

/**
 * Current online player count
 */
type GetStatusPlayers = number;
/**
 * Running version as string
 */
type GetStatusServerVersion = string;
/**
 * Server start timestamp
 */
type GetStatusStartTime = string;
/**
 * If the server is in VIP mode
 */
type GetStatusVip = boolean;

/**
 * 200 ok object
 */
interface GetStatusOk {
  players: GetStatusPlayers;
  server_version: GetStatusServerVersion;
  start_time: GetStatusStartTime;
  vip?: GetStatusVip;
  [k: string]: unknown | undefined;
}
