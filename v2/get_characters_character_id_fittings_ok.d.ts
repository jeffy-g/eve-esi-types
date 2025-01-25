/*!
 * ESI endpoint: /characters/{character_id}/fittings/
 */
/**
 * flag string
 */
type GetCharactersCharacterIdFittingsFlag =
  | "Cargo"
  | "DroneBay"
  | "FighterBay"
  | "HiSlot0"
  | "HiSlot1"
  | "HiSlot2"
  | "HiSlot3"
  | "HiSlot4"
  | "HiSlot5"
  | "HiSlot6"
  | "HiSlot7"
  | "Invalid"
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
  | "RigSlot0"
  | "RigSlot1"
  | "RigSlot2"
  | "ServiceSlot0"
  | "ServiceSlot1"
  | "ServiceSlot2"
  | "ServiceSlot3"
  | "ServiceSlot4"
  | "ServiceSlot5"
  | "ServiceSlot6"
  | "ServiceSlot7"
  | "SubSystemSlot0"
  | "SubSystemSlot1"
  | "SubSystemSlot2"
  | "SubSystemSlot3";
/**
 * items array
 *
 * @maxItems 512
 */
type GetCharactersCharacterIdFittingsItems = GetCharactersCharacterIdFittingsItem[];
/**
 * 200 ok array
 *
 * @maxItems 512
 */
type GetCharactersCharacterIdFittingsOk = GetCharactersCharacterIdFittings_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFittings_200Ok {
  /**
   * description string
   */
  description: string;
  /**
   * fitting_id integer
   */
  fitting_id: number;
  items: GetCharactersCharacterIdFittingsItems;
  /**
   * name string
   */
  name: string;
  ship_type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface GetCharactersCharacterIdFittingsItem {
  flag: GetCharactersCharacterIdFittingsFlag;
  /**
   * quantity integer
   */
  quantity: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
