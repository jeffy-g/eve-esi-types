/**
 * ESI endpoint: /characters/{character_id}/mail/{mail_id}/
 */

/**
 * label integer
 */
type PutCharactersCharacterIdMailMailIdLabel = number;
/**
 * Labels to assign to the mail. Pre-existing labels are unassigned.
 *
 * @maxItems 25
 */
type PutCharactersCharacterIdMailMailIdLabels = PutCharactersCharacterIdMailMailIdLabel[];
/**
 * Whether the mail is flagged as read
 */
type PutCharactersCharacterIdMailMailIdRead = boolean;

/**
 * contents object
 */
interface PutCharactersCharacterIdMailMailIdContents {
  labels?: PutCharactersCharacterIdMailMailIdLabels;
  read?: PutCharactersCharacterIdMailMailIdRead;
  [k: string]: unknown | undefined;
}
