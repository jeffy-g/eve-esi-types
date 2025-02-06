/*!
 * ESI endpoint: /corporations/{corporation_id}/starbases/
 */
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
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdStarbasesOk = GetCorporationsCorporationIdStarbases_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdStarbases_200Ok {
  /**
   * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
   */
  moon_id?: number;
  /**
   * When the POS onlined, for starbases (POSes) in online state
   */
  onlined_since?: string;
  /**
   * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
   */
  reinforced_until?: string;
  /**
   * Unique ID for this starbase (POS)
   */
  starbase_id: number;
  state?: GetCorporationsCorporationIdStarbasesState;
  /**
   * The solar system this starbase (POS) is in, unanchored POSes have this information
   */
  system_id: number;
  type_id: number;
  /**
   * When the POS started unanchoring, for starbases (POSes) in unanchoring state
   */
  unanchor_at?: string;
  [k: string]: unknown | undefined;
}
