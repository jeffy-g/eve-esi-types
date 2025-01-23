/**
 * ESI endpoint: /corporations/{corporation_id}/roles/history/
 */

/**
 * changed_at string
 */
type GetCorporationsCorporationIdRolesHistoryChangedAt = string;
/**
 * The character whose roles are changed
 */
type GetCorporationsCorporationIdRolesHistoryCharacterId = number;
/**
 * ID of the character who issued this change
 */
type GetCorporationsCorporationIdRolesHistoryIssuerId = number;
/**
 * new_role string
 */
type GetCorporationsCorporationIdRolesHistoryNewRole =
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
 * new_roles array
 *
 * @maxItems 50
 */
type GetCorporationsCorporationIdRolesHistoryNewRoles = GetCorporationsCorporationIdRolesHistoryNewRole[];
/**
 * old_role string
 */
type GetCorporationsCorporationIdRolesHistoryOldRole =
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
 * old_roles array
 *
 * @maxItems 50
 */
type GetCorporationsCorporationIdRolesHistoryOldRoles = GetCorporationsCorporationIdRolesHistoryOldRole[];
/**
 * role_type string
 */
type GetCorporationsCorporationIdRolesHistoryRoleType =
  | "grantable_roles"
  | "grantable_roles_at_base"
  | "grantable_roles_at_hq"
  | "grantable_roles_at_other"
  | "roles"
  | "roles_at_base"
  | "roles_at_hq"
  | "roles_at_other";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdRolesHistoryOk = GetCorporationsCorporationIdRolesHistory_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdRolesHistory_200Ok {
  changed_at: GetCorporationsCorporationIdRolesHistoryChangedAt;
  character_id: GetCorporationsCorporationIdRolesHistoryCharacterId;
  issuer_id: GetCorporationsCorporationIdRolesHistoryIssuerId;
  new_roles: GetCorporationsCorporationIdRolesHistoryNewRoles;
  old_roles: GetCorporationsCorporationIdRolesHistoryOldRoles;
  role_type: GetCorporationsCorporationIdRolesHistoryRoleType;
  [k: string]: unknown | undefined;
}
