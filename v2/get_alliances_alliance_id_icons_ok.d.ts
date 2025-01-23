/**
 * ESI endpoint: /alliances/{alliance_id}/icons/
 */

/**
 * px128x128 string
 */
type GetAlliancesAllianceIdIconsPx128X128 = string;
/**
 * px64x64 string
 */
type GetAlliancesAllianceIdIconsPx64X64 = string;

/**
 * 200 ok object
 */
interface GetAlliancesAllianceIdIconsOk {
  px128x128?: GetAlliancesAllianceIdIconsPx128X128;
  px64x64?: GetAlliancesAllianceIdIconsPx64X64;
  [k: string]: unknown | undefined;
}
