/*!
 * ESI endpoint: /universe/systems/{system_id}/
 */
/**
 * planets array
 *
 * @maxItems 1000
 */
type GetUniverseSystemsSystemIdPlanets = GetUniverseSystemsSystemIdPlanet[];

/**
 * 200 ok object
 */
interface GetUniverseSystemsSystemIdOk {
  /**
   * The constellation this solar system is in
   */
  constellation_id: number;
  /**
   * name string
   */
  name: string;
  planets?: GetUniverseSystemsSystemIdPlanets;
  position: GetUniverseSystemsSystemIdPosition;
  /**
   * security_class string
   */
  security_class?: string;
  /**
   * security_status number
   */
  security_status: number;
  /**
   * star_id integer
   */
  star_id?: number;
  /**
   * stargates array
   *
   * @maxItems 25
   */
  stargates?: number[];
  /**
   * stations array
   *
   * @maxItems 25
   */
  stations?: number[];
  /**
   * system_id integer
   */
  system_id: number;
  [k: string]: unknown | undefined;
}
/**
 * planet object
 */
interface GetUniverseSystemsSystemIdPlanet {
  /**
   * asteroid_belts array
   *
   * @maxItems 100
   */
  asteroid_belts?: number[];
  /**
   * moons array
   *
   * @maxItems 1000
   */
  moons?: number[];
  /**
   * planet_id integer
   */
  planet_id: number;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseSystemsSystemIdPosition {
  /**
   * x number
   */
  x: number;
  /**
   * y number
   */
  y: number;
  /**
   * z number
   */
  z: number;
  [k: string]: unknown | undefined;
}
