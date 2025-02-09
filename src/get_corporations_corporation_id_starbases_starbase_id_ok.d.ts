/*!
 * ESI endpoint: get:/corporations/{corporation_id}/starbases/{starbase_id}/
 */
/**
 * Who can anchor starbase (POS) and its structures
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdAnchor =
  | "alliance_member"
  | "config_starbase_equipment_role"
  | "corporation_member"
  | "starbase_fuel_technician_role";
/**
 * Who can take fuel blocks out of the starbase (POS)'s fuel bay
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdFuelBayTake =
  | "alliance_member"
  | "config_starbase_equipment_role"
  | "corporation_member"
  | "starbase_fuel_technician_role";
/**
 * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdFuelBayView =
  | "alliance_member"
  | "config_starbase_equipment_role"
  | "corporation_member"
  | "starbase_fuel_technician_role";
/**
 * Fuel blocks and other things that will be consumed when operating a starbase (POS)
 *
 * @maxItems 20
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdFuels =
  | []
  | [GetCorporationsCorporationIdStarbasesStarbaseIdFuel]
  | [GetCorporationsCorporationIdStarbasesStarbaseIdFuel, GetCorporationsCorporationIdStarbasesStarbaseIdFuel]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ]
  | [
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel,
      GetCorporationsCorporationIdStarbasesStarbaseIdFuel
    ];
/**
 * Who can offline starbase (POS) and its structures
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdOffline =
  | "alliance_member"
  | "config_starbase_equipment_role"
  | "corporation_member"
  | "starbase_fuel_technician_role";
/**
 * Who can online starbase (POS) and its structures
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdOnline =
  | "alliance_member"
  | "config_starbase_equipment_role"
  | "corporation_member"
  | "starbase_fuel_technician_role";
/**
 * Who can unanchor starbase (POS) and its structures
 */
type GetCorporationsCorporationIdStarbasesStarbaseIdUnanchor =
  | "alliance_member"
  | "config_starbase_equipment_role"
  | "corporation_member"
  | "starbase_fuel_technician_role";

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdStarbasesStarbaseIdOk {
  /**
   * allow_alliance_members boolean
   */
  allow_alliance_members: boolean;
  /**
   * allow_corporation_members boolean
   */
  allow_corporation_members: boolean;
  anchor: GetCorporationsCorporationIdStarbasesStarbaseIdAnchor;
  /**
   * attack_if_at_war boolean
   */
  attack_if_at_war: boolean;
  /**
   * attack_if_other_security_status_dropping boolean
   */
  attack_if_other_security_status_dropping: boolean;
  /**
   * Starbase (POS) will attack if target's security standing is lower than this value
   */
  attack_security_status_threshold?: number;
  /**
   * Starbase (POS) will attack if target's standing is lower than this value
   */
  attack_standing_threshold?: number;
  fuel_bay_take: GetCorporationsCorporationIdStarbasesStarbaseIdFuelBayTake;
  fuel_bay_view: GetCorporationsCorporationIdStarbasesStarbaseIdFuelBayView;
  fuels?: GetCorporationsCorporationIdStarbasesStarbaseIdFuels;
  offline: GetCorporationsCorporationIdStarbasesStarbaseIdOffline;
  online: GetCorporationsCorporationIdStarbasesStarbaseIdOnline;
  unanchor: GetCorporationsCorporationIdStarbasesStarbaseIdUnanchor;
  /**
   * True if the starbase (POS) is using alliance standings, otherwise using corporation's
   */
  use_alliance_standings: boolean;
  [k: string]: unknown | undefined;
}
/**
 * fuel object
 */
interface GetCorporationsCorporationIdStarbasesStarbaseIdFuel {
  /**
   * quantity integer
   */
  quantity: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
