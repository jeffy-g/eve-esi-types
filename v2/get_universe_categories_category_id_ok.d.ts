/**
 * ESI endpoint: /universe/categories/{category_id}/
 */

/**
 * category_id integer
 */
type GetUniverseCategoriesCategoryIdCategoryId = number;
/**
 * group integer
 */
type GetUniverseCategoriesCategoryIdGroup = number;
/**
 * groups array
 *
 * @maxItems 10000
 */
type GetUniverseCategoriesCategoryIdGroups = GetUniverseCategoriesCategoryIdGroup[];
/**
 * name string
 */
type GetUniverseCategoriesCategoryIdName = string;
/**
 * published boolean
 */
type GetUniverseCategoriesCategoryIdPublished = boolean;

/**
 * 200 ok object
 */
interface GetUniverseCategoriesCategoryIdOk {
  category_id: GetUniverseCategoriesCategoryIdCategoryId;
  groups: GetUniverseCategoriesCategoryIdGroups;
  name: GetUniverseCategoriesCategoryIdName;
  published: GetUniverseCategoriesCategoryIdPublished;
  [k: string]: unknown | undefined;
}
