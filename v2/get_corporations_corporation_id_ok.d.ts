/**
 * ESI endpoint: /corporations/{corporation_id}/
 */

/**
 * ID of the alliance that corporation is a member of, if any
 */
type GetCorporationsCorporationIdAllianceId = number;
/**
 * ceo_id integer
 */
type GetCorporationsCorporationIdCeoId = number;
/**
 * creator_id integer
 */
type GetCorporationsCorporationIdCreatorId = number;
/**
 * date_founded string
 */
type GetCorporationsCorporationIdDateFounded = string;
/**
 * description string
 */
type GetCorporationsCorporationIdDescription = string;
/**
 * faction_id integer
 */
type GetCorporationsCorporationIdFactionId = number;
/**
 * home_station_id integer
 */
type GetCorporationsCorporationIdHomeStationId = number;
/**
 * member_count integer
 */
type GetCorporationsCorporationIdMemberCount = number;
/**
 * the full name of the corporation
 */
type GetCorporationsCorporationIdName = string;
/**
 * shares integer
 */
type GetCorporationsCorporationIdShares = number;
/**
 * tax_rate number
 */
type GetCorporationsCorporationIdTaxRate = number;
/**
 * the short name of the corporation
 */
type GetCorporationsCorporationIdTicker = string;
/**
 * url string
 */
type GetCorporationsCorporationIdUrl = string;
/**
 * war_eligible boolean
 */
type GetCorporationsCorporationIdWarEligible = boolean;

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdOk {
  alliance_id?: GetCorporationsCorporationIdAllianceId;
  ceo_id: GetCorporationsCorporationIdCeoId;
  creator_id: GetCorporationsCorporationIdCreatorId;
  date_founded?: GetCorporationsCorporationIdDateFounded;
  description?: GetCorporationsCorporationIdDescription;
  faction_id?: GetCorporationsCorporationIdFactionId;
  home_station_id?: GetCorporationsCorporationIdHomeStationId;
  member_count: GetCorporationsCorporationIdMemberCount;
  name: GetCorporationsCorporationIdName;
  shares?: GetCorporationsCorporationIdShares;
  tax_rate: GetCorporationsCorporationIdTaxRate;
  ticker: GetCorporationsCorporationIdTicker;
  url?: GetCorporationsCorporationIdUrl;
  war_eligible?: GetCorporationsCorporationIdWarEligible;
  [k: string]: unknown | undefined;
}
