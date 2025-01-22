/**
 * ESI endpoint: /corporations/{corporation_id}/customs_offices/
 */

/**
 * Only present if alliance access is allowed
 */
type GetCorporationsCorporationIdCustomsOfficesAllianceTaxRate = number;
/**
 * standing_level and any standing related tax rate only present when this is true
 */
type GetCorporationsCorporationIdCustomsOfficesAllowAccessWithStandings = boolean;
/**
 * allow_alliance_access boolean
 */
type GetCorporationsCorporationIdCustomsOfficesAllowAllianceAccess = boolean;
/**
 * bad_standing_tax_rate number
 */
type GetCorporationsCorporationIdCustomsOfficesBadStandingTaxRate = number;
/**
 * corporation_tax_rate number
 */
type GetCorporationsCorporationIdCustomsOfficesCorporationTaxRate = number;
/**
 * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
 */
type GetCorporationsCorporationIdCustomsOfficesExcellentStandingTaxRate = number;
/**
 * good_standing_tax_rate number
 */
type GetCorporationsCorporationIdCustomsOfficesGoodStandingTaxRate = number;
/**
 * neutral_standing_tax_rate number
 */
type GetCorporationsCorporationIdCustomsOfficesNeutralStandingTaxRate = number;
/**
 * unique ID of this customs office
 */
type GetCorporationsCorporationIdCustomsOfficesOfficeId = number;
/**
 * reinforce_exit_end integer
 */
type GetCorporationsCorporationIdCustomsOfficesReinforceExitEnd = number;
/**
 * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
 */
type GetCorporationsCorporationIdCustomsOfficesReinforceExitStart = number;
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
 * ID of the solar system this customs office is located in
 */
type GetCorporationsCorporationIdCustomsOfficesSystemId = number;
/**
 * terrible_standing_tax_rate number
 */
type GetCorporationsCorporationIdCustomsOfficesTerribleStandingTaxRate = number;
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
  alliance_tax_rate?: GetCorporationsCorporationIdCustomsOfficesAllianceTaxRate;
  allow_access_with_standings: GetCorporationsCorporationIdCustomsOfficesAllowAccessWithStandings;
  allow_alliance_access: GetCorporationsCorporationIdCustomsOfficesAllowAllianceAccess;
  bad_standing_tax_rate?: GetCorporationsCorporationIdCustomsOfficesBadStandingTaxRate;
  corporation_tax_rate?: GetCorporationsCorporationIdCustomsOfficesCorporationTaxRate;
  excellent_standing_tax_rate?: GetCorporationsCorporationIdCustomsOfficesExcellentStandingTaxRate;
  good_standing_tax_rate?: GetCorporationsCorporationIdCustomsOfficesGoodStandingTaxRate;
  neutral_standing_tax_rate?: GetCorporationsCorporationIdCustomsOfficesNeutralStandingTaxRate;
  office_id: GetCorporationsCorporationIdCustomsOfficesOfficeId;
  reinforce_exit_end: GetCorporationsCorporationIdCustomsOfficesReinforceExitEnd;
  reinforce_exit_start: GetCorporationsCorporationIdCustomsOfficesReinforceExitStart;
  standing_level?: GetCorporationsCorporationIdCustomsOfficesStandingLevel;
  system_id: GetCorporationsCorporationIdCustomsOfficesSystemId;
  terrible_standing_tax_rate?: GetCorporationsCorporationIdCustomsOfficesTerribleStandingTaxRate;
  [k: string]: unknown | undefined;
}
