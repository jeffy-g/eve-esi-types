/**
 * ESI endpoint: /characters/{character_id}/portrait/
 */

/**
 * px128x128 string
 */
type GetCharactersCharacterIdPortraitPx128X128 = string;
/**
 * px256x256 string
 */
type GetCharactersCharacterIdPortraitPx256X256 = string;
/**
 * px512x512 string
 */
type GetCharactersCharacterIdPortraitPx512X512 = string;
/**
 * px64x64 string
 */
type GetCharactersCharacterIdPortraitPx64X64 = string;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdPortraitOk {
  px128x128?: GetCharactersCharacterIdPortraitPx128X128;
  px256x256?: GetCharactersCharacterIdPortraitPx256X256;
  px512x512?: GetCharactersCharacterIdPortraitPx512X512;
  px64x64?: GetCharactersCharacterIdPortraitPx64X64;
  [k: string]: unknown | undefined;
}
