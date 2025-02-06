/*!
 * ESI endpoint: /characters/{character_id}/corporationhistory/
 */
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
  /**
   * corporation_id integer
   */
  corporation_id: number;
  /**
   * True if the corporation has been deleted
   */
  is_deleted?: boolean;
  /**
   * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
   */
  record_id: number;
  /**
   * start_date string
   */
  start_date: string;
  [k: string]: unknown | undefined;
}
