/**
 * ESI endpoint: /universe/bloodlines/
 */

/**
 * bloodline_id integer
 */
type GetUniverseBloodlinesBloodlineId = number;
/**
 * charisma integer
 */
type GetUniverseBloodlinesCharisma = number;
/**
 * corporation_id integer
 */
type GetUniverseBloodlinesCorporationId = number;
/**
 * description string
 */
type GetUniverseBloodlinesDescription = string;
/**
 * intelligence integer
 */
type GetUniverseBloodlinesIntelligence = number;
/**
 * memory integer
 */
type GetUniverseBloodlinesMemory = number;
/**
 * name string
 */
type GetUniverseBloodlinesName = string;
/**
 * perception integer
 */
type GetUniverseBloodlinesPerception = number;
/**
 * race_id integer
 */
type GetUniverseBloodlinesRaceId = number;
/**
 * ship_type_id integer
 */
type GetUniverseBloodlinesShipTypeId = number;
/**
 * willpower integer
 */
type GetUniverseBloodlinesWillpower = number;
/**
 * 200 ok array
 *
 * @maxItems 100
 */
type GetUniverseBloodlinesOk = GetUniverseBloodlines_200Ok[];

/**
 * 200 ok object
 */
interface GetUniverseBloodlines_200Ok {
  bloodline_id: GetUniverseBloodlinesBloodlineId;
  charisma: GetUniverseBloodlinesCharisma;
  corporation_id: GetUniverseBloodlinesCorporationId;
  description: GetUniverseBloodlinesDescription;
  intelligence: GetUniverseBloodlinesIntelligence;
  memory: GetUniverseBloodlinesMemory;
  name: GetUniverseBloodlinesName;
  perception: GetUniverseBloodlinesPerception;
  race_id: GetUniverseBloodlinesRaceId;
  ship_type_id: GetUniverseBloodlinesShipTypeId;
  willpower: GetUniverseBloodlinesWillpower;
  [k: string]: unknown | undefined;
}
