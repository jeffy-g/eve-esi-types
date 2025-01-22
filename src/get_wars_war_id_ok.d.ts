/**
 * ESI endpoint: /wars/{war_id}/
 */

/**
 * Alliance ID if and only if the aggressor is an alliance
 */
type GetWarsWarIdAllianceId = number;
/**
 * Corporation ID if and only if the aggressor is a corporation
 */
type GetWarsWarIdCorporationId = number;
/**
 * ISK value of ships the aggressor has destroyed
 */
type GetWarsWarIdIskDestroyed = number;
/**
 * The number of ships the aggressor has killed
 */
type GetWarsWarIdShipsKilled = number;
/**
 * Alliance ID if and only if this ally is an alliance
 */
type GetWarsWarIdAllyAllianceId = number;
/**
 * Corporation ID if and only if this ally is a corporation
 */
type GetWarsWarIdAllyCorporationId = number;
/**
 * allied corporations or alliances, each object contains either corporation_id or alliance_id
 *
 * @maxItems 10000
 */
type GetWarsWarIdAllies = GetWarsWarIdAlly[];
/**
 * Time that the war was declared
 */
type GetWarsWarIdDeclared = string;
/**
 * Alliance ID if and only if the defender is an alliance
 */
type GetWarsWarIdDefenderAllianceId = number;
/**
 * Corporation ID if and only if the defender is a corporation
 */
type GetWarsWarIdDefenderCorporationId = number;
/**
 * ISK value of ships the defender has killed
 */
type GetWarsWarIdDefenderIskDestroyed = number;
/**
 * The number of ships the defender has killed
 */
type GetWarsWarIdDefenderShipsKilled = number;
/**
 * Time the war ended and shooting was no longer allowed
 */
type GetWarsWarIdFinished = string;
/**
 * ID of the specified war
 */
type GetWarsWarIdId = number;
/**
 * Was the war declared mutual by both parties
 */
type GetWarsWarIdMutual = boolean;
/**
 * Is the war currently open for allies or not
 */
type GetWarsWarIdOpenForAllies = boolean;
/**
 * Time the war was retracted but both sides could still shoot each other
 */
type GetWarsWarIdRetracted = string;
/**
 * Time when the war started and both sides could shoot each other
 */
type GetWarsWarIdStarted = string;

/**
 * 200 ok object
 */
interface GetWarsWarIdOk {
  aggressor: GetWarsWarIdAggressor;
  allies?: GetWarsWarIdAllies;
  declared: GetWarsWarIdDeclared;
  defender: GetWarsWarIdDefender;
  finished?: GetWarsWarIdFinished;
  id: GetWarsWarIdId;
  mutual: GetWarsWarIdMutual;
  open_for_allies: GetWarsWarIdOpenForAllies;
  retracted?: GetWarsWarIdRetracted;
  started?: GetWarsWarIdStarted;
  [k: string]: unknown | undefined;
}
/**
 * The aggressor corporation or alliance that declared this war, only contains either corporation_id or alliance_id
 */
interface GetWarsWarIdAggressor {
  alliance_id?: GetWarsWarIdAllianceId;
  corporation_id?: GetWarsWarIdCorporationId;
  isk_destroyed: GetWarsWarIdIskDestroyed;
  ships_killed: GetWarsWarIdShipsKilled;
  [k: string]: unknown | undefined;
}
/**
 * ally object
 */
interface GetWarsWarIdAlly {
  alliance_id?: GetWarsWarIdAllyAllianceId;
  corporation_id?: GetWarsWarIdAllyCorporationId;
  [k: string]: unknown | undefined;
}
/**
 * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
 */
interface GetWarsWarIdDefender {
  alliance_id?: GetWarsWarIdDefenderAllianceId;
  corporation_id?: GetWarsWarIdDefenderCorporationId;
  isk_destroyed: GetWarsWarIdDefenderIskDestroyed;
  ships_killed: GetWarsWarIdDefenderShipsKilled;
  [k: string]: unknown | undefined;
}
