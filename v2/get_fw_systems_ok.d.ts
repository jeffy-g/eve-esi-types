/**
 * ESI endpoint: /fw/systems/
 */

/**
 * contested string
 */
type GetFwSystemsContested = "captured" | "contested" | "uncontested" | "vulnerable";
/**
 * occupier_faction_id integer
 */
type GetFwSystemsOccupierFactionId = number;
/**
 * owner_faction_id integer
 */
type GetFwSystemsOwnerFactionId = number;
/**
 * solar_system_id integer
 */
type GetFwSystemsSolarSystemId = number;
/**
 * victory_points integer
 */
type GetFwSystemsVictoryPoints = number;
/**
 * victory_points_threshold integer
 */
type GetFwSystemsVictoryPointsThreshold = number;
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
  occupier_faction_id: GetFwSystemsOccupierFactionId;
  owner_faction_id: GetFwSystemsOwnerFactionId;
  solar_system_id: GetFwSystemsSolarSystemId;
  victory_points: GetFwSystemsVictoryPoints;
  victory_points_threshold: GetFwSystemsVictoryPointsThreshold;
  [k: string]: unknown | undefined;
}
