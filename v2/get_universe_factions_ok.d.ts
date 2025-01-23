/**
 * ESI endpoint: /universe/factions/
 */

/**
 * corporation_id integer
 */
type GetUniverseFactionsCorporationId = number;
/**
 * description string
 */
type GetUniverseFactionsDescription = string;
/**
 * faction_id integer
 */
type GetUniverseFactionsFactionId = number;
/**
 * is_unique boolean
 */
type GetUniverseFactionsIsUnique = boolean;
/**
 * militia_corporation_id integer
 */
type GetUniverseFactionsMilitiaCorporationId = number;
/**
 * name string
 */
type GetUniverseFactionsName = string;
/**
 * size_factor number
 */
type GetUniverseFactionsSizeFactor = number;
/**
 * solar_system_id integer
 */
type GetUniverseFactionsSolarSystemId = number;
/**
 * station_count integer
 */
type GetUniverseFactionsStationCount = number;
/**
 * station_system_count integer
 */
type GetUniverseFactionsStationSystemCount = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseFactionsOk = GetUniverseFactions_200Ok[];

/**
 * 200 ok object
 */
interface GetUniverseFactions_200Ok {
  corporation_id?: GetUniverseFactionsCorporationId;
  description: GetUniverseFactionsDescription;
  faction_id: GetUniverseFactionsFactionId;
  is_unique: GetUniverseFactionsIsUnique;
  militia_corporation_id?: GetUniverseFactionsMilitiaCorporationId;
  name: GetUniverseFactionsName;
  size_factor: GetUniverseFactionsSizeFactor;
  solar_system_id?: GetUniverseFactionsSolarSystemId;
  station_count: GetUniverseFactionsStationCount;
  station_system_count: GetUniverseFactionsStationSystemCount;
  [k: string]: unknown | undefined;
}
