/*!
 * ESI endpoint: get:/corporations/{corporation_id}/icons/
 */

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdIconsOk {
  /**
   * px128x128 string
   */
  px128x128?: string;
  /**
   * px256x256 string
   */
  px256x256?: string;
  /**
   * px64x64 string
   */
  px64x64?: string;
  [k: string]: unknown | undefined;
}
