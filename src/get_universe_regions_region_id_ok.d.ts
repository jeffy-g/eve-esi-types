/**
 * ESI endpoint: /universe/regions/{region_id}/
 */

/**
 * constellation integer
 */
type GetUniverseRegionsRegionIdConstellation = number;
/**
 * constellations array
 *
 * @maxItems 1000
 */
type GetUniverseRegionsRegionIdConstellations = GetUniverseRegionsRegionIdConstellation[];
/**
 * description string
 */
type GetUniverseRegionsRegionIdDescription = string;
/**
 * name string
 */
type GetUniverseRegionsRegionIdName = string;
/**
 * region_id integer
 */
type GetUniverseRegionsRegionIdRegionId = number;

/**
 * 200 ok object
 */
interface GetUniverseRegionsRegionIdOk {
  constellations: GetUniverseRegionsRegionIdConstellations;
  description?: GetUniverseRegionsRegionIdDescription;
  name: GetUniverseRegionsRegionIdName;
  region_id: GetUniverseRegionsRegionIdRegionId;
  [k: string]: unknown | undefined;
}
