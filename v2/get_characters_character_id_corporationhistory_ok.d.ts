/**
 * ESI endpoint: /characters/{character_id}/corporationhistory/
 */

/**
 * corporation_id integer
 */
type GetCharactersCharacterIdCorporationhistoryCorporationId = number;
/**
 * True if the corporation has been deleted
 */
type GetCharactersCharacterIdCorporationhistoryIsDeleted = boolean;
/**
 * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
 */
type GetCharactersCharacterIdCorporationhistoryRecordId = number;
/**
 * start_date string
 */
type GetCharactersCharacterIdCorporationhistoryStartDate = string;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetCharactersCharacterIdCorporationhistoryOk = GetCharactersCharacterIdCorporationhistory_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdCorporationhistory_200Ok {
  corporation_id: GetCharactersCharacterIdCorporationhistoryCorporationId;
  is_deleted?: GetCharactersCharacterIdCorporationhistoryIsDeleted;
  record_id: GetCharactersCharacterIdCorporationhistoryRecordId;
  start_date: GetCharactersCharacterIdCorporationhistoryStartDate;
  [k: string]: unknown | undefined;
}
