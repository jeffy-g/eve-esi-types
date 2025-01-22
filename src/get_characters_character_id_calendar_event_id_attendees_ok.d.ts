/**
 * ESI endpoint: /characters/{character_id}/calendar/{event_id}/attendees/
 */

/**
 * character_id integer
 */
type GetCharactersCharacterIdCalendarEventIdAttendeesCharacterId = number;
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
  character_id?: GetCharactersCharacterIdCalendarEventIdAttendeesCharacterId;
  event_response?: GetCharactersCharacterIdCalendarEventIdAttendeesEventResponse;
  [k: string]: unknown | undefined;
}
