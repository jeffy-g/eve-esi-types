/**
 * ESI endpoint: /opportunities/groups/{group_id}/
 */

/**
 * connected_group integer
 */
type GetOpportunitiesGroupsGroupIdConnectedGroup = number;
/**
 * The groups that are connected to this group on the opportunities map
 *
 * @maxItems 50
 */
type GetOpportunitiesGroupsGroupIdConnectedGroups = GetOpportunitiesGroupsGroupIdConnectedGroup[];
/**
 * description string
 */
type GetOpportunitiesGroupsGroupIdDescription = string;
/**
 * group_id integer
 */
type GetOpportunitiesGroupsGroupIdGroupId = number;
/**
 * name string
 */
type GetOpportunitiesGroupsGroupIdName = string;
/**
 * notification string
 */
type GetOpportunitiesGroupsGroupIdNotification = string;
/**
 * required_task integer
 */
type GetOpportunitiesGroupsGroupIdRequiredTask = number;
/**
 * Tasks need to complete for this group
 *
 * @maxItems 100
 */
type GetOpportunitiesGroupsGroupIdRequiredTasks = GetOpportunitiesGroupsGroupIdRequiredTask[];

/**
 * 200 ok object
 */
interface GetOpportunitiesGroupsGroupIdOk {
  connected_groups: GetOpportunitiesGroupsGroupIdConnectedGroups;
  description: GetOpportunitiesGroupsGroupIdDescription;
  group_id: GetOpportunitiesGroupsGroupIdGroupId;
  name: GetOpportunitiesGroupsGroupIdName;
  notification: GetOpportunitiesGroupsGroupIdNotification;
  required_tasks: GetOpportunitiesGroupsGroupIdRequiredTasks;
  [k: string]: unknown | undefined;
}
