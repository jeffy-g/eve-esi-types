/*!
 * ESI endpoint: /markets/groups/{market_group_id}/
 */

/**
 * 200 ok object
 */
interface GetMarketsGroupsMarketGroupIdOk {
  /**
   * description string
   */
  description: string;
  /**
   * market_group_id integer
   */
  market_group_id: number;
  /**
   * name string
   */
  name: string;
  /**
   * parent_group_id integer
   */
  parent_group_id?: number;
  types: number[];
  [k: string]: unknown | undefined;
}
