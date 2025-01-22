/**
 * ESI endpoint: /markets/groups/
 */

/**
 * 200 ok integer
 */
type GetMarketsGroups_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 5000
 */
type GetMarketsGroupsOk = GetMarketsGroups_200Ok[];
