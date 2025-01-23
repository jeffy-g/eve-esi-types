/**
 * ESI endpoint: /characters/{character_id}/medals/
 */

/**
 * corporation_id integer
 */
type GetCharactersCharacterIdMedalsCorporationId = number;
/**
 * date string
 */
type GetCharactersCharacterIdMedalsDate = string;
/**
 * description string
 */
type GetCharactersCharacterIdMedalsDescription = string;
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
 * color integer
 */
type GetCharactersCharacterIdMedalsColor = number;
/**
 * graphic string
 */
type GetCharactersCharacterIdMedalsGraphicGraphic = string;
/**
 * layer integer
 */
type GetCharactersCharacterIdMedalsLayer = number;
/**
 * part integer
 */
type GetCharactersCharacterIdMedalsPart = number;
/**
 * issuer_id integer
 */
type GetCharactersCharacterIdMedalsIssuerId = number;
/**
 * medal_id integer
 */
type GetCharactersCharacterIdMedalsMedalId = number;
/**
 * reason string
 */
type GetCharactersCharacterIdMedalsReason = string;
/**
 * status string
 */
type GetCharactersCharacterIdMedalsStatus = "public" | "private";
/**
 * title string
 */
type GetCharactersCharacterIdMedalsTitle = string;
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
  corporation_id: GetCharactersCharacterIdMedalsCorporationId;
  date: GetCharactersCharacterIdMedalsDate;
  description: GetCharactersCharacterIdMedalsDescription;
  graphics: GetCharactersCharacterIdMedalsGraphics;
  issuer_id: GetCharactersCharacterIdMedalsIssuerId;
  medal_id: GetCharactersCharacterIdMedalsMedalId;
  reason: GetCharactersCharacterIdMedalsReason;
  status: GetCharactersCharacterIdMedalsStatus;
  title: GetCharactersCharacterIdMedalsTitle;
  [k: string]: unknown | undefined;
}
/**
 * graphic object
 */
interface GetCharactersCharacterIdMedalsGraphic {
  color?: GetCharactersCharacterIdMedalsColor;
  graphic: GetCharactersCharacterIdMedalsGraphicGraphic;
  layer: GetCharactersCharacterIdMedalsLayer;
  part: GetCharactersCharacterIdMedalsPart;
  [k: string]: unknown | undefined;
}
