/**
 * ESI endpoint: /characters/{character_id}/ship/
 */

/**
 * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
 */
type GetCharactersCharacterIdShipShipItemId = number;
/**
 * ship_name string
 */
type GetCharactersCharacterIdShipShipName = string;
/**
 * ship_type_id integer
 */
type GetCharactersCharacterIdShipShipTypeId = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdShipOk {
  ship_item_id: GetCharactersCharacterIdShipShipItemId;
  ship_name: GetCharactersCharacterIdShipShipName;
  ship_type_id: GetCharactersCharacterIdShipShipTypeId;
  [k: string]: unknown | undefined;
}
