/**
 * ESI endpoint: /corporations/{corporation_id}/starbases/
 */

/**
 * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
 */
type GetCorporationsCorporationIdStarbasesMoonId = number;
/**
 * When the POS onlined, for starbases (POSes) in online state
 */
type GetCorporationsCorporationIdStarbasesOnlinedSince = string;
/**
 * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
 */
type GetCorporationsCorporationIdStarbasesReinforcedUntil = string;
/**
 * Unique ID for this starbase (POS)
 */
type GetCorporationsCorporationIdStarbasesStarbaseId = number;
/**
 * state string
 */
type GetCorporationsCorporationIdStarbasesState =
  | "offline"
  | "online"
  | "onlining"
  | "reinforced"
  | "unanchoring";
/**
 * The solar system this starbase (POS) is in, unanchored POSes have this information
 */
type GetCorporationsCorporationIdStarbasesSystemId = number;
/**
 * Starbase (POS) type
 */
type GetCorporationsCorporationIdStarbasesTypeId = number;
/**
 * When the POS started unanchoring, for starbases (POSes) in unanchoring state
 */
type GetCorporationsCorporationIdStarbasesUnanchorAt = string;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdStarbasesOk = GetCorporationsCorporationIdStarbases_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdStarbases_200Ok {
  moon_id?: GetCorporationsCorporationIdStarbasesMoonId;
  onlined_since?: GetCorporationsCorporationIdStarbasesOnlinedSince;
  reinforced_until?: GetCorporationsCorporationIdStarbasesReinforcedUntil;
  starbase_id: GetCorporationsCorporationIdStarbasesStarbaseId;
  state?: GetCorporationsCorporationIdStarbasesState;
  system_id: GetCorporationsCorporationIdStarbasesSystemId;
  type_id: GetCorporationsCorporationIdStarbasesTypeId;
  unanchor_at?: GetCorporationsCorporationIdStarbasesUnanchorAt;
  [k: string]: unknown | undefined;
}
