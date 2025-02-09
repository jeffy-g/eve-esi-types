/*!
 * ESI endpoint: get:/universe/types/{type_id}/
 */
/**
 * dogma_attributes array
 *
 * @maxItems 1000
 */
type GetUniverseTypesTypeIdDogmaAttributes = GetUniverseTypesTypeIdDogmaAttribute[];
/**
 * dogma_effects array
 *
 * @maxItems 1000
 */
type GetUniverseTypesTypeIdDogmaEffects = GetUniverseTypesTypeIdDogmaEffect[];

/**
 * 200 ok object
 */
interface GetUniverseTypesTypeIdOk {
  /**
   * capacity number
   */
  capacity?: number;
  /**
   * description string
   */
  description: string;
  dogma_attributes?: GetUniverseTypesTypeIdDogmaAttributes;
  dogma_effects?: GetUniverseTypesTypeIdDogmaEffects;
  /**
   * graphic_id integer
   */
  graphic_id?: number;
  /**
   * group_id integer
   */
  group_id: number;
  /**
   * icon_id integer
   */
  icon_id?: number;
  /**
   * This only exists for types that can be put on the market
   */
  market_group_id?: number;
  /**
   * mass number
   */
  mass?: number;
  /**
   * name string
   */
  name: string;
  /**
   * packaged_volume number
   */
  packaged_volume?: number;
  /**
   * portion_size integer
   */
  portion_size?: number;
  /**
   * published boolean
   */
  published: boolean;
  /**
   * radius number
   */
  radius?: number;
  type_id: number;
  /**
   * volume number
   */
  volume?: number;
  [k: string]: unknown | undefined;
}
/**
 * dogma_attribute object
 */
interface GetUniverseTypesTypeIdDogmaAttribute {
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
interface GetUniverseTypesTypeIdDogmaEffect {
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
