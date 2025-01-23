/**
* ESI endpoint: /characters/{character_id}/calendar/{event_id}/
*/
/**
 * response string
 */
type PutCharactersCharacterIdCalendarEventIdResponseResponse = "accepted" | "declined" | "tentative";

/**
 * response object
 */
interface PutCharactersCharacterIdCalendarEventIdResponse {
  response: PutCharactersCharacterIdCalendarEventIdResponseResponse;
  [k: string]: unknown | undefined;
}
