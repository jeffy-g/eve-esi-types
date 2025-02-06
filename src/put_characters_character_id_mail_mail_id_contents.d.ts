/*!
 * ESI endpoint: /characters/{character_id}/mail/{mail_id}/
 */

/**
 * contents object
 */
interface PutCharactersCharacterIdMailMailIdContents {
  /**
   * Labels to assign to the mail. Pre-existing labels are unassigned.
   *
   * @maxItems 25
   */
  labels?: number[];
  /**
   * Whether the mail is flagged as read
   */
  read?: boolean;
  [k: string]: unknown | undefined;
}
