/**
 * ESI endpoint: /universe/graphics/{graphic_id}/
 */

/**
 * collision_file string
 */
type GetUniverseGraphicsGraphicIdCollisionFile = string;
/**
 * graphic_file string
 */
type GetUniverseGraphicsGraphicIdGraphicFile = string;
/**
 * graphic_id integer
 */
type GetUniverseGraphicsGraphicIdGraphicId = number;
/**
 * icon_folder string
 */
type GetUniverseGraphicsGraphicIdIconFolder = string;
/**
 * sof_dna string
 */
type GetUniverseGraphicsGraphicIdSofDna = string;
/**
 * sof_fation_name string
 */
type GetUniverseGraphicsGraphicIdSofFationName = string;
/**
 * sof_hull_name string
 */
type GetUniverseGraphicsGraphicIdSofHullName = string;
/**
 * sof_race_name string
 */
type GetUniverseGraphicsGraphicIdSofRaceName = string;

/**
 * 200 ok object
 */
interface GetUniverseGraphicsGraphicIdOk {
  collision_file?: GetUniverseGraphicsGraphicIdCollisionFile;
  graphic_file?: GetUniverseGraphicsGraphicIdGraphicFile;
  graphic_id: GetUniverseGraphicsGraphicIdGraphicId;
  icon_folder?: GetUniverseGraphicsGraphicIdIconFolder;
  sof_dna?: GetUniverseGraphicsGraphicIdSofDna;
  sof_fation_name?: GetUniverseGraphicsGraphicIdSofFationName;
  sof_hull_name?: GetUniverseGraphicsGraphicIdSofHullName;
  sof_race_name?: GetUniverseGraphicsGraphicIdSofRaceName;
  [k: string]: unknown | undefined;
}
