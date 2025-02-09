/*!
 * ESI endpoint: get:/corporations/{corporation_id}/customs_offices/
 */
/**
 * Access is allowed only for entities with this level of standing or better
 */
type GetCorporationsCorporationIdCustomsOfficesStandingLevel =
  | "bad"
  | "excellent"
  | "good"
  | "neutral"
  | "terrible";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdCustomsOfficesOk = GetCorporationsCorporationIdCustomsOffices_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdCustomsOffices_200Ok {
  /**
   * Only present if alliance access is allowed
   */
  alliance_tax_rate?: number;
  /**
   * standing_level and any standing related tax rate only present when this is true
   */
  allow_access_with_standings: boolean;
  /**
   * allow_alliance_access boolean
   */
  allow_alliance_access: boolean;
  /**
   * bad_standing_tax_rate number
   */
  bad_standing_tax_rate?: number;
  /**
   * corporation_tax_rate number
   */
  corporation_tax_rate?: number;
  /**
   * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
   */
  excellent_standing_tax_rate?: number;
  /**
   * good_standing_tax_rate number
   */
  good_standing_tax_rate?: number;
  /**
   * neutral_standing_tax_rate number
   */
  neutral_standing_tax_rate?: number;
  /**
   * unique ID of this customs office
   */
  office_id: number;
  /**
   * reinforce_exit_end integer
   */
  reinforce_exit_end: number;
  /**
   * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
   */
  reinforce_exit_start: number;
  standing_level?: GetCorporationsCorporationIdCustomsOfficesStandingLevel;
  /**
   * ID of the solar system this customs office is located in
   */
  system_id: number;
  /**
   * terrible_standing_tax_rate number
   */
  terrible_standing_tax_rate?: number;
  [k: string]: unknown | undefined;
}
