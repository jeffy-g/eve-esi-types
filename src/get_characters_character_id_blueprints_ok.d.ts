/**
 * ESI endpoint: /characters/{character_id}/blueprints/
 */

/**
 * Unique ID for this item.
 */
type GetCharactersCharacterIdBlueprintsItemId = number;
/**
 * Type of the location_id
 */
type GetCharactersCharacterIdBlueprintsLocationFlag =
  | "AutoFit"
  | "Cargo"
  | "CorpseBay"
  | "DroneBay"
  | "FleetHangar"
  | "Deliveries"
  | "HiddenModifiers"
  | "Hangar"
  | "HangarAll"
  | "LoSlot0"
  | "LoSlot1"
  | "LoSlot2"
  | "LoSlot3"
  | "LoSlot4"
  | "LoSlot5"
  | "LoSlot6"
  | "LoSlot7"
  | "MedSlot0"
  | "MedSlot1"
  | "MedSlot2"
  | "MedSlot3"
  | "MedSlot4"
  | "MedSlot5"
  | "MedSlot6"
  | "MedSlot7"
  | "HiSlot0"
  | "HiSlot1"
  | "HiSlot2"
  | "HiSlot3"
  | "HiSlot4"
  | "HiSlot5"
  | "HiSlot6"
  | "HiSlot7"
  | "AssetSafety"
  | "Locked"
  | "Unlocked"
  | "Implant"
  | "QuafeBay"
  | "RigSlot0"
  | "RigSlot1"
  | "RigSlot2"
  | "RigSlot3"
  | "RigSlot4"
  | "RigSlot5"
  | "RigSlot6"
  | "RigSlot7"
  | "ShipHangar"
  | "SpecializedFuelBay"
  | "SpecializedOreHold"
  | "SpecializedGasHold"
  | "SpecializedMineralHold"
  | "SpecializedSalvageHold"
  | "SpecializedShipHold"
  | "SpecializedSmallShipHold"
  | "SpecializedMediumShipHold"
  | "SpecializedLargeShipHold"
  | "SpecializedIndustrialShipHold"
  | "SpecializedAmmoHold"
  | "SpecializedCommandCenterHold"
  | "SpecializedPlanetaryCommoditiesHold"
  | "SpecializedMaterialBay"
  | "SubSystemSlot0"
  | "SubSystemSlot1"
  | "SubSystemSlot2"
  | "SubSystemSlot3"
  | "SubSystemSlot4"
  | "SubSystemSlot5"
  | "SubSystemSlot6"
  | "SubSystemSlot7"
  | "FighterBay"
  | "FighterTube0"
  | "FighterTube1"
  | "FighterTube2"
  | "FighterTube3"
  | "FighterTube4"
  | "Module";
/**
 * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
 */
type GetCharactersCharacterIdBlueprintsLocationId = number;
/**
 * Material Efficiency Level of the blueprint.
 */
type GetCharactersCharacterIdBlueprintsMaterialEfficiency = number;
/**
 * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
 */
type GetCharactersCharacterIdBlueprintsQuantity = number;
/**
 * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
 */
type GetCharactersCharacterIdBlueprintsRuns = number;
/**
 * Time Efficiency Level of the blueprint.
 */
type GetCharactersCharacterIdBlueprintsTimeEfficiency = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdBlueprintsTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdBlueprintsOk = GetCharactersCharacterIdBlueprints_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdBlueprints_200Ok {
  item_id: GetCharactersCharacterIdBlueprintsItemId;
  location_flag: GetCharactersCharacterIdBlueprintsLocationFlag;
  location_id: GetCharactersCharacterIdBlueprintsLocationId;
  material_efficiency: GetCharactersCharacterIdBlueprintsMaterialEfficiency;
  quantity: GetCharactersCharacterIdBlueprintsQuantity;
  runs: GetCharactersCharacterIdBlueprintsRuns;
  time_efficiency: GetCharactersCharacterIdBlueprintsTimeEfficiency;
  type_id: GetCharactersCharacterIdBlueprintsTypeId;
  [k: string]: unknown | undefined;
}
