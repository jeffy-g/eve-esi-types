/*!
 * ESI endpoint: get:/characters/{character_id}/calendar/
 */
/**
 * event_response string
 */
type GetCharactersCharacterIdCalendarEventResponse = "declined" | "not_responded" | "accepted" | "tentative";
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
  /**
   * event_date string
   */
  event_date?: string;
  /**
   * event_id integer
   */
  event_id?: number;
  event_response?: GetCharactersCharacterIdCalendarEventResponse;
  /**
   * importance integer
   */
  importance?: number;
  /**
   * title string
   */
  title?: string;
  [k: string]: unknown | undefined;
}
