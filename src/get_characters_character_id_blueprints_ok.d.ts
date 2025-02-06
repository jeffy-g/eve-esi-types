/*!
 * ESI endpoint: /characters/{character_id}/blueprints/
 */
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
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdBlueprintsOk = GetCharactersCharacterIdBlueprints_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdBlueprints_200Ok {
  /**
   * Unique ID for this item.
   */
  item_id: number;
  location_flag: GetCharactersCharacterIdBlueprintsLocationFlag;
  /**
   * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
   */
  location_id: number;
  /**
   * Material Efficiency Level of the blueprint.
   */
  material_efficiency: number;
  /**
   * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   */
  quantity: number;
  /**
   * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   */
  runs: number;
  /**
   * Time Efficiency Level of the blueprint.
   */
  time_efficiency: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
