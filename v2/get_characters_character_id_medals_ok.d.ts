/**
* ESI endpoint: /characters/{character_id}/medals/
*/
/**
 * graphics array
 *
 * @minItems 3
 * @maxItems 9
 */
type GetCharactersCharacterIdMedalsGraphics =
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ]
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ]
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ]
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ]
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ]
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ]
  | [
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic,
      GetCharactersCharacterIdMedalsGraphic
    ];
/**
 * status string
 */
type GetCharactersCharacterIdMedalsStatus = "public" | "private";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdMedalsOk = GetCharactersCharacterIdMedals_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMedals_200Ok {
/**
 * corporation_id integer
 */
  corporation_id: number;
/**
 * date string
 */
  date: string;
/**
 * description string
 */
  description: string;
  graphics: GetCharactersCharacterIdMedalsGraphics;
/**
 * issuer_id integer
 */
  issuer_id: number;
/**
 * medal_id integer
 */
  medal_id: number;
/**
 * reason string
 */
  reason: string;
  status: GetCharactersCharacterIdMedalsStatus;
/**
 * title string
 */
  title: string;
  [k: string]: unknown | undefined;
}
/**
 * graphic object
 */
interface GetCharactersCharacterIdMedalsGraphic {
/**
 * color integer
 */
  color?: number;
/**
 * graphic string
 */
  graphic: string;
/**
 * layer integer
 */
  layer: number;
/**
 * part integer
 */
  part: number;
  [k: string]: unknown | undefined;
}
