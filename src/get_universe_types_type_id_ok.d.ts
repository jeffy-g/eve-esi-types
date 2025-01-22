/**
 * ESI endpoint: /universe/types/{type_id}/
 */

/**
 * capacity number
 */
type GetUniverseTypesTypeIdCapacity = number;
/**
 * description string
 */
type GetUniverseTypesTypeIdDescription = string;
/**
 * attribute_id integer
 */
type GetUniverseTypesTypeIdAttributeId = number;
/**
 * value number
 */
type GetUniverseTypesTypeIdValue = number;
/**
 * dogma_attributes array
 *
 * @maxItems 1000
 */
type GetUniverseTypesTypeIdDogmaAttributes = GetUniverseTypesTypeIdDogmaAttribute[];
/**
 * effect_id integer
 */
type GetUniverseTypesTypeIdEffectId = number;
/**
 * is_default boolean
 */
type GetUniverseTypesTypeIdIsDefault = boolean;
/**
 * dogma_effects array
 *
 * @maxItems 1000
 */
type GetUniverseTypesTypeIdDogmaEffects = GetUniverseTypesTypeIdDogmaEffect[];
/**
 * graphic_id integer
 */
type GetUniverseTypesTypeIdGraphicId = number;
/**
 * group_id integer
 */
type GetUniverseTypesTypeIdGroupId = number;
/**
 * icon_id integer
 */
type GetUniverseTypesTypeIdIconId = number;
/**
 * This only exists for types that can be put on the market
 */
type GetUniverseTypesTypeIdMarketGroupId = number;
/**
 * mass number
 */
type GetUniverseTypesTypeIdMass = number;
/**
 * name string
 */
type GetUniverseTypesTypeIdName = string;
/**
 * packaged_volume number
 */
type GetUniverseTypesTypeIdPackagedVolume = number;
/**
 * portion_size integer
 */
type GetUniverseTypesTypeIdPortionSize = number;
/**
 * published boolean
 */
type GetUniverseTypesTypeIdPublished = boolean;
/**
 * radius number
 */
type GetUniverseTypesTypeIdRadius = number;
/**
 * type_id integer
 */
type GetUniverseTypesTypeIdTypeId = number;
/**
 * volume number
 */
type GetUniverseTypesTypeIdVolume = number;

/**
 * 200 ok object
 */
interface GetUniverseTypesTypeIdOk {
  capacity?: GetUniverseTypesTypeIdCapacity;
  description: GetUniverseTypesTypeIdDescription;
  dogma_attributes?: GetUniverseTypesTypeIdDogmaAttributes;
  dogma_effects?: GetUniverseTypesTypeIdDogmaEffects;
  graphic_id?: GetUniverseTypesTypeIdGraphicId;
  group_id: GetUniverseTypesTypeIdGroupId;
  icon_id?: GetUniverseTypesTypeIdIconId;
  market_group_id?: GetUniverseTypesTypeIdMarketGroupId;
  mass?: GetUniverseTypesTypeIdMass;
  name: GetUniverseTypesTypeIdName;
  packaged_volume?: GetUniverseTypesTypeIdPackagedVolume;
  portion_size?: GetUniverseTypesTypeIdPortionSize;
  published: GetUniverseTypesTypeIdPublished;
  radius?: GetUniverseTypesTypeIdRadius;
  type_id: GetUniverseTypesTypeIdTypeId;
  volume?: GetUniverseTypesTypeIdVolume;
  [k: string]: unknown | undefined;
}
/**
 * dogma_attribute object
 */
interface GetUniverseTypesTypeIdDogmaAttribute {
  attribute_id: GetUniverseTypesTypeIdAttributeId;
  value: GetUniverseTypesTypeIdValue;
  [k: string]: unknown | undefined;
}
/**
 * dogma_effect object
 */
interface GetUniverseTypesTypeIdDogmaEffect {
  effect_id: GetUniverseTypesTypeIdEffectId;
  is_default: GetUniverseTypesTypeIdIsDefault;
  [k: string]: unknown | undefined;
}
