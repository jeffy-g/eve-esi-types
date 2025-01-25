/*!
 * ESI endpoint: /status/
 */

/**
 * 200 ok object
 */
interface GetStatusOk {
  /**
   * Current online player count
   */
  players: number;
  /**
   * Running version as string
   */
  server_version: string;
  /**
   * Server start timestamp
   */
  start_time: string;
  /**
   * If the server is in VIP mode
   */
  vip?: boolean;
  [k: string]: unknown | undefined;
}
