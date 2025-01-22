/**
 * ESI endpoint: /characters/{character_id}/notifications/contacts/
 */

/**
 * message string
 */
type GetCharactersCharacterIdNotificationsContactsMessage = string;
/**
 * notification_id integer
 */
type GetCharactersCharacterIdNotificationsContactsNotificationId = number;
/**
 * send_date string
 */
type GetCharactersCharacterIdNotificationsContactsSendDate = string;
/**
 * sender_character_id integer
 */
type GetCharactersCharacterIdNotificationsContactsSenderCharacterId = number;
/**
 * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
 */
type GetCharactersCharacterIdNotificationsContactsStandingLevel = number;
/**
 * 200 ok array
 *
 * @maxItems 50
 */
type GetCharactersCharacterIdNotificationsContactsOk = GetCharactersCharacterIdNotificationsContacts_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdNotificationsContacts_200Ok {
  message: GetCharactersCharacterIdNotificationsContactsMessage;
  notification_id: GetCharactersCharacterIdNotificationsContactsNotificationId;
  send_date: GetCharactersCharacterIdNotificationsContactsSendDate;
  sender_character_id: GetCharactersCharacterIdNotificationsContactsSenderCharacterId;
  standing_level: GetCharactersCharacterIdNotificationsContactsStandingLevel;
  [k: string]: unknown | undefined;
}
