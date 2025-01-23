/**
* ESI endpoint: /characters/{character_id}/search/
*/
/**
 * agent array
 *
 * @maxItems 500
 */
/**
 * alliance array
 *
 * @maxItems 500
 */
/**
 * character array
 *
 * @maxItems 500
 */
/**
 * constellation array
 *
 * @maxItems 500
 */
/**
 * corporation array
 *
 * @maxItems 500
 */
/**
 * faction array
 *
 * @maxItems 500
 */
/**
 * inventory_type array
 *
 * @maxItems 500
 */
/**
 * region array
 *
 * @maxItems 500
 */
/**
 * solar_system array
 *
 * @maxItems 500
 */
/**
 * station array
 *
 * @maxItems 500
 */
/**
 * structure array
 *
 * @maxItems 500
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdSearchOk {
/**
 * agent integer
 */
  agent?: number[];
/**
 * alliance integer
 */
  alliance?: number[];
/**
 * character integer
 */
  character?: number[];
/**
 * constellation integer
 */
  constellation?: number[];
/**
 * corporation integer
 */
  corporation?: number[];
/**
 * faction integer
 */
  faction?: number[];
/**
 * inventory_type integer
 */
  inventory_type?: number[];
/**
 * region integer
 */
  region?: number[];
/**
 * solar_system integer
 */
  solar_system?: number[];
/**
 * station integer
 */
  station?: number[];
/**
 * structure integer
 */
  structure?: number[];
  [k: string]: unknown | undefined;
}
