/**
* ESI endpoint: /universe/categories/{category_id}/
*/
/**
 * groups array
 *
 * @maxItems 10000
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
 * group integer
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
