/*!
 * ESI endpoint: get:/dogma/attributes/{attribute_id}/
 */

/**
 * 200 ok object
 */
interface GetDogmaAttributesAttributeIdOk {
  /**
   * attribute_id integer
   */
  attribute_id: number;
  /**
   * default_value number
   */
  default_value?: number;
  /**
   * description string
   */
  description?: string;
  /**
   * display_name string
   */
  display_name?: string;
  /**
   * high_is_good boolean
   */
  high_is_good?: boolean;
  /**
   * icon_id integer
   */
  icon_id?: number;
  /**
   * name string
   */
  name?: string;
  /**
   * published boolean
   */
  published?: boolean;
  /**
   * stackable boolean
   */
  stackable?: boolean;
  /**
   * unit_id integer
   */
  unit_id?: number;
  [k: string]: unknown | undefined;
}
