/**
 * ESI endpoint: /characters/{character_id}/location/
 */

/**
 * solar_system_id integer
 */
type GetCharactersCharacterIdLocationSolarSystemId = number;
/**
 * station_id integer
 */
type GetCharactersCharacterIdLocationStationId = number;
/**
 * structure_id integer
 */
type GetCharactersCharacterIdLocationStructureId = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdLocationOk {
  solar_system_id: GetCharactersCharacterIdLocationSolarSystemId;
  station_id?: GetCharactersCharacterIdLocationStationId;
  structure_id?: GetCharactersCharacterIdLocationStructureId;
  [k: string]: unknown | undefined;
}
