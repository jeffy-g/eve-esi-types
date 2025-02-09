/*!
 * ESI endpoint: get:/characters/{character_id}/search/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdSearchOk {
  /**
   * agent array
   *
   * @maxItems 500
   */
  agent?: number[];
  /**
   * alliance array
   *
   * @maxItems 500
   */
  alliance?: number[];
  /**
   * character array
   *
   * @maxItems 500
   */
  character?: number[];
  /**
   * constellation array
   *
   * @maxItems 500
   */
  constellation?: number[];
  /**
   * corporation array
   *
   * @maxItems 500
   */
  corporation?: number[];
  /**
   * faction array
   *
   * @maxItems 500
   */
  faction?: number[];
  inventory_type?: number[];
  /**
   * region array
   *
   * @maxItems 500
   */
  region?: number[];
  /**
   * solar_system array
   *
   * @maxItems 500
   */
  solar_system?: number[];
  /**
   * station array
   *
   * @maxItems 500
   */
  station?: number[];
  /**
   * structure array
   *
   * @maxItems 500
   */
  structure?: number[];
  [k: string]: unknown | undefined;
}
