/*!
 * ESI endpoint: /wars/{war_id}/
 */
/**
 * allied corporations or alliances, each object contains either corporation_id or alliance_id
 *
 * @maxItems 10000
 */
type GetWarsWarIdAllies = GetWarsWarIdAlly[];

/**
 * 200 ok object
 */
interface GetWarsWarIdOk {
  aggressor: GetWarsWarIdAggressor;
  allies?: GetWarsWarIdAllies;
  /**
   * Time that the war was declared
   */
  declared: string;
  defender: GetWarsWarIdDefender;
  /**
   * Time the war ended and shooting was no longer allowed
   */
  finished?: string;
  /**
   * ID of the specified war
   */
  id: number;
  /**
   * Was the war declared mutual by both parties
   */
  mutual: boolean;
  /**
   * Is the war currently open for allies or not
   */
  open_for_allies: boolean;
  /**
   * Time the war was retracted but both sides could still shoot each other
   */
  retracted?: string;
  /**
   * Time when the war started and both sides could shoot each other
   */
  started?: string;
  [k: string]: unknown | undefined;
}
/**
 * The aggressor corporation or alliance that declared this war, only contains either corporation_id or alliance_id
 */
interface GetWarsWarIdAggressor {
  /**
   * Alliance ID if and only if the aggressor is an alliance
   */
  alliance_id?: number;
  /**
   * Corporation ID if and only if the aggressor is a corporation
   */
  corporation_id?: number;
  /**
   * ISK value of ships the aggressor has destroyed
   */
  isk_destroyed: number;
  /**
   * The number of ships the aggressor has killed
   */
  ships_killed: number;
  [k: string]: unknown | undefined;
}
/**
 * ally object
 */
interface GetWarsWarIdAlly {
  /**
   * Alliance ID if and only if this ally is an alliance
   */
  alliance_id?: number;
  /**
   * Corporation ID if and only if this ally is a corporation
   */
  corporation_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
 */
interface GetWarsWarIdDefender {
  /**
   * Alliance ID if and only if the defender is an alliance
   */
  alliance_id?: number;
  /**
   * Corporation ID if and only if the defender is a corporation
   */
  corporation_id?: number;
  /**
   * ISK value of ships the defender has killed
   */
  isk_destroyed: number;
  /**
   * The number of ships the defender has killed
   */
  ships_killed: number;
  [k: string]: unknown | undefined;
}
