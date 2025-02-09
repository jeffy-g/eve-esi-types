/*!
 * ESI endpoint: get:/characters/{character_id}/notifications/contacts/
 */
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
  /**
   * message string
   */
  message: string;
  /**
   * notification_id integer
   */
  notification_id: number;
  /**
   * send_date string
   */
  send_date: string;
  /**
   * sender_character_id integer
   */
  sender_character_id: number;
  /**
   * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
   */
  standing_level: number;
  [k: string]: unknown | undefined;
}
