/*!
 * ESI endpoint: get:/dogma/effects/{effect_id}/
 */
/**
 * modifiers array
 *
 * @maxItems 100
 */
type GetDogmaEffectsEffectIdModifiers = GetDogmaEffectsEffectIdModifier[];

/**
 * 200 ok object
 */
interface GetDogmaEffectsEffectIdOk {
  /**
   * description string
   */
  description?: string;
  /**
   * disallow_auto_repeat boolean
   */
  disallow_auto_repeat?: boolean;
  /**
   * discharge_attribute_id integer
   */
  discharge_attribute_id?: number;
  /**
   * display_name string
   */
  display_name?: string;
  /**
   * duration_attribute_id integer
   */
  duration_attribute_id?: number;
  /**
   * effect_category integer
   */
  effect_category?: number;
  /**
   * effect_id integer
   */
  effect_id: number;
  /**
   * electronic_chance boolean
   */
  electronic_chance?: boolean;
  /**
   * falloff_attribute_id integer
   */
  falloff_attribute_id?: number;
  /**
   * icon_id integer
   */
  icon_id?: number;
  /**
   * is_assistance boolean
   */
  is_assistance?: boolean;
  /**
   * is_offensive boolean
   */
  is_offensive?: boolean;
  /**
   * is_warp_safe boolean
   */
  is_warp_safe?: boolean;
  modifiers?: GetDogmaEffectsEffectIdModifiers;
  /**
   * name string
   */
  name?: string;
  /**
   * post_expression integer
   */
  post_expression?: number;
  /**
   * pre_expression integer
   */
  pre_expression?: number;
  /**
   * published boolean
   */
  published?: boolean;
  /**
   * range_attribute_id integer
   */
  range_attribute_id?: number;
  /**
   * range_chance boolean
   */
  range_chance?: boolean;
  /**
   * tracking_speed_attribute_id integer
   */
  tracking_speed_attribute_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * modifier object
 */
interface GetDogmaEffectsEffectIdModifier {
  /**
   * domain string
   */
  domain?: string;
  /**
   * effect_id integer
   */
  effect_id?: number;
  /**
   * func string
   */
  func: string;
  /**
   * modified_attribute_id integer
   */
  modified_attribute_id?: number;
  /**
   * modifying_attribute_id integer
   */
  modifying_attribute_id?: number;
  /**
   * operator integer
   */
  operator?: number;
  [k: string]: unknown | undefined;
}
