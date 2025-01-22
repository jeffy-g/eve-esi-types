/**
 * ESI endpoint: /ui/openwindow/newmail/
 */

/**
 * body string
 */
type PostUiOpenwindowNewmailBody = string;
/**
 * recipients array
 *
 * @minItems 1
 * @maxItems 50
 */
type PostUiOpenwindowNewmailRecipients = [
  PostUiOpenwindowNewmailRecipient,
  ...PostUiOpenwindowNewmailRecipient[]
];
/**
 * recipient integer
 */
type PostUiOpenwindowNewmailRecipient = number;
/**
 * subject string
 */
type PostUiOpenwindowNewmailSubject = string;
/**
 * to_corp_or_alliance_id integer
 */
type PostUiOpenwindowNewmailToCorpOrAllianceId = number;
/**
 * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
 */
type PostUiOpenwindowNewmailToMailingListId = number;

/**
 * new_mail object
 */
interface PostUiOpenwindowNewmailNewMail {
  body: PostUiOpenwindowNewmailBody;
  recipients: PostUiOpenwindowNewmailRecipients;
  subject: PostUiOpenwindowNewmailSubject;
  to_corp_or_alliance_id?: PostUiOpenwindowNewmailToCorpOrAllianceId;
  to_mailing_list_id?: PostUiOpenwindowNewmailToMailingListId;
  [k: string]: unknown | undefined;
}
