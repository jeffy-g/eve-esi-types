/**
 * ESI endpoint: /markets/{region_id}/types/
 */

/**
 * 200 ok integer
 */
type GetMarketsRegionIdTypes_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetMarketsRegionIdTypesOk = GetMarketsRegionIdTypes_200Ok[];
