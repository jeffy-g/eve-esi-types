/*!
 * ESI endpoint: post:/universe/ids/
 */

/**
 * shared interface
 */
interface PostUniverseIdsEntity {
    /**
     * id integer
     */
    id?: number;
    /**
     * name string
     */
    name?: string;
    [k: string]: unknown | undefined;
  }
  
  /**
   * 200 ok object
   */
  interface PostUniverseIdsOk {
    /**
     * agents array
     *
     * @maxItems 500
     */
    agents?: PostUniverseIdsEntity[];
    /**
     * alliances array
     *
     * @maxItems 500
     */
    alliances?: PostUniverseIdsEntity[];
    /**
     * characters array
     *
     * @maxItems 500
     */
    characters?: PostUniverseIdsEntity[];
    /**
     * constellations array
     *
     * @maxItems 500
     */
    constellations?: PostUniverseIdsEntity[];
    /**
     * corporations array
     *
     * @maxItems 500
     */
    corporations?: PostUniverseIdsEntity[];
    /**
     * factions array
     *
     * @maxItems 500
     */
    factions?: PostUniverseIdsEntity[];
    /**
     * inventory_types array
     *
     * @maxItems 500
     */
    inventory_types?: PostUniverseIdsEntity[];
    /**
     * regions array
     *
     * @maxItems 500
     */
    regions?: PostUniverseIdsEntity[];
    /**
     * stations array
     *
     * @maxItems 500
     */
    stations?: PostUniverseIdsEntity[];
    /**
     * systems array
     *
     * @maxItems 500
     */
    systems?: PostUniverseIdsEntity[];
    [k: string]: unknown | undefined;
  }
  