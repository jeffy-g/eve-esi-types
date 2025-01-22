/**
 * ESI endpoint: /universe/groups/{group_id}/
 */

/**
 * category_id integer
 */
type GetUniverseGroupsGroupIdCategoryId = number;
/**
 * group_id integer
 */
type GetUniverseGroupsGroupIdGroupId = number;
/**
 * name string
 */
type GetUniverseGroupsGroupIdName = string;
/**
 * published boolean
 */
type GetUniverseGroupsGroupIdPublished = boolean;
/**
 * type integer
 */
type GetUniverseGroupsGroupIdType = number;
/**
 * types array
 *
 * @maxItems 10000
 */
type GetUniverseGroupsGroupIdTypes = GetUniverseGroupsGroupIdType[];

/**
 * 200 ok object
 */
interface GetUniverseGroupsGroupIdOk {
  category_id: GetUniverseGroupsGroupIdCategoryId;
  group_id: GetUniverseGroupsGroupIdGroupId;
  name: GetUniverseGroupsGroupIdName;
  published: GetUniverseGroupsGroupIdPublished;
  types: GetUniverseGroupsGroupIdTypes;
  [k: string]: unknown | undefined;
}
