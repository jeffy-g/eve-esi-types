/**
 * ESI endpoint: /characters/{character_id}/calendar/
 */

/**
 * event_date string
 */
type GetCharactersCharacterIdCalendarEventDate = string;
/**
 * event_id integer
 */
type GetCharactersCharacterIdCalendarEventId = number;
/**
 * event_response string
 */
type GetCharactersCharacterIdCalendarEventResponse = "declined" | "not_responded" | "accepted" | "tentative";
/**
 * importance integer
 */
type GetCharactersCharacterIdCalendarImportance = number;
/**
 * title string
 */
type GetCharactersCharacterIdCalendarTitle = string;
/**
 * Up to 50 events from now or the event you requested
 *
 * @maxItems 50
 */
type GetCharactersCharacterIdCalendarOk = GetCharactersCharacterIdCalendar_200Ok[];

/**
 * event
 */
interface GetCharactersCharacterIdCalendar_200Ok {
  event_date?: GetCharactersCharacterIdCalendarEventDate;
  event_id?: GetCharactersCharacterIdCalendarEventId;
  event_response?: GetCharactersCharacterIdCalendarEventResponse;
  importance?: GetCharactersCharacterIdCalendarImportance;
  title?: GetCharactersCharacterIdCalendarTitle;
  [k: string]: unknown | undefined;
}
