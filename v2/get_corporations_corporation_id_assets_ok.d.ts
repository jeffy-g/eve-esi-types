/*!
 * ESI endpoint: get:/corporations/{corporation_id}/assets/
 */
/**
 * location_flag string
 */
type GetCorporationsCorporationIdAssetsLocationFlag =
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
  | "CorporationGoalDeliveries"
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
  | "InfrastructureHangar"
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
  | "MobileDepotHold"
  | "MoonMaterialBay"
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
 * location_type string
 */
type GetCorporationsCorporationIdAssetsLocationType = "station" | "solar_system" | "item" | "other";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdAssetsOk = GetCorporationsCorporationIdAssets_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdAssets_200Ok {
  /**
   * is_blueprint_copy boolean
   */
  is_blueprint_copy?: boolean;
  /**
   * is_singleton boolean
   */
  is_singleton: boolean;
  /**
   * item_id integer
   */
  item_id: number;
  location_flag: GetCorporationsCorporationIdAssetsLocationFlag;
  /**
   * location_id integer
   */
  location_id: number;
  location_type: GetCorporationsCorporationIdAssetsLocationType;
  /**
   * quantity integer
   */
  quantity: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
