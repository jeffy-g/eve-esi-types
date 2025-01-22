/**
 * ESI endpoint: /sovereignty/structures/
 */

/**
 * The alliance that owns the structure.
 *
 */
type GetSovereigntyStructuresAllianceId = number;
/**
 * Solar system in which the structure is located.
 *
 */
type GetSovereigntyStructuresSolarSystemId = number;
/**
 * Unique item ID for this structure.
 */
type GetSovereigntyStructuresStructureId = number;
/**
 * A reference to the type of structure this is.
 *
 */
type GetSovereigntyStructuresStructureTypeId = number;
/**
 * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.
 *
 */
type GetSovereigntyStructuresVulnerabilityOccupancyLevel = number;
/**
 * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.
 *
 */
type GetSovereigntyStructuresVulnerableEndTime = string;
/**
 * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.
 *
 */
type GetSovereigntyStructuresVulnerableStartTime = string;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetSovereigntyStructuresOk = GetSovereigntyStructures_200Ok[];

/**
 * 200 ok object
 */
interface GetSovereigntyStructures_200Ok {
  alliance_id: GetSovereigntyStructuresAllianceId;
  solar_system_id: GetSovereigntyStructuresSolarSystemId;
  structure_id: GetSovereigntyStructuresStructureId;
  structure_type_id: GetSovereigntyStructuresStructureTypeId;
  vulnerability_occupancy_level?: GetSovereigntyStructuresVulnerabilityOccupancyLevel;
  vulnerable_end_time?: GetSovereigntyStructuresVulnerableEndTime;
  vulnerable_start_time?: GetSovereigntyStructuresVulnerableStartTime;
  [k: string]: unknown | undefined;
}
