/**
 * ESI endpoint: /dogma/effects/{effect_id}/
 */

/**
 * description string
 */
type GetDogmaEffectsEffectIdDescription = string;
/**
 * disallow_auto_repeat boolean
 */
type GetDogmaEffectsEffectIdDisallowAutoRepeat = boolean;
/**
 * discharge_attribute_id integer
 */
type GetDogmaEffectsEffectIdDischargeAttributeId = number;
/**
 * display_name string
 */
type GetDogmaEffectsEffectIdDisplayName = string;
/**
 * duration_attribute_id integer
 */
type GetDogmaEffectsEffectIdDurationAttributeId = number;
/**
 * effect_category integer
 */
type GetDogmaEffectsEffectIdEffectCategory = number;
/**
 * effect_id integer
 */
type GetDogmaEffectsEffectIdEffectId = number;
/**
 * electronic_chance boolean
 */
type GetDogmaEffectsEffectIdElectronicChance = boolean;
/**
 * falloff_attribute_id integer
 */
type GetDogmaEffectsEffectIdFalloffAttributeId = number;
/**
 * icon_id integer
 */
type GetDogmaEffectsEffectIdIconId = number;
/**
 * is_assistance boolean
 */
type GetDogmaEffectsEffectIdIsAssistance = boolean;
/**
 * is_offensive boolean
 */
type GetDogmaEffectsEffectIdIsOffensive = boolean;
/**
 * is_warp_safe boolean
 */
type GetDogmaEffectsEffectIdIsWarpSafe = boolean;
/**
 * domain string
 */
type GetDogmaEffectsEffectIdDomain = string;
/**
 * effect_id integer
 */
type GetDogmaEffectsEffectIdModifierEffectId = number;
/**
 * func string
 */
type GetDogmaEffectsEffectIdFunc = string;
/**
 * modified_attribute_id integer
 */
type GetDogmaEffectsEffectIdModifiedAttributeId = number;
/**
 * modifying_attribute_id integer
 */
type GetDogmaEffectsEffectIdModifyingAttributeId = number;
/**
 * operator integer
 */
type GetDogmaEffectsEffectIdOperator = number;
/**
 * modifiers array
 *
 * @maxItems 100
 */
type GetDogmaEffectsEffectIdModifiers = GetDogmaEffectsEffectIdModifier[];
/**
 * name string
 */
type GetDogmaEffectsEffectIdName = string;
/**
 * post_expression integer
 */
type GetDogmaEffectsEffectIdPostExpression = number;
/**
 * pre_expression integer
 */
type GetDogmaEffectsEffectIdPreExpression = number;
/**
 * published boolean
 */
type GetDogmaEffectsEffectIdPublished = boolean;
/**
 * range_attribute_id integer
 */
type GetDogmaEffectsEffectIdRangeAttributeId = number;
/**
 * range_chance boolean
 */
type GetDogmaEffectsEffectIdRangeChance = boolean;
/**
 * tracking_speed_attribute_id integer
 */
type GetDogmaEffectsEffectIdTrackingSpeedAttributeId = number;

/**
 * 200 ok object
 */
interface GetDogmaEffectsEffectIdOk {
  description?: GetDogmaEffectsEffectIdDescription;
  disallow_auto_repeat?: GetDogmaEffectsEffectIdDisallowAutoRepeat;
  discharge_attribute_id?: GetDogmaEffectsEffectIdDischargeAttributeId;
  display_name?: GetDogmaEffectsEffectIdDisplayName;
  duration_attribute_id?: GetDogmaEffectsEffectIdDurationAttributeId;
  effect_category?: GetDogmaEffectsEffectIdEffectCategory;
  effect_id: GetDogmaEffectsEffectIdEffectId;
  electronic_chance?: GetDogmaEffectsEffectIdElectronicChance;
  falloff_attribute_id?: GetDogmaEffectsEffectIdFalloffAttributeId;
  icon_id?: GetDogmaEffectsEffectIdIconId;
  is_assistance?: GetDogmaEffectsEffectIdIsAssistance;
  is_offensive?: GetDogmaEffectsEffectIdIsOffensive;
  is_warp_safe?: GetDogmaEffectsEffectIdIsWarpSafe;
  modifiers?: GetDogmaEffectsEffectIdModifiers;
  name?: GetDogmaEffectsEffectIdName;
  post_expression?: GetDogmaEffectsEffectIdPostExpression;
  pre_expression?: GetDogmaEffectsEffectIdPreExpression;
  published?: GetDogmaEffectsEffectIdPublished;
  range_attribute_id?: GetDogmaEffectsEffectIdRangeAttributeId;
  range_chance?: GetDogmaEffectsEffectIdRangeChance;
  tracking_speed_attribute_id?: GetDogmaEffectsEffectIdTrackingSpeedAttributeId;
  [k: string]: unknown | undefined;
}
/**
 * modifier object
 */
interface GetDogmaEffectsEffectIdModifier {
  domain?: GetDogmaEffectsEffectIdDomain;
  effect_id?: GetDogmaEffectsEffectIdModifierEffectId;
  func: GetDogmaEffectsEffectIdFunc;
  modified_attribute_id?: GetDogmaEffectsEffectIdModifiedAttributeId;
  modifying_attribute_id?: GetDogmaEffectsEffectIdModifyingAttributeId;
  operator?: GetDogmaEffectsEffectIdOperator;
  [k: string]: unknown | undefined;
}
