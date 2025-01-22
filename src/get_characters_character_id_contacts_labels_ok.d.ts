/**
 * ESI endpoint: /characters/{character_id}/contacts/labels/
 */

/**
 * label_id integer
 */
type GetCharactersCharacterIdContactsLabelsLabelId = number;
/**
 * label_name string
 */
type GetCharactersCharacterIdContactsLabelsLabelName = string;
/**
 * 200 ok array
 *
 * @maxItems 64
 */
type GetCharactersCharacterIdContactsLabelsOk = GetCharactersCharacterIdContactsLabels_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdContactsLabels_200Ok {
  label_id: GetCharactersCharacterIdContactsLabelsLabelId;
  label_name: GetCharactersCharacterIdContactsLabelsLabelName;
  [k: string]: unknown | undefined;
}
