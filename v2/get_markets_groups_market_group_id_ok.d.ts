/**
 * ESI endpoint: /markets/groups/{market_group_id}/
 */

/**
 * description string
 */
type GetMarketsGroupsMarketGroupIdDescription = string;
/**
 * market_group_id integer
 */
type GetMarketsGroupsMarketGroupIdMarketGroupId = number;
/**
 * name string
 */
type GetMarketsGroupsMarketGroupIdName = string;
/**
 * parent_group_id integer
 */
type GetMarketsGroupsMarketGroupIdParentGroupId = number;
/**
 * type integer
 */
type GetMarketsGroupsMarketGroupIdType = number;
/**
 * types array
 *
 * @maxItems 5000
 */
type GetMarketsGroupsMarketGroupIdTypes = GetMarketsGroupsMarketGroupIdType[];

/**
 * 200 ok object
 */
interface GetMarketsGroupsMarketGroupIdOk {
  description: GetMarketsGroupsMarketGroupIdDescription;
  market_group_id: GetMarketsGroupsMarketGroupIdMarketGroupId;
  name: GetMarketsGroupsMarketGroupIdName;
  parent_group_id?: GetMarketsGroupsMarketGroupIdParentGroupId;
  types: GetMarketsGroupsMarketGroupIdTypes;
  [k: string]: unknown | undefined;
}
