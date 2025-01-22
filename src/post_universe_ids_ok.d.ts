/**
 * ESI endpoint: /universe/ids/
 */

/**
 * id integer
 */
type PostUniverseIdsId = number;
/**
 * name string
 */
type PostUniverseIdsName = string;
/**
 * agents array
 *
 * @maxItems 500
 */
type PostUniverseIdsAgents = PostUniverseIdsAgent[];
/**
 * id integer
 */
type PostUniverseIdsAllianceId = number;
/**
 * name string
 */
type PostUniverseIdsAllianceName = string;
/**
 * alliances array
 *
 * @maxItems 500
 */
type PostUniverseIdsAlliances = PostUniverseIdsAlliance[];
/**
 * id integer
 */
type PostUniverseIdsCharacterId = number;
/**
 * name string
 */
type PostUniverseIdsCharacterName = string;
/**
 * characters array
 *
 * @maxItems 500
 */
type PostUniverseIdsCharacters = PostUniverseIdsCharacter[];
/**
 * id integer
 */
type PostUniverseIdsConstellationId = number;
/**
 * name string
 */
type PostUniverseIdsConstellationName = string;
/**
 * constellations array
 *
 * @maxItems 500
 */
type PostUniverseIdsConstellations = PostUniverseIdsConstellation[];
/**
 * id integer
 */
type PostUniverseIdsCorporationId = number;
/**
 * name string
 */
type PostUniverseIdsCorporationName = string;
/**
 * corporations array
 *
 * @maxItems 500
 */
type PostUniverseIdsCorporations = PostUniverseIdsCorporation[];
/**
 * id integer
 */
type PostUniverseIdsFactionId = number;
/**
 * name string
 */
type PostUniverseIdsFactionName = string;
/**
 * factions array
 *
 * @maxItems 500
 */
type PostUniverseIdsFactions = PostUniverseIdsFaction[];
/**
 * id integer
 */
type PostUniverseIdsInventoryTypeId = number;
/**
 * name string
 */
type PostUniverseIdsInventoryTypeName = string;
/**
 * inventory_types array
 *
 * @maxItems 500
 */
type PostUniverseIdsInventoryTypes = PostUniverseIdsInventoryType[];
/**
 * id integer
 */
type PostUniverseIdsRegionId = number;
/**
 * name string
 */
type PostUniverseIdsRegionName = string;
/**
 * regions array
 *
 * @maxItems 500
 */
type PostUniverseIdsRegions = PostUniverseIdsRegion[];
/**
 * id integer
 */
type PostUniverseIdsStationId = number;
/**
 * name string
 */
type PostUniverseIdsStationName = string;
/**
 * stations array
 *
 * @maxItems 500
 */
type PostUniverseIdsStations = PostUniverseIdsStation[];
/**
 * id integer
 */
type PostUniverseIdsSystemId = number;
/**
 * name string
 */
type PostUniverseIdsSystemName = string;
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
  id?: PostUniverseIdsId;
  name?: PostUniverseIdsName;
  [k: string]: unknown | undefined;
}
/**
 * alliance object
 */
interface PostUniverseIdsAlliance {
  id?: PostUniverseIdsAllianceId;
  name?: PostUniverseIdsAllianceName;
  [k: string]: unknown | undefined;
}
/**
 * character object
 */
interface PostUniverseIdsCharacter {
  id?: PostUniverseIdsCharacterId;
  name?: PostUniverseIdsCharacterName;
  [k: string]: unknown | undefined;
}
/**
 * constellation object
 */
interface PostUniverseIdsConstellation {
  id?: PostUniverseIdsConstellationId;
  name?: PostUniverseIdsConstellationName;
  [k: string]: unknown | undefined;
}
/**
 * corporation object
 */
interface PostUniverseIdsCorporation {
  id?: PostUniverseIdsCorporationId;
  name?: PostUniverseIdsCorporationName;
  [k: string]: unknown | undefined;
}
/**
 * faction object
 */
interface PostUniverseIdsFaction {
  id?: PostUniverseIdsFactionId;
  name?: PostUniverseIdsFactionName;
  [k: string]: unknown | undefined;
}
/**
 * inventory_type object
 */
interface PostUniverseIdsInventoryType {
  id?: PostUniverseIdsInventoryTypeId;
  name?: PostUniverseIdsInventoryTypeName;
  [k: string]: unknown | undefined;
}
/**
 * region object
 */
interface PostUniverseIdsRegion {
  id?: PostUniverseIdsRegionId;
  name?: PostUniverseIdsRegionName;
  [k: string]: unknown | undefined;
}
/**
 * station object
 */
interface PostUniverseIdsStation {
  id?: PostUniverseIdsStationId;
  name?: PostUniverseIdsStationName;
  [k: string]: unknown | undefined;
}
/**
 * system object
 */
interface PostUniverseIdsSystem {
  id?: PostUniverseIdsSystemId;
  name?: PostUniverseIdsSystemName;
  [k: string]: unknown | undefined;
}
