/**
* ESI endpoint: /universe/graphics/{graphic_id}/
*/

/**
 * 200 ok object
 */
interface GetUniverseGraphicsGraphicIdOk {
/**
 * collision_file string
 */
  collision_file?: string;
/**
 * graphic_file string
 */
  graphic_file?: string;
/**
 * graphic_id integer
 */
  graphic_id: number;
/**
 * icon_folder string
 */
  icon_folder?: string;
/**
 * sof_dna string
 */
  sof_dna?: string;
/**
 * sof_fation_name string
 */
  sof_fation_name?: string;
/**
 * sof_hull_name string
 */
  sof_hull_name?: string;
/**
 * sof_race_name string
 */
  sof_race_name?: string;
  [k: string]: unknown | undefined;
}
