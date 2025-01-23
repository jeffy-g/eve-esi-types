/**
 * ESI endpoint: /corporations/{corporation_id}/structures/
 */

/**
 * ID of the corporation that owns the structure
 */
type GetCorporationsCorporationIdStructuresCorporationId = number;
/**
 * Date on which the structure will run out of fuel
 */
type GetCorporationsCorporationIdStructuresFuelExpires = string;
/**
 * The structure name
 */
type GetCorporationsCorporationIdStructuresName = string;
/**
 * The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect
 */
type GetCorporationsCorporationIdStructuresNextReinforceApply = string;
/**
 * The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply
 */
type GetCorporationsCorporationIdStructuresNextReinforceHour = number;
/**
 * The id of the ACL profile for this citadel
 */
type GetCorporationsCorporationIdStructuresProfileId = number;
/**
 * The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property
 */
type GetCorporationsCorporationIdStructuresReinforceHour = number;
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
 * name string
 */
type GetCorporationsCorporationIdStructuresServiceName = string;
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
 * Date at which the structure will move to it's next state
 */
type GetCorporationsCorporationIdStructuresStateTimerEnd = string;
/**
 * Date at which the structure entered it's current state
 */
type GetCorporationsCorporationIdStructuresStateTimerStart = string;
/**
 * The Item ID of the structure
 */
type GetCorporationsCorporationIdStructuresStructureId = number;
/**
 * The solar system the structure is in
 */
type GetCorporationsCorporationIdStructuresSystemId = number;
/**
 * The type id of the structure
 */
type GetCorporationsCorporationIdStructuresTypeId = number;
/**
 * Date at which the structure will unanchor
 */
type GetCorporationsCorporationIdStructuresUnanchorsAt = string;
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
  corporation_id: GetCorporationsCorporationIdStructuresCorporationId;
  fuel_expires?: GetCorporationsCorporationIdStructuresFuelExpires;
  name?: GetCorporationsCorporationIdStructuresName;
  next_reinforce_apply?: GetCorporationsCorporationIdStructuresNextReinforceApply;
  next_reinforce_hour?: GetCorporationsCorporationIdStructuresNextReinforceHour;
  profile_id: GetCorporationsCorporationIdStructuresProfileId;
  reinforce_hour?: GetCorporationsCorporationIdStructuresReinforceHour;
  services?: GetCorporationsCorporationIdStructuresServices;
  state: GetCorporationsCorporationIdStructuresState;
  state_timer_end?: GetCorporationsCorporationIdStructuresStateTimerEnd;
  state_timer_start?: GetCorporationsCorporationIdStructuresStateTimerStart;
  structure_id: GetCorporationsCorporationIdStructuresStructureId;
  system_id: GetCorporationsCorporationIdStructuresSystemId;
  type_id: GetCorporationsCorporationIdStructuresTypeId;
  unanchors_at?: GetCorporationsCorporationIdStructuresUnanchorsAt;
  [k: string]: unknown | undefined;
}
/**
 * service object
 */
interface GetCorporationsCorporationIdStructuresService {
  name: GetCorporationsCorporationIdStructuresServiceName;
  state: GetCorporationsCorporationIdStructuresServiceState;
  [k: string]: unknown | undefined;
}
