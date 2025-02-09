/*!
 * ESI endpoint: get:/universe/groups/{group_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseGroupsGroupIdOk {
  /**
   * category_id integer
   */
  category_id: number;
  /**
   * group_id integer
   */
  group_id: number;
  /**
   * name string
   */
  name: string;
  /**
   * published boolean
   */
  published: boolean;
  types: number[];
  [k: string]: unknown | undefined;
}
