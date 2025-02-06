/*!
 * ESI endpoint: /opportunities/groups/{group_id}/
 */

/**
 * 200 ok object
 */
interface GetOpportunitiesGroupsGroupIdOk {
  /**
   * The groups that are connected to this group on the opportunities map
   *
   * @maxItems 50
   */
  connected_groups: number[];
  /**
   * description string
   */
  description: string;
  /**
   * group_id integer
   */
  group_id: number;
  /**
   * name string
   */
  name: string;
  /**
   * notification string
   */
  notification: string;
  /**
   * Tasks need to complete for this group
   *
   * @maxItems 100
   */
  required_tasks: number[];
  [k: string]: unknown | undefined;
}
