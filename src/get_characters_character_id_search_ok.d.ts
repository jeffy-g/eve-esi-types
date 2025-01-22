/**
 * ESI endpoint: /characters/{character_id}/search/
 */

/**
 * agent integer
 */
type GetCharactersCharacterIdSearchAgentAgent = number;
/**
 * agent array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchAgent = GetCharactersCharacterIdSearchAgentAgent[];
/**
 * alliance integer
 */
type GetCharactersCharacterIdSearchAllianceAlliance = number;
/**
 * alliance array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchAlliance = GetCharactersCharacterIdSearchAllianceAlliance[];
/**
 * character integer
 */
type GetCharactersCharacterIdSearchCharacterCharacter = number;
/**
 * character array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchCharacter = GetCharactersCharacterIdSearchCharacterCharacter[];
/**
 * constellation integer
 */
type GetCharactersCharacterIdSearchConstellationConstellation = number;
/**
 * constellation array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchConstellation = GetCharactersCharacterIdSearchConstellationConstellation[];
/**
 * corporation integer
 */
type GetCharactersCharacterIdSearchCorporationCorporation = number;
/**
 * corporation array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchCorporation = GetCharactersCharacterIdSearchCorporationCorporation[];
/**
 * faction integer
 */
type GetCharactersCharacterIdSearchFactionFaction = number;
/**
 * faction array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchFaction = GetCharactersCharacterIdSearchFactionFaction[];
/**
 * inventory_type integer
 */
type GetCharactersCharacterIdSearchInventoryTypeInventoryType = number;
/**
 * inventory_type array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchInventoryType = GetCharactersCharacterIdSearchInventoryTypeInventoryType[];
/**
 * region integer
 */
type GetCharactersCharacterIdSearchRegionRegion = number;
/**
 * region array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchRegion = GetCharactersCharacterIdSearchRegionRegion[];
/**
 * solar_system integer
 */
type GetCharactersCharacterIdSearchSolarSystemSolarSystem = number;
/**
 * solar_system array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchSolarSystem = GetCharactersCharacterIdSearchSolarSystemSolarSystem[];
/**
 * station integer
 */
type GetCharactersCharacterIdSearchStationStation = number;
/**
 * station array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchStation = GetCharactersCharacterIdSearchStationStation[];
/**
 * structure integer
 */
type GetCharactersCharacterIdSearchStructureStructure = number;
/**
 * structure array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdSearchStructure = GetCharactersCharacterIdSearchStructureStructure[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdSearchOk {
  agent?: GetCharactersCharacterIdSearchAgent;
  alliance?: GetCharactersCharacterIdSearchAlliance;
  character?: GetCharactersCharacterIdSearchCharacter;
  constellation?: GetCharactersCharacterIdSearchConstellation;
  corporation?: GetCharactersCharacterIdSearchCorporation;
  faction?: GetCharactersCharacterIdSearchFaction;
  inventory_type?: GetCharactersCharacterIdSearchInventoryType;
  region?: GetCharactersCharacterIdSearchRegion;
  solar_system?: GetCharactersCharacterIdSearchSolarSystem;
  station?: GetCharactersCharacterIdSearchStation;
  structure?: GetCharactersCharacterIdSearchStructure;
  [k: string]: unknown | undefined;
}
