/**
 * ESI endpoint: /characters/{character_id}/mail/labels/
 */

/**
 * Hexadecimal string representing label color, in RGB format
 */
type PostCharactersCharacterIdMailLabelsColor =
  | "#0000fe"
  | "#006634"
  | "#0099ff"
  | "#00ff33"
  | "#01ffff"
  | "#349800"
  | "#660066"
  | "#666666"
  | "#999999"
  | "#99ffff"
  | "#9a0000"
  | "#ccff9a"
  | "#e6e6e6"
  | "#fe0000"
  | "#ff6600"
  | "#ffff01"
  | "#ffffcd"
  | "#ffffff";
/**
 * name string
 */
type PostCharactersCharacterIdMailLabelsName = string;

/**
 * label object
 */
interface PostCharactersCharacterIdMailLabelsLabel {
  color?: PostCharactersCharacterIdMailLabelsColor;
  name: PostCharactersCharacterIdMailLabelsName;
  [k: string]: unknown | undefined;
}
