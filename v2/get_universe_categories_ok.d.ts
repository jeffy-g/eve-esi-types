/**
 * ESI endpoint: /universe/categories/
 */

/**
 * 200 ok integer
 */
type GetUniverseCategories_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetUniverseCategoriesOk = GetUniverseCategories_200Ok[];
