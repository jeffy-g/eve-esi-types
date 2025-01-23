/**
* ESI endpoint: /characters/{character_id}/mail/{mail_id}/
*/
/**
 * Labels attached to the mail
 *
 * @maxItems 25
 */
/**
 * recipient_type string
 */
type GetCharactersCharacterIdMailMailIdRecipientType = "alliance" | "character" | "corporation" | "mailing_list";
/**
 * Recipients of the mail
 *
 * @minItems 0
 * @maxItems 52
 */
type GetCharactersCharacterIdMailMailIdRecipients = GetCharactersCharacterIdMailMailIdRecipient[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailMailIdOk {
/**
 * Mail's body
 */
  body?: string;
/**
 * From whom the mail was sent
 */
  from?: number;
/**
 * label integer
 */
  labels?: number[];
/**
 * Whether the mail is flagged as read
 */
  read?: boolean;
  recipients?: GetCharactersCharacterIdMailMailIdRecipients;
/**
 * Mail subject
 */
  subject?: string;
/**
 * When the mail was sent
 */
  timestamp?: string;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface GetCharactersCharacterIdMailMailIdRecipient {
/**
 * recipient_id integer
 */
  recipient_id: number;
  recipient_type: GetCharactersCharacterIdMailMailIdRecipientType;
  [k: string]: unknown | undefined;
}
