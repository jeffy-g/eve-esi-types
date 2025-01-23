/**
 * ESI endpoint: /route/{origin}/{destination}/
 */

/**
 * Solar system in route
 */
type SolarSystemID = number;
/**
 * Solar systems in route
 *
 * @maxItems 1000
 */
type GetRouteOriginDestinationOk = SolarSystemID[];
