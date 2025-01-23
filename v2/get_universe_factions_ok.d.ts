/**
* ESI endpoint: /universe/factions/
*/
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
/**
 * corporation_id integer
 */
  corporation_id?: number;
/**
 * description string
 */
  description: string;
/**
 * faction_id integer
 */
  faction_id: number;
/**
 * is_unique boolean
 */
  is_unique: boolean;
/**
 * militia_corporation_id integer
 */
  militia_corporation_id?: number;
/**
 * name string
 */
  name: string;
/**
 * size_factor number
 */
  size_factor: number;
/**
 * solar_system_id integer
 */
  solar_system_id?: number;
/**
 * station_count integer
 */
  station_count: number;
/**
 * station_system_count integer
 */
  station_system_count: number;
  [k: string]: unknown | undefined;
}
