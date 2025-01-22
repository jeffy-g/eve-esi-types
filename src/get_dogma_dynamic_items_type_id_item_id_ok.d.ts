/**
 * ESI endpoint: /dogma/dynamic/items/{type_id}/{item_id}/
 */

/**
 * The ID of the character who created the item
 */
type GetDogmaDynamicItemsTypeIdItemIdCreatedBy = number;
/**
 * attribute_id integer
 */
type GetDogmaDynamicItemsTypeIdItemIdAttributeId = number;
/**
 * value number
 */
type GetDogmaDynamicItemsTypeIdItemIdValue = number;
/**
 * dogma_attributes array
 *
 * @maxItems 1000
 */
type GetDogmaDynamicItemsTypeIdItemIdDogmaAttributes = GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute[];
/**
 * effect_id integer
 */
type GetDogmaDynamicItemsTypeIdItemIdEffectId = number;
/**
 * is_default boolean
 */
type GetDogmaDynamicItemsTypeIdItemIdIsDefault = boolean;
/**
 * dogma_effects array
 *
 * @maxItems 1000
 */
type GetDogmaDynamicItemsTypeIdItemIdDogmaEffects = GetDogmaDynamicItemsTypeIdItemIdDogmaEffect[];
/**
 * The type ID of the mutator used to generate the dynamic item.
 */
type GetDogmaDynamicItemsTypeIdItemIdMutatorTypeId = number;
/**
 * The type ID of the source item the mutator was applied to create the dynamic item.
 */
type GetDogmaDynamicItemsTypeIdItemIdSourceTypeId = number;

/**
 * 200 ok object
 */
interface GetDogmaDynamicItemsTypeIdItemIdOk {
  created_by: GetDogmaDynamicItemsTypeIdItemIdCreatedBy;
  dogma_attributes: GetDogmaDynamicItemsTypeIdItemIdDogmaAttributes;
  dogma_effects: GetDogmaDynamicItemsTypeIdItemIdDogmaEffects;
  mutator_type_id: GetDogmaDynamicItemsTypeIdItemIdMutatorTypeId;
  source_type_id: GetDogmaDynamicItemsTypeIdItemIdSourceTypeId;
  [k: string]: unknown | undefined;
}
/**
 * dogma_attribute object
 */
interface GetDogmaDynamicItemsTypeIdItemIdDogmaAttribute {
  attribute_id: GetDogmaDynamicItemsTypeIdItemIdAttributeId;
  value: GetDogmaDynamicItemsTypeIdItemIdValue;
  [k: string]: unknown | undefined;
}
/**
 * dogma_effect object
 */
interface GetDogmaDynamicItemsTypeIdItemIdDogmaEffect {
  effect_id: GetDogmaDynamicItemsTypeIdItemIdEffectId;
  is_default: GetDogmaDynamicItemsTypeIdItemIdIsDefault;
  [k: string]: unknown | undefined;
}
