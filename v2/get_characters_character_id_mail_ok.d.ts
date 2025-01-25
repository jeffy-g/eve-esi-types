/*!
 * ESI endpoint: /characters/{character_id}/mail/
 */
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
 * 200 ok array
 *
 * @maxItems 50
 */
type GetCharactersCharacterIdMailOk = GetCharactersCharacterIdMail_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMail_200Ok {
  /**
   * From whom the mail was sent
   */
  from?: number;
  /**
   * is_read boolean
   */
  is_read?: boolean;
  /**
   * labels array
   *
   * @maxItems 25
   */
  labels?: number[];
  /**
   * mail_id integer
   */
  mail_id?: number;
  recipients?: GetCharactersCharacterIdMailRecipients;
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
interface GetCharactersCharacterIdMailRecipient {
  /**
   * recipient_id integer
   */
  recipient_id: number;
  recipient_type: GetCharactersCharacterIdMailRecipientType;
  [k: string]: unknown | undefined;
}
