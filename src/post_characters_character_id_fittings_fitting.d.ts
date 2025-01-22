/**
 * ESI endpoint: /characters/{character_id}/fittings/
 */

/**
 * description string
 */
type PostCharactersCharacterIdFittingsDescription = string;
/**
 * items array
 *
 * @minItems 1
 * @maxItems 512
 */
type PostCharactersCharacterIdFittingsItems = [
  PostCharactersCharacterIdFittingsItem,
  ...PostCharactersCharacterIdFittingsItem[]
];
/**
 * Fitting location for the item. Entries placed in 'Invalid' will be discarded. If this leaves the fitting with nothing, it will cause an error.
 */
type PostCharactersCharacterIdFittingsFlag =
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
 * quantity integer
 */
type PostCharactersCharacterIdFittingsQuantity = number;
/**
 * type_id integer
 */
type PostCharactersCharacterIdFittingsTypeId = number;
/**
 * name string
 */
type PostCharactersCharacterIdFittingsName = string;
/**
 * ship_type_id integer
 */
type PostCharactersCharacterIdFittingsShipTypeId = number;

/**
 * fitting object
 */
interface PostCharactersCharacterIdFittingsFitting {
  description: PostCharactersCharacterIdFittingsDescription;
  items: PostCharactersCharacterIdFittingsItems;
  name: PostCharactersCharacterIdFittingsName;
  ship_type_id: PostCharactersCharacterIdFittingsShipTypeId;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface PostCharactersCharacterIdFittingsItem {
  flag: PostCharactersCharacterIdFittingsFlag;
  quantity: PostCharactersCharacterIdFittingsQuantity;
  type_id: PostCharactersCharacterIdFittingsTypeId;
  [k: string]: unknown | undefined;
}
