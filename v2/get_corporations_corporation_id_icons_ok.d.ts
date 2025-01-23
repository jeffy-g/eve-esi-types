/**
 * ESI endpoint: /corporations/{corporation_id}/icons/
 */

/**
 * px128x128 string
 */
type GetCorporationsCorporationIdIconsPx128X128 = string;
/**
 * px256x256 string
 */
type GetCorporationsCorporationIdIconsPx256X256 = string;
/**
 * px64x64 string
 */
type GetCorporationsCorporationIdIconsPx64X64 = string;

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdIconsOk {
  px128x128?: GetCorporationsCorporationIdIconsPx128X128;
  px256x256?: GetCorporationsCorporationIdIconsPx256X256;
  px64x64?: GetCorporationsCorporationIdIconsPx64X64;
  [k: string]: unknown | undefined;
}
