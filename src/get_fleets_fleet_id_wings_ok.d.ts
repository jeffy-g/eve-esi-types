/**
 * ESI endpoint: /fleets/{fleet_id}/wings/
 */

/**
 * id integer
 */
type GetFleetsFleetIdWingsId = number;
/**
 * name string
 */
type GetFleetsFleetIdWingsName = string;
/**
 * id integer
 */
type GetFleetsFleetIdWingsSquadId = number;
/**
 * name string
 */
type GetFleetsFleetIdWingsSquadName = string;
/**
 * squads array
 *
 * @maxItems 25
 */
type GetFleetsFleetIdWingsSquads = GetFleetsFleetIdWingsSquad[];
/**
 * 200 ok array
 *
 * @maxItems 25
 */
type GetFleetsFleetIdWingsOk = GetFleetsFleetIdWings_200Ok[];

/**
 * 200 ok object
 */
interface GetFleetsFleetIdWings_200Ok {
  id: GetFleetsFleetIdWingsId;
  name: GetFleetsFleetIdWingsName;
  squads: GetFleetsFleetIdWingsSquads;
  [k: string]: unknown | undefined;
}
/**
 * squad object
 */
interface GetFleetsFleetIdWingsSquad {
  id: GetFleetsFleetIdWingsSquadId;
  name: GetFleetsFleetIdWingsSquadName;
  [k: string]: unknown | undefined;
}
