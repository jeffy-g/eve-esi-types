/**
* ESI endpoint: /characters/{character_id}/location/
*/

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdLocationOk {
/**
 * solar_system_id integer
 */
  solar_system_id: number;
/**
 * station_id integer
 */
  station_id?: number;
/**
 * structure_id integer
 */
  structure_id?: number;
  [k: string]: unknown | undefined;
}
