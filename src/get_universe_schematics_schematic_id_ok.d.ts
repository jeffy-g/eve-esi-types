/*!
 * ESI endpoint: /universe/schematics/{schematic_id}/
 */

/**
 * 200 ok object
 */
interface GetUniverseSchematicsSchematicIdOk {
  /**
   * Time in seconds to process a run
   */
  cycle_time: number;
  /**
   * schematic_name string
   */
  schematic_name: string;
  [k: string]: unknown | undefined;
}
