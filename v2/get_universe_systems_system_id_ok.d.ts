/**
 * ESI endpoint: /universe/systems/{system_id}/
 */

/**
 * The constellation this solar system is in
 */
type GetUniverseSystemsSystemIdConstellationId = number;
/**
 * name string
 */
type GetUniverseSystemsSystemIdName = string;
/**
 * asteroid_belt integer
 */
type GetUniverseSystemsSystemIdAsteroidBelt = number;
/**
 * asteroid_belts array
 *
 * @maxItems 100
 */
type GetUniverseSystemsSystemIdAsteroidBelts = GetUniverseSystemsSystemIdAsteroidBelt[];
/**
 * moon integer
 */
type GetUniverseSystemsSystemIdMoon = number;
/**
 * moons array
 *
 * @maxItems 1000
 */
type GetUniverseSystemsSystemIdMoons = GetUniverseSystemsSystemIdMoon[];
/**
 * planet_id integer
 */
type GetUniverseSystemsSystemIdPlanetId = number;
/**
 * planets array
 *
 * @maxItems 1000
 */
type GetUniverseSystemsSystemIdPlanets = GetUniverseSystemsSystemIdPlanet[];
/**
 * x number
 */
type GetUniverseSystemsSystemIdX = number;
/**
 * y number
 */
type GetUniverseSystemsSystemIdY = number;
/**
 * z number
 */
type GetUniverseSystemsSystemIdZ = number;
/**
 * security_class string
 */
type GetUniverseSystemsSystemIdSecurityClass = string;
/**
 * security_status number
 */
type GetUniverseSystemsSystemIdSecurityStatus = number;
/**
 * star_id integer
 */
type GetUniverseSystemsSystemIdStarId = number;
/**
 * stargate integer
 */
type GetUniverseSystemsSystemIdStargate = number;
/**
 * stargates array
 *
 * @maxItems 25
 */
type GetUniverseSystemsSystemIdStargates = GetUniverseSystemsSystemIdStargate[];
/**
 * station integer
 */
type GetUniverseSystemsSystemIdStation = number;
/**
 * stations array
 *
 * @maxItems 25
 */
type GetUniverseSystemsSystemIdStations = GetUniverseSystemsSystemIdStation[];
/**
 * system_id integer
 */
type GetUniverseSystemsSystemIdSystemId = number;

/**
 * 200 ok object
 */
interface GetUniverseSystemsSystemIdOk {
  constellation_id: GetUniverseSystemsSystemIdConstellationId;
  name: GetUniverseSystemsSystemIdName;
  planets?: GetUniverseSystemsSystemIdPlanets;
  position: GetUniverseSystemsSystemIdPosition;
  security_class?: GetUniverseSystemsSystemIdSecurityClass;
  security_status: GetUniverseSystemsSystemIdSecurityStatus;
  star_id?: GetUniverseSystemsSystemIdStarId;
  stargates?: GetUniverseSystemsSystemIdStargates;
  stations?: GetUniverseSystemsSystemIdStations;
  system_id: GetUniverseSystemsSystemIdSystemId;
  [k: string]: unknown | undefined;
}
/**
 * planet object
 */
interface GetUniverseSystemsSystemIdPlanet {
  asteroid_belts?: GetUniverseSystemsSystemIdAsteroidBelts;
  moons?: GetUniverseSystemsSystemIdMoons;
  planet_id: GetUniverseSystemsSystemIdPlanetId;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseSystemsSystemIdPosition {
  x: GetUniverseSystemsSystemIdX;
  y: GetUniverseSystemsSystemIdY;
  z: GetUniverseSystemsSystemIdZ;
  [k: string]: unknown | undefined;
}
