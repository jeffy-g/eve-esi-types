/**
 * ESI endpoint: /characters/{character_id}/calendar/{event_id}/
 */

/**
 * date string
 */
type GetCharactersCharacterIdCalendarEventIdDate = string;
/**
 * Length in minutes
 */
type GetCharactersCharacterIdCalendarEventIdDuration = number;
/**
 * event_id integer
 */
type GetCharactersCharacterIdCalendarEventIdEventId = number;
/**
 * importance integer
 */
type GetCharactersCharacterIdCalendarEventIdImportance = number;
/**
 * owner_id integer
 */
type GetCharactersCharacterIdCalendarEventIdOwnerId = number;
/**
 * owner_name string
 */
type GetCharactersCharacterIdCalendarEventIdOwnerName = string;
/**
 * owner_type string
 */
type GetCharactersCharacterIdCalendarEventIdOwnerType =
  | "eve_server"
  | "corporation"
  | "faction"
  | "character"
  | "alliance";
/**
 * response string
 */
type GetCharactersCharacterIdCalendarEventIdResponse = string;
/**
 * text string
 */
type GetCharactersCharacterIdCalendarEventIdText = string;
/**
 * title string
 */
type GetCharactersCharacterIdCalendarEventIdTitle = string;

/**
 * Full details of a specific event
 */
interface GetCharactersCharacterIdCalendarEventIdOk {
  date: GetCharactersCharacterIdCalendarEventIdDate;
  duration: GetCharactersCharacterIdCalendarEventIdDuration;
  event_id: GetCharactersCharacterIdCalendarEventIdEventId;
  importance: GetCharactersCharacterIdCalendarEventIdImportance;
  owner_id: GetCharactersCharacterIdCalendarEventIdOwnerId;
  owner_name: GetCharactersCharacterIdCalendarEventIdOwnerName;
  owner_type: GetCharactersCharacterIdCalendarEventIdOwnerType;
  response: GetCharactersCharacterIdCalendarEventIdResponse;
  text: GetCharactersCharacterIdCalendarEventIdText;
  title: GetCharactersCharacterIdCalendarEventIdTitle;
  [k: string]: unknown | undefined;
}
