/**
 * ESI endpoint: /incursions/
 */

/**
 * The constellation id in which this incursion takes place
 */
type GetIncursionsConstellationId = number;
/**
 * The attacking faction's id
 */
type GetIncursionsFactionId = number;
/**
 * Whether the final encounter has boss or not
 */
type GetIncursionsHasBoss = boolean;
/**
 * infested_solar_system integer
 */
type GetIncursionsInfestedSolarSystem = number;
/**
 * A list of infested solar system ids that are a part of this incursion
 *
 * @maxItems 100
 */
type GetIncursionsInfestedSolarSystems = GetIncursionsInfestedSolarSystem[];
/**
 * Influence of this incursion as a float from 0 to 1
 */
type GetIncursionsInfluence = number;
/**
 * Staging solar system for this incursion
 */
type GetIncursionsStagingSolarSystemId = number;
/**
 * The state of this incursion
 */
type GetIncursionsState = "withdrawing" | "mobilizing" | "established";
/**
 * The type of this incursion
 */
type GetIncursionsType = string;
/**
 * 200 ok array
 *
 * @maxItems 100
 */
type GetIncursionsOk = GetIncursions_200Ok[];

/**
 * 200 ok object
 */
interface GetIncursions_200Ok {
  constellation_id: GetIncursionsConstellationId;
  faction_id: GetIncursionsFactionId;
  has_boss: GetIncursionsHasBoss;
  infested_solar_systems: GetIncursionsInfestedSolarSystems;
  influence: GetIncursionsInfluence;
  staging_solar_system_id: GetIncursionsStagingSolarSystemId;
  state: GetIncursionsState;
  type: GetIncursionsType;
  [k: string]: unknown | undefined;
}
