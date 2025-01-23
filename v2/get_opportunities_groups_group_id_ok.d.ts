/**
* ESI endpoint: /opportunities/groups/{group_id}/
*/
/**
 * The groups that are connected to this group on the opportunities map
 *
 * @maxItems 50
 */
/**
 * Tasks need to complete for this group
 *
 * @maxItems 100
 */

/**
 * 200 ok object
 */
interface GetOpportunitiesGroupsGroupIdOk {
/**
 * connected_group integer
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
 * required_task integer
 */
  required_tasks: number[];
  [k: string]: unknown | undefined;
}
