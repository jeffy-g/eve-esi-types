/*!
 * ESI endpoint: get:/opportunities/tasks/{task_id}/
 */

/**
 * 200 ok object
 */
interface GetOpportunitiesTasksTaskIdOk {
  /**
   * description string
   */
  description: string;
  /**
   * name string
   */
  name: string;
  /**
   * notification string
   */
  notification: string;
  /**
   * task_id integer
   */
  task_id: number;
  [k: string]: unknown | undefined;
}
