/**
 * ESI endpoint: /corporations/{corporation_id}/roles/
 */

/**
 * character_id integer
 */
type GetCorporationsCorporationIdRolesCharacterId = number;
/**
 * grantable_role string
 */
type GetCorporationsCorporationIdRolesGrantableRole =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * grantable_roles array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesGrantableRoles = GetCorporationsCorporationIdRolesGrantableRole[];
/**
 * grantable_roles_at_base string
 */
type GetCorporationsCorporationIdRolesGrantableRolesAtBaseGrantableRolesAtBase =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * grantable_roles_at_base array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesGrantableRolesAtBase =
  GetCorporationsCorporationIdRolesGrantableRolesAtBaseGrantableRolesAtBase[];
/**
 * grantable_roles_at_hq string
 */
type GetCorporationsCorporationIdRolesGrantableRolesAtHqGrantableRolesAtHq =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * grantable_roles_at_hq array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesGrantableRolesAtHq =
  GetCorporationsCorporationIdRolesGrantableRolesAtHqGrantableRolesAtHq[];
/**
 * grantable_roles_at_other string
 */
type GetCorporationsCorporationIdRolesGrantableRolesAtOtherGrantableRolesAtOther =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * grantable_roles_at_other array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesGrantableRolesAtOther =
  GetCorporationsCorporationIdRolesGrantableRolesAtOtherGrantableRolesAtOther[];
/**
 * role string
 */
type GetCorporationsCorporationIdRolesRole =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * roles array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesRoles = GetCorporationsCorporationIdRolesRole[];
/**
 * roles_at_base string
 */
type GetCorporationsCorporationIdRolesRolesAtBaseRolesAtBase =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * roles_at_base array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesRolesAtBase = GetCorporationsCorporationIdRolesRolesAtBaseRolesAtBase[];
/**
 * roles_at_hq string
 */
type GetCorporationsCorporationIdRolesRolesAtHqRolesAtHq =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * roles_at_hq array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesRolesAtHq = GetCorporationsCorporationIdRolesRolesAtHqRolesAtHq[];
/**
 * roles_at_other string
 */
type GetCorporationsCorporationIdRolesRolesAtOtherRolesAtOther =
  | "Account_Take_1"
  | "Account_Take_2"
  | "Account_Take_3"
  | "Account_Take_4"
  | "Account_Take_5"
  | "Account_Take_6"
  | "Account_Take_7"
  | "Accountant"
  | "Auditor"
  | "Brand_Manager"
  | "Communications_Officer"
  | "Config_Equipment"
  | "Config_Starbase_Equipment"
  | "Container_Take_1"
  | "Container_Take_2"
  | "Container_Take_3"
  | "Container_Take_4"
  | "Container_Take_5"
  | "Container_Take_6"
  | "Container_Take_7"
  | "Contract_Manager"
  | "Deliveries_Container_Take"
  | "Deliveries_Query"
  | "Deliveries_Take"
  | "Diplomat"
  | "Director"
  | "Factory_Manager"
  | "Fitting_Manager"
  | "Hangar_Query_1"
  | "Hangar_Query_2"
  | "Hangar_Query_3"
  | "Hangar_Query_4"
  | "Hangar_Query_5"
  | "Hangar_Query_6"
  | "Hangar_Query_7"
  | "Hangar_Take_1"
  | "Hangar_Take_2"
  | "Hangar_Take_3"
  | "Hangar_Take_4"
  | "Hangar_Take_5"
  | "Hangar_Take_6"
  | "Hangar_Take_7"
  | "Junior_Accountant"
  | "Personnel_Manager"
  | "Project_Manager"
  | "Rent_Factory_Facility"
  | "Rent_Office"
  | "Rent_Research_Facility"
  | "Security_Officer"
  | "Skill_Plan_Manager"
  | "Starbase_Defense_Operator"
  | "Starbase_Fuel_Technician"
  | "Station_Manager"
  | "Trader";
/**
 * roles_at_other array
 *
 * @maxItems 100
 */
type GetCorporationsCorporationIdRolesRolesAtOther = GetCorporationsCorporationIdRolesRolesAtOtherRolesAtOther[];
/**
 * 200 ok array
 *
 * @maxItems 12601
 */
type GetCorporationsCorporationIdRolesOk = GetCorporationsCorporationIdRoles_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdRoles_200Ok {
  character_id: GetCorporationsCorporationIdRolesCharacterId;
  grantable_roles?: GetCorporationsCorporationIdRolesGrantableRoles;
  grantable_roles_at_base?: GetCorporationsCorporationIdRolesGrantableRolesAtBase;
  grantable_roles_at_hq?: GetCorporationsCorporationIdRolesGrantableRolesAtHq;
  grantable_roles_at_other?: GetCorporationsCorporationIdRolesGrantableRolesAtOther;
  roles?: GetCorporationsCorporationIdRolesRoles;
  roles_at_base?: GetCorporationsCorporationIdRolesRolesAtBase;
  roles_at_hq?: GetCorporationsCorporationIdRolesRolesAtHq;
  roles_at_other?: GetCorporationsCorporationIdRolesRolesAtOther;
  [k: string]: unknown | undefined;
}
