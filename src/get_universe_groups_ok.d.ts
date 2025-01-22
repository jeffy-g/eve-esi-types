/**
 * ESI endpoint: /universe/groups/
 */

/**
 * 200 ok integer
 */
type GetUniverseGroups_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetUniverseGroupsOk = GetUniverseGroups_200Ok[];
