/*!
 * ESI endpoint: get:/fleets/{fleet_id}/wings/
 */
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
  /**
   * id integer
   */
  id: number;
  /**
   * name string
   */
  name: string;
  squads: GetFleetsFleetIdWingsSquads;
  [k: string]: unknown | undefined;
}
/**
 * squad object
 */
interface GetFleetsFleetIdWingsSquad {
  /**
   * id integer
   */
  id: number;
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}
