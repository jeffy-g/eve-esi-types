/**
 * ESI endpoint: /characters/{character_id}/mail/
 */

/**
 * From whom the mail was sent
 */
type GetCharactersCharacterIdMailFrom = number;
/**
 * is_read boolean
 */
type GetCharactersCharacterIdMailIsRead = boolean;
/**
 * label integer
 */
type GetCharactersCharacterIdMailLabel = number;
/**
 * labels array
 *
 * @maxItems 25
 */
type GetCharactersCharacterIdMailLabels = GetCharactersCharacterIdMailLabel[];
/**
 * mail_id integer
 */
type GetCharactersCharacterIdMailMailId = number;
/**
 * recipient_id integer
 */
type GetCharactersCharacterIdMailRecipientId = number;
/**
 * recipient_type string
 */
type GetCharactersCharacterIdMailRecipientType = "alliance" | "character" | "corporation" | "mailing_list";
/**
 * Recipients of the mail
 *
 * @minItems 0
 * @maxItems 52
 */
type GetCharactersCharacterIdMailRecipients = GetCharactersCharacterIdMailRecipient[];
/**
 * Mail subject
 */
type GetCharactersCharacterIdMailSubject = string;
/**
 * When the mail was sent
 */
type GetCharactersCharacterIdMailTimestamp = string;
/**
 * 200 ok array
 *
 * @maxItems 50
 */
type GetCharactersCharacterIdMailOk = GetCharactersCharacterIdMail_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMail_200Ok {
  from?: GetCharactersCharacterIdMailFrom;
  is_read?: GetCharactersCharacterIdMailIsRead;
  labels?: GetCharactersCharacterIdMailLabels;
  mail_id?: GetCharactersCharacterIdMailMailId;
  recipients?: GetCharactersCharacterIdMailRecipients;
  subject?: GetCharactersCharacterIdMailSubject;
  timestamp?: GetCharactersCharacterIdMailTimestamp;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface GetCharactersCharacterIdMailRecipient {
  recipient_id: GetCharactersCharacterIdMailRecipientId;
  recipient_type: GetCharactersCharacterIdMailRecipientType;
  [k: string]: unknown | undefined;
}
