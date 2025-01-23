/**
* ESI endpoint: /sovereignty/structures/
*/
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
/**
 * The alliance that owns the structure.
 *
 */
  alliance_id: number;
/**
 * Solar system in which the structure is located.
 *
 */
  solar_system_id: number;
/**
 * Unique item ID for this structure.
 */
  structure_id: number;
/**
 * A reference to the type of structure this is.
 *
 */
  structure_type_id: number;
/**
 * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.
 *
 */
  vulnerability_occupancy_level?: number;
/**
 * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.
 *
 */
  vulnerable_end_time?: string;
/**
 * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.
 *
 */
  vulnerable_start_time?: string;
  [k: string]: unknown | undefined;
}
