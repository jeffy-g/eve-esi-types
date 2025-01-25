/*!
 * ESI endpoint: /characters/{character_id}/calendar/{event_id}/attendees/
 */
/**
 * event_response string
 */
type GetCharactersCharacterIdCalendarEventIdAttendeesEventResponse =
  | "declined"
  | "not_responded"
  | "accepted"
  | "tentative";
/**
 * List of attendees for a given event
 *
 * @maxItems 100
 */
type GetCharactersCharacterIdCalendarEventIdAttendeesOk =
  GetCharactersCharacterIdCalendarEventIdAttendees_200Ok[];

/**
 * character_id and response of an attendee
 */
interface GetCharactersCharacterIdCalendarEventIdAttendees_200Ok {
  /**
   * character_id integer
   */
  character_id?: number;
  event_response?: GetCharactersCharacterIdCalendarEventIdAttendeesEventResponse;
  [k: string]: unknown | undefined;
}
