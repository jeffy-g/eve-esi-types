/**
 * ESI endpoint: /opportunities/tasks/{task_id}/
 */

/**
 * description string
 */
type GetOpportunitiesTasksTaskIdDescription = string;
/**
 * name string
 */
type GetOpportunitiesTasksTaskIdName = string;
/**
 * notification string
 */
type GetOpportunitiesTasksTaskIdNotification = string;
/**
 * task_id integer
 */
type GetOpportunitiesTasksTaskIdTaskId = number;

/**
 * 200 ok object
 */
interface GetOpportunitiesTasksTaskIdOk {
  description: GetOpportunitiesTasksTaskIdDescription;
  name: GetOpportunitiesTasksTaskIdName;
  notification: GetOpportunitiesTasksTaskIdNotification;
  task_id: GetOpportunitiesTasksTaskIdTaskId;
  [k: string]: unknown | undefined;
}
