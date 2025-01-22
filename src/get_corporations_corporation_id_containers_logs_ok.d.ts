/**
 * ESI endpoint: /corporations/{corporation_id}/containers/logs/
 */

/**
 * action string
 */
type GetCorporationsCorporationIdContainersLogsAction =
  | "add"
  | "assemble"
  | "configure"
  | "enter_password"
  | "lock"
  | "move"
  | "repackage"
  | "set_name"
  | "set_password"
  | "unlock";
/**
 * ID of the character who performed the action.
 */
type GetCorporationsCorporationIdContainersLogsCharacterId = number;
/**
 * ID of the container
 */
type GetCorporationsCorporationIdContainersLogsContainerId = number;
/**
 * Type ID of the container
 */
type GetCorporationsCorporationIdContainersLogsContainerTypeId = number;
/**
 * location_flag string
 */
type GetCorporationsCorporationIdContainersLogsLocationFlag =
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
 * location_id integer
 */
type GetCorporationsCorporationIdContainersLogsLocationId = number;
/**
 * Timestamp when this log was created
 */
type GetCorporationsCorporationIdContainersLogsLoggedAt = string;
/**
 * new_config_bitmask integer
 */
type GetCorporationsCorporationIdContainersLogsNewConfigBitmask = number;
/**
 * old_config_bitmask integer
 */
type GetCorporationsCorporationIdContainersLogsOldConfigBitmask = number;
/**
 * Type of password set if action is of type SetPassword or EnterPassword
 */
type GetCorporationsCorporationIdContainersLogsPasswordType = "config" | "general";
/**
 * Quantity of the item being acted upon
 */
type GetCorporationsCorporationIdContainersLogsQuantity = number;
/**
 * Type ID of the item being acted upon
 */
type GetCorporationsCorporationIdContainersLogsTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdContainersLogsOk = GetCorporationsCorporationIdContainersLogs_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdContainersLogs_200Ok {
  action: GetCorporationsCorporationIdContainersLogsAction;
  character_id: GetCorporationsCorporationIdContainersLogsCharacterId;
  container_id: GetCorporationsCorporationIdContainersLogsContainerId;
  container_type_id: GetCorporationsCorporationIdContainersLogsContainerTypeId;
  location_flag: GetCorporationsCorporationIdContainersLogsLocationFlag;
  location_id: GetCorporationsCorporationIdContainersLogsLocationId;
  logged_at: GetCorporationsCorporationIdContainersLogsLoggedAt;
  new_config_bitmask?: GetCorporationsCorporationIdContainersLogsNewConfigBitmask;
  old_config_bitmask?: GetCorporationsCorporationIdContainersLogsOldConfigBitmask;
  password_type?: GetCorporationsCorporationIdContainersLogsPasswordType;
  quantity?: GetCorporationsCorporationIdContainersLogsQuantity;
  type_id?: GetCorporationsCorporationIdContainersLogsTypeId;
  [k: string]: unknown | undefined;
}
