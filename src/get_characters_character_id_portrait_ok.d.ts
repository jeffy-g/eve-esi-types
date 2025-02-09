/*!
 * ESI endpoint: get:/characters/{character_id}/portrait/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdPortraitOk {
  /**
   * px128x128 string
   */
  px128x128?: string;
  /**
   * px256x256 string
   */
  px256x256?: string;
  /**
   * px512x512 string
   */
  px512x512?: string;
  /**
   * px64x64 string
   */
  px64x64?: string;
  [k: string]: unknown | undefined;
}
