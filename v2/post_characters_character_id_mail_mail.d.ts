/**
 * ESI endpoint: /characters/{character_id}/mail/
 */

/**
 * approved_cost integer
 */
type PostCharactersCharacterIdMailApprovedCost = number;
/**
 * body string
 */
type PostCharactersCharacterIdMailBody = string;
/**
 * recipients array
 *
 * @minItems 1
 * @maxItems 50
 */
type PostCharactersCharacterIdMailRecipients = [
  PostCharactersCharacterIdMailRecipient,
  ...PostCharactersCharacterIdMailRecipient[]
];
/**
 * recipient_id integer
 */
type PostCharactersCharacterIdMailRecipientId = number;
/**
 * recipient_type string
 */
type PostCharactersCharacterIdMailRecipientType = "alliance" | "character" | "corporation" | "mailing_list";
/**
 * subject string
 */
type PostCharactersCharacterIdMailSubject = string;

/**
 * mail object
 */
interface PostCharactersCharacterIdMailMail {
  approved_cost?: PostCharactersCharacterIdMailApprovedCost;
  body: PostCharactersCharacterIdMailBody;
  recipients: PostCharactersCharacterIdMailRecipients;
  subject: PostCharactersCharacterIdMailSubject;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface PostCharactersCharacterIdMailRecipient {
  recipient_id: PostCharactersCharacterIdMailRecipientId;
  recipient_type: PostCharactersCharacterIdMailRecipientType;
  [k: string]: unknown | undefined;
}
