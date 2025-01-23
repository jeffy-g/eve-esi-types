/**
 * ESI endpoint: /corporations/{corporation_id}/alliancehistory/
 */

/**
 * alliance_id integer
 */
type GetCorporationsCorporationIdAlliancehistoryAllianceId = number;
/**
 * True if the alliance has been closed
 */
type GetCorporationsCorporationIdAlliancehistoryIsDeleted = boolean;
/**
 * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
 */
type GetCorporationsCorporationIdAlliancehistoryRecordId = number;
/**
 * start_date string
 */
type GetCorporationsCorporationIdAlliancehistoryStartDate = string;
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
  alliance_id?: GetCorporationsCorporationIdAlliancehistoryAllianceId;
  is_deleted?: GetCorporationsCorporationIdAlliancehistoryIsDeleted;
  record_id: GetCorporationsCorporationIdAlliancehistoryRecordId;
  start_date: GetCorporationsCorporationIdAlliancehistoryStartDate;
  [k: string]: unknown | undefined;
}
