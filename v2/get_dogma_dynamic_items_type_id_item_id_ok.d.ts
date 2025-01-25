/*!
 * ESI endpoint: /dogma/dynamic/items/{type_id}/{item_id}/
 */
/**
 * dogma_attributes array
 *
 * @maxItems 1000
 */
type GetDogmaDynamicItemsTypeIdItemIdDogmaAttributes = GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute[];
/**
 * dogma_effects array
 *
 * @maxItems 1000
 */
type GetDogmaDynamicItemsTypeIdItemIdDogmaEffects = GetDogmaDynamicItemsTypeIdItemIdDogmaEffect[];

/**
 * 200 ok object
 */
interface GetDogmaDynamicItemsTypeIdItemIdOk {
  /**
   * The ID of the character who created the item
   */
  created_by: number;
  dogma_attributes: GetDogmaDynamicItemsTypeIdItemIdDogmaAttributes;
  dogma_effects: GetDogmaDynamicItemsTypeIdItemIdDogmaEffects;
  mutator_type_id: number;
  source_type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * dogma_attribute object
 */
interface GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute {
  /**
   * attribute_id integer
   */
  attribute_id: number;
  /**
   * value number
   */
  value: number;
  [k: string]: unknown | undefined;
}
/**
 * dogma_effect object
 */
interface GetDogmaDynamicItemsTypeIdItemIdDogmaEffect {
  /**
   * effect_id integer
   */
  effect_id: number;
  /**
   * is_default boolean
   */
  is_default: boolean;
  [k: string]: unknown | undefined;
}
