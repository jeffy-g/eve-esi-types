/*!
 * ESI endpoint: get:/corporations/{corporation_id}/blueprints/
 */
/**
 * Type of the location_id
 */
type GetCorporationsCorporationIdBlueprintsLocationFlag =
  | "AssetSafety"
  | "AutoFit"
  | "Bonus"
  | "Booster"
  | "BoosterBay"
  | "Capsule"
  | "Cargo"
  | "CorpDeliveries"
  | "CorpSAG1"
  | "CorpSAG2"
  | "CorpSAG3"
  | "CorpSAG4"
  | "CorpSAG5"
  | "CorpSAG6"
  | "CorpSAG7"
  | "CrateLoot"
  | "Deliveries"
  | "DroneBay"
  | "DustBattle"
  | "DustDatabank"
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
  | "Impounded"
  | "JunkyardReprocessed"
  | "JunkyardTrashed"
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
  | "OfficeFolder"
  | "Pilot"
  | "PlanetSurface"
  | "QuafeBay"
  | "QuantumCoreRoom"
  | "Reward"
  | "RigSlot0"
  | "RigSlot1"
  | "RigSlot2"
  | "RigSlot3"
  | "RigSlot4"
  | "RigSlot5"
  | "RigSlot6"
  | "RigSlot7"
  | "SecondaryStorage"
  | "ServiceSlot0"
  | "ServiceSlot1"
  | "ServiceSlot2"
  | "ServiceSlot3"
  | "ServiceSlot4"
  | "ServiceSlot5"
  | "ServiceSlot6"
  | "ServiceSlot7"
  | "ShipHangar"
  | "ShipOffline"
  | "Skill"
  | "SkillInTraining"
  | "SpecializedAmmoHold"
  | "SpecializedCommandCenterHold"
  | "SpecializedFuelBay"
  | "SpecializedGasHold"
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
  | "StructureActive"
  | "StructureFuel"
  | "StructureInactive"
  | "StructureOffline"
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
  | "Wallet"
  | "Wardrobe";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdBlueprintsOk = GetCorporationsCorporationIdBlueprints_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdBlueprints_200Ok {
  /**
   * Unique ID for this item.
   */
  item_id: number;
  location_flag: GetCorporationsCorporationIdBlueprintsLocationFlag;
  /**
   * References a station, a ship or an item_id if this blueprint is located within a container.
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
