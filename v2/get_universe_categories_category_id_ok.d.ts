/*!
 * ESI endpoint: get:/universe/categories/{category_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseCategoriesCategoryIdOk {
  /**
   * category_id integer
   */
  category_id: number;
  /**
   * groups array
   *
   * @maxItems 10000
   */
  groups: number[];
  /**
   * name string
   */
  name: string;
  /**
   * published boolean
   */
  published: boolean;
  [k: string]: unknown | undefined;
}
