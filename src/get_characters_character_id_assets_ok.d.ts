/**
 * ESI endpoint: /characters/{character_id}/assets/
 */

/**
 * is_blueprint_copy boolean
 */
type GetCharactersCharacterIdAssetsIsBlueprintCopy = boolean;
/**
 * is_singleton boolean
 */
type GetCharactersCharacterIdAssetsIsSingleton = boolean;
/**
 * item_id integer
 */
type GetCharactersCharacterIdAssetsItemId = number;
/**
 * location_flag string
 */
type GetCharactersCharacterIdAssetsLocationFlag =
  | "AssetSafety"
  | "AutoFit"
  | "BoosterBay"
  | "Cargo"
  | "CorporationGoalDeliveries"
  | "CorpseBay"
  | "Deliveries"
  | "DroneBay"
  | "FighterBay"
  | "FighterTube0"
  | "FighterTube1"
  | "FighterTube2"
  | "FighterTube3"
  | "FighterTube4"
  | "FleetHangar"
  | "FrigateEscapeBay"
  | "Hangar"
  | "HangarAll"
  | "HiSlot0"
  | "HiSlot1"
  | "HiSlot2"
  | "HiSlot3"
  | "HiSlot4"
  | "HiSlot5"
  | "HiSlot6"
  | "HiSlot7"
  | "HiddenModifiers"
  | "Implant"
  | "InfrastructureHangar"
  | "LoSlot0"
  | "LoSlot1"
  | "LoSlot2"
  | "LoSlot3"
  | "LoSlot4"
  | "LoSlot5"
  | "LoSlot6"
  | "LoSlot7"
  | "Locked"
  | "MedSlot0"
  | "MedSlot1"
  | "MedSlot2"
  | "MedSlot3"
  | "MedSlot4"
  | "MedSlot5"
  | "MedSlot6"
  | "MedSlot7"
  | "MobileDepotHold"
  | "MoonMaterialBay"
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
  | "Skill"
  | "SpecializedAmmoHold"
  | "SpecializedAsteroidHold"
  | "SpecializedCommandCenterHold"
  | "SpecializedFuelBay"
  | "SpecializedGasHold"
  | "SpecializedIceHold"
  | "SpecializedIndustrialShipHold"
  | "SpecializedLargeShipHold"
  | "SpecializedMaterialBay"
  | "SpecializedMediumShipHold"
  | "SpecializedMineralHold"
  | "SpecializedOreHold"
  | "SpecializedPlanetaryCommoditiesHold"
  | "SpecializedSalvageHold"
  | "SpecializedShipHold"
  | "SpecializedSmallShipHold"
  | "StructureDeedBay"
  | "SubSystemBay"
  | "SubSystemSlot0"
  | "SubSystemSlot1"
  | "SubSystemSlot2"
  | "SubSystemSlot3"
  | "SubSystemSlot4"
  | "SubSystemSlot5"
  | "SubSystemSlot6"
  | "SubSystemSlot7"
  | "Unlocked"
  | "Wardrobe";
/**
 * location_id integer
 */
type GetCharactersCharacterIdAssetsLocationId = number;
/**
 * location_type string
 */
type GetCharactersCharacterIdAssetsLocationType = "station" | "solar_system" | "item" | "other";
/**
 * quantity integer
 */
type GetCharactersCharacterIdAssetsQuantity = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdAssetsTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdAssetsOk = GetCharactersCharacterIdAssets_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdAssets_200Ok {
  is_blueprint_copy?: GetCharactersCharacterIdAssetsIsBlueprintCopy;
  is_singleton: GetCharactersCharacterIdAssetsIsSingleton;
  item_id: GetCharactersCharacterIdAssetsItemId;
  location_flag: GetCharactersCharacterIdAssetsLocationFlag;
  location_id: GetCharactersCharacterIdAssetsLocationId;
  location_type: GetCharactersCharacterIdAssetsLocationType;
  quantity: GetCharactersCharacterIdAssetsQuantity;
  type_id: GetCharactersCharacterIdAssetsTypeId;
  [k: string]: unknown | undefined;
}
