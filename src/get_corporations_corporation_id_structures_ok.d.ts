/*!
 * ESI endpoint: /corporations/{corporation_id}/structures/
 */
/**
 * Contains a list of service upgrades, and their state
 *
 * @maxItems 10
 */
type GetCorporationsCorporationIdStructuresServices =
  | []
  | [GetCorporationsCorporationIdStructuresService]
  | [GetCorporationsCorporationIdStructuresService, GetCorporationsCorporationIdStructuresService]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ]
  | [
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService,
      GetCorporationsCorporationIdStructuresService
    ];
/**
 * state string
 */
type GetCorporationsCorporationIdStructuresServiceState = "online" | "offline" | "cleanup";
/**
 * state string
 */
type GetCorporationsCorporationIdStructuresState =
  | "anchor_vulnerable"
  | "anchoring"
  | "armor_reinforce"
  | "armor_vulnerable"
  | "deploy_vulnerable"
  | "fitting_invulnerable"
  | "hull_reinforce"
  | "hull_vulnerable"
  | "online_deprecated"
  | "onlining_vulnerable"
  | "shield_vulnerable"
  | "unanchored"
  | "unknown";
/**
 * 200 ok array
 *
 * @maxItems 250
 */
type GetCorporationsCorporationIdStructuresOk = GetCorporationsCorporationIdStructures_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdStructures_200Ok {
  /**
   * ID of the corporation that owns the structure
   */
  corporation_id: number;
  /**
   * Date on which the structure will run out of fuel
   */
  fuel_expires?: string;
  /**
   * The structure name
   */
  name?: string;
  /**
   * The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect
   */
  next_reinforce_apply?: string;
  /**
   * The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply
   */
  next_reinforce_hour?: number;
  /**
   * The id of the ACL profile for this citadel
   */
  profile_id: number;
  /**
   * The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property
   */
  reinforce_hour?: number;
  services?: GetCorporationsCorporationIdStructuresServices;
  state: GetCorporationsCorporationIdStructuresState;
  /**
   * Date at which the structure will move to it's next state
   */
  state_timer_end?: string;
  /**
   * Date at which the structure entered it's current state
   */
  state_timer_start?: string;
  /**
   * The Item ID of the structure
   */
  structure_id: number;
  /**
   * The solar system the structure is in
   */
  system_id: number;
  type_id: number;
  /**
   * Date at which the structure will unanchor
   */
  unanchors_at?: string;
  [k: string]: unknown | undefined;
}
/**
 * service object
 */
interface GetCorporationsCorporationIdStructuresService {
  /**
   * name string
   */
  name: string;
  state: GetCorporationsCorporationIdStructuresServiceState;
  [k: string]: unknown | undefined;
}
