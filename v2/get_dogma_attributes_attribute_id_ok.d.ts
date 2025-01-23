/**
 * ESI endpoint: /dogma/attributes/{attribute_id}/
 */

/**
 * attribute_id integer
 */
type GetDogmaAttributesAttributeIdAttributeId = number;
/**
 * default_value number
 */
type GetDogmaAttributesAttributeIdDefaultValue = number;
/**
 * description string
 */
type GetDogmaAttributesAttributeIdDescription = string;
/**
 * display_name string
 */
type GetDogmaAttributesAttributeIdDisplayName = string;
/**
 * high_is_good boolean
 */
type GetDogmaAttributesAttributeIdHighIsGood = boolean;
/**
 * icon_id integer
 */
type GetDogmaAttributesAttributeIdIconId = number;
/**
 * name string
 */
type GetDogmaAttributesAttributeIdName = string;
/**
 * published boolean
 */
type GetDogmaAttributesAttributeIdPublished = boolean;
/**
 * stackable boolean
 */
type GetDogmaAttributesAttributeIdStackable = boolean;
/**
 * unit_id integer
 */
type GetDogmaAttributesAttributeIdUnitId = number;

/**
 * 200 ok object
 */
interface GetDogmaAttributesAttributeIdOk {
  attribute_id: GetDogmaAttributesAttributeIdAttributeId;
  default_value?: GetDogmaAttributesAttributeIdDefaultValue;
  description?: GetDogmaAttributesAttributeIdDescription;
  display_name?: GetDogmaAttributesAttributeIdDisplayName;
  high_is_good?: GetDogmaAttributesAttributeIdHighIsGood;
  icon_id?: GetDogmaAttributesAttributeIdIconId;
  name?: GetDogmaAttributesAttributeIdName;
  published?: GetDogmaAttributesAttributeIdPublished;
  stackable?: GetDogmaAttributesAttributeIdStackable;
  unit_id?: GetDogmaAttributesAttributeIdUnitId;
  [k: string]: unknown | undefined;
}
