/**
* ESI endpoint: /universe/ids/
*/
/**
 * agents array
 *
 * @maxItems 500
 */
type PostUniverseIdsAgents = PostUniverseIdsAgent[];
/**
 * alliances array
 *
 * @maxItems 500
 */
type PostUniverseIdsAlliances = PostUniverseIdsAlliance[];
/**
 * characters array
 *
 * @maxItems 500
 */
type PostUniverseIdsCharacters = PostUniverseIdsCharacter[];
/**
 * constellations array
 *
 * @maxItems 500
 */
type PostUniverseIdsConstellations = PostUniverseIdsConstellation[];
/**
 * corporations array
 *
 * @maxItems 500
 */
type PostUniverseIdsCorporations = PostUniverseIdsCorporation[];
/**
 * factions array
 *
 * @maxItems 500
 */
type PostUniverseIdsFactions = PostUniverseIdsFaction[];
/**
 * inventory_types array
 *
 * @maxItems 500
 */
type PostUniverseIdsInventoryTypes = PostUniverseIdsInventoryType[];
/**
 * regions array
 *
 * @maxItems 500
 */
type PostUniverseIdsRegions = PostUniverseIdsRegion[];
/**
 * stations array
 *
 * @maxItems 500
 */
type PostUniverseIdsStations = PostUniverseIdsStation[];
/**
 * systems array
 *
 * @maxItems 500
 */
type PostUniverseIdsSystems = PostUniverseIdsSystem[];

/**
 * 200 ok object
 */
interface PostUniverseIdsOk {
  agents?: PostUniverseIdsAgents;
  alliances?: PostUniverseIdsAlliances;
  characters?: PostUniverseIdsCharacters;
  constellations?: PostUniverseIdsConstellations;
  corporations?: PostUniverseIdsCorporations;
  factions?: PostUniverseIdsFactions;
  inventory_types?: PostUniverseIdsInventoryTypes;
  regions?: PostUniverseIdsRegions;
  stations?: PostUniverseIdsStations;
  systems?: PostUniverseIdsSystems;
  [k: string]: unknown | undefined;
}
/**
 * agent object
 */
interface PostUniverseIdsAgent {
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
 * alliance object
 */
interface PostUniverseIdsAlliance {
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
 * character object
 */
interface PostUniverseIdsCharacter {
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
 * constellation object
 */
interface PostUniverseIdsConstellation {
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
 * corporation object
 */
interface PostUniverseIdsCorporation {
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
 * faction object
 */
interface PostUniverseIdsFaction {
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
 * inventory_type object
 */
interface PostUniverseIdsInventoryType {
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
 * region object
 */
interface PostUniverseIdsRegion {
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
 * station object
 */
interface PostUniverseIdsStation {
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
 * system object
 */
interface PostUniverseIdsSystem {
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
