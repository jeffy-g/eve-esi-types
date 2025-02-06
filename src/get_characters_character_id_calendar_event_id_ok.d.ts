/*!
 * ESI endpoint: /characters/{character_id}/calendar/{event_id}/
 */
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
 * Full details of a specific event
 */
interface GetCharactersCharacterIdCalendarEventIdOk {
  /**
   * date string
   */
  date: string;
  /**
   * Length in minutes
   */
  duration: number;
  /**
   * event_id integer
   */
  event_id: number;
  /**
   * importance integer
   */
  importance: number;
  /**
   * owner_id integer
   */
  owner_id: number;
  /**
   * owner_name string
   */
  owner_name: string;
  owner_type: GetCharactersCharacterIdCalendarEventIdOwnerType;
  /**
   * response string
   */
  response: string;
  /**
   * text string
   */
  text: string;
  /**
   * title string
   */
  title: string;
  [k: string]: unknown | undefined;
}
