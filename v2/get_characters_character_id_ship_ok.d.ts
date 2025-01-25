/*!
 * ESI endpoint: /characters/{character_id}/ship/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdShipOk {
  /**
   * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
   */
  ship_item_id: number;
  /**
   * ship_name string
   */
  ship_name: string;
  ship_type_id: number;
  [k: string]: unknown | undefined;
}
