/*!
 * ESI endpoint: /ui/openwindow/newmail/
 */
/**
 * recipients array
 *
 * @minItems 1
 * @maxItems 50
 */
type PostUiOpenwindowNewmailRecipients = [
  /**
   * recipient integer
   */
  number,
  ...number[]
];

/**
 * new_mail object
 */
interface PostUiOpenwindowNewmailNewMail {
  /**
   * body string
   */
  body: string;
  recipients: PostUiOpenwindowNewmailRecipients;
  /**
   * subject string
   */
  subject: string;
  /**
   * to_corp_or_alliance_id integer
   */
  to_corp_or_alliance_id?: number;
  /**
   * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
   */
  to_mailing_list_id?: number;
  [k: string]: unknown | undefined;
}
