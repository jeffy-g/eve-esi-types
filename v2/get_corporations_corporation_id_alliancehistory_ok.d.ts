/**
* ESI endpoint: /corporations/{corporation_id}/alliancehistory/
*/
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetCorporationsCorporationIdAlliancehistoryOk = GetCorporationsCorporationIdAlliancehistory_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdAlliancehistory_200Ok {
/**
 * alliance_id integer
 */
  alliance_id?: number;
/**
 * True if the alliance has been closed
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
