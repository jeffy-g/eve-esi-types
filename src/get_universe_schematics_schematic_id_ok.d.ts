/**
 * ESI endpoint: /universe/schematics/{schematic_id}/
 */

/**
 * Time in seconds to process a run
 */
type GetUniverseSchematicsSchematicIdCycleTime = number;
/**
 * schematic_name string
 */
type GetUniverseSchematicsSchematicIdSchematicName = string;

/**
 * 200 ok object
 */
interface GetUniverseSchematicsSchematicIdOk {
  cycle_time: GetUniverseSchematicsSchematicIdCycleTime;
  schematic_name: GetUniverseSchematicsSchematicIdSchematicName;
  [k: string]: unknown | undefined;
}
