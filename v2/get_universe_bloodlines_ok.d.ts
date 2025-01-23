/**
* ESI endpoint: /universe/bloodlines/
*/
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
/**
 * bloodline_id integer
 */
  bloodline_id: number;
/**
 * charisma integer
 */
  charisma: number;
/**
 * corporation_id integer
 */
  corporation_id: number;
/**
 * description string
 */
  description: string;
/**
 * intelligence integer
 */
  intelligence: number;
/**
 * memory integer
 */
  memory: number;
/**
 * name string
 */
  name: string;
/**
 * perception integer
 */
  perception: number;
/**
 * race_id integer
 */
  race_id: number;
/**
 * ship_type_id integer
 */
  ship_type_id: number;
/**
 * willpower integer
 */
  willpower: number;
  [k: string]: unknown | undefined;
}
