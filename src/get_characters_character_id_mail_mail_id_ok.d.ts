/**
 * ESI endpoint: /characters/{character_id}/mail/{mail_id}/
 */

/**
 * Mail's body
 */
type GetCharactersCharacterIdMailMailIdBody = string;
/**
 * From whom the mail was sent
 */
type GetCharactersCharacterIdMailMailIdFrom = number;
/**
 * label integer
 */
type GetCharactersCharacterIdMailMailIdLabel = number;
/**
 * Labels attached to the mail
 *
 * @maxItems 25
 */
type GetCharactersCharacterIdMailMailIdLabels = GetCharactersCharacterIdMailMailIdLabel[];
/**
 * Whether the mail is flagged as read
 */
type GetCharactersCharacterIdMailMailIdRead = boolean;
/**
 * recipient_id integer
 */
type GetCharactersCharacterIdMailMailIdRecipientId = number;
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
 * Mail subject
 */
type GetCharactersCharacterIdMailMailIdSubject = string;
/**
 * When the mail was sent
 */
type GetCharactersCharacterIdMailMailIdTimestamp = string;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailMailIdOk {
  body?: GetCharactersCharacterIdMailMailIdBody;
  from?: GetCharactersCharacterIdMailMailIdFrom;
  labels?: GetCharactersCharacterIdMailMailIdLabels;
  read?: GetCharactersCharacterIdMailMailIdRead;
  recipients?: GetCharactersCharacterIdMailMailIdRecipients;
  subject?: GetCharactersCharacterIdMailMailIdSubject;
  timestamp?: GetCharactersCharacterIdMailMailIdTimestamp;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface GetCharactersCharacterIdMailMailIdRecipient {
  recipient_id: GetCharactersCharacterIdMailMailIdRecipientId;
  recipient_type: GetCharactersCharacterIdMailMailIdRecipientType;
  [k: string]: unknown | undefined;
}
