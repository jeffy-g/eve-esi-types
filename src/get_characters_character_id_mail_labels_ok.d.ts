/*!
 * ESI endpoint: /characters/{character_id}/mail/labels/
 */
/**
 * color string
 */
type GetCharactersCharacterIdMailLabelsColor =
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
 * labels array
 *
 * @maxItems 30
 */
type GetCharactersCharacterIdMailLabelsLabels = GetCharactersCharacterIdMailLabelsLabel[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailLabelsOk {
  labels?: GetCharactersCharacterIdMailLabelsLabels;
  /**
   * total_unread_count integer
   */
  total_unread_count?: number;
  [k: string]: unknown | undefined;
}
/**
 * label object
 */
interface GetCharactersCharacterIdMailLabelsLabel {
  color?: GetCharactersCharacterIdMailLabelsColor;
  /**
   * label_id integer
   */
  label_id?: number;
  /**
   * name string
   */
  name?: string;
  /**
   * unread_count integer
   */
  unread_count?: number;
  [k: string]: unknown | undefined;
}
