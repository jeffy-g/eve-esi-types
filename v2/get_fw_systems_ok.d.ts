/*!
 * ESI endpoint: /fw/systems/
 */
/**
 * contested string
 */
type GetFwSystemsContested = "captured" | "contested" | "uncontested" | "vulnerable";
/**
 * 200 ok array
 *
 * @maxItems 171
 */
type GetFwSystemsOk = GetFwSystems_200Ok[];

/**
 * 200 ok object
 */
interface GetFwSystems_200Ok {
  contested: GetFwSystemsContested;
  /**
   * occupier_faction_id integer
   */
  occupier_faction_id: number;
  /**
   * owner_faction_id integer
   */
  owner_faction_id: number;
  /**
   * solar_system_id integer
   */
  solar_system_id: number;
  /**
   * victory_points integer
   */
  victory_points: number;
  /**
   * victory_points_threshold integer
   */
  victory_points_threshold: number;
  [k: string]: unknown | undefined;
}
