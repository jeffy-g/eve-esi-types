// Generated by scripts/lib/code-synthesizer.mjs

// - - - - - - - - - - - - - - - - - - - -
//            @method {post}
// - - - - - - - - - - - - - - - - - - - -
/*!
 * ESI endpoint: post:/characters/affiliation/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostCharactersAffiliationOk = PostCharactersAffiliation_200Ok[];

/**
 * 200 ok object
 */
interface PostCharactersAffiliation_200Ok {
  /**
   * The character's alliance ID, if their corporation is in an alliance
   */
  alliance_id?: number;
  /**
   * The character's ID
   */
  character_id: number;
  /**
   * The character's corporation ID
   */
  corporation_id: number;
  /**
   * The character's faction ID, if their corporation is in a faction
   */
  faction_id?: number;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: post:/characters/{character_id}/cspa/
 */
/**
 * 201 created number
 */
type PostCharactersCharacterIdCspaCreated = number;

// - - - - - - - - - - - - - - - - - - - -
//            @method {get}
// - - - - - - - - - - - - - - - - - - - -
/*!
 * ESI endpoint: get:/characters/{character_id}/
 */
/**
 * gender string
 */
type GetCharactersCharacterIdGender = "female" | "male";

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdOk {
  /**
   * The character's alliance ID
   */
  alliance_id?: number;
  /**
   * Creation date of the character
   */
  birthday: string;
  /**
   * bloodline_id integer
   */
  bloodline_id: number;
  /**
   * The character's corporation ID
   */
  corporation_id: number;
  /**
   * description string
   */
  description?: string;
  /**
   * ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
   */
  faction_id?: number;
  gender: GetCharactersCharacterIdGender;
  /**
   * name string
   */
  name: string;
  /**
   * race_id integer
   */
  race_id: number;
  /**
   * security_status number
   */
  security_status?: number;
  /**
   * The individual title of the character
   */
  title?: string;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/agents_research/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdAgentsResearchOk = GetCharactersCharacterIdAgentsResearch_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdAgentsResearch_200Ok {
  /**
   * agent_id integer
   */
  agent_id: number;
  /**
   * points_per_day number
   */
  points_per_day: number;
  /**
   * remainder_points number
   */
  remainder_points: number;
  skill_type_id: number;
  /**
   * started_at string
   */
  started_at: string;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/blueprints/
 */
/**
 * Type of the location_id
 */
type GetCharactersCharacterIdBlueprintsLocationFlag =
  | "AutoFit"
  | "Cargo"
  | "CorpseBay"
  | "DroneBay"
  | "FleetHangar"
  | "Deliveries"
  | "HiddenModifiers"
  | "Hangar"
  | "HangarAll"
  | "LoSlot0"
  | "LoSlot1"
  | "LoSlot2"
  | "LoSlot3"
  | "LoSlot4"
  | "LoSlot5"
  | "LoSlot6"
  | "LoSlot7"
  | "MedSlot0"
  | "MedSlot1"
  | "MedSlot2"
  | "MedSlot3"
  | "MedSlot4"
  | "MedSlot5"
  | "MedSlot6"
  | "MedSlot7"
  | "HiSlot0"
  | "HiSlot1"
  | "HiSlot2"
  | "HiSlot3"
  | "HiSlot4"
  | "HiSlot5"
  | "HiSlot6"
  | "HiSlot7"
  | "AssetSafety"
  | "Locked"
  | "Unlocked"
  | "Implant"
  | "QuafeBay"
  | "RigSlot0"
  | "RigSlot1"
  | "RigSlot2"
  | "RigSlot3"
  | "RigSlot4"
  | "RigSlot5"
  | "RigSlot6"
  | "RigSlot7"
  | "ShipHangar"
  | "SpecializedFuelBay"
  | "SpecializedOreHold"
  | "SpecializedGasHold"
  | "SpecializedMineralHold"
  | "SpecializedSalvageHold"
  | "SpecializedShipHold"
  | "SpecializedSmallShipHold"
  | "SpecializedMediumShipHold"
  | "SpecializedLargeShipHold"
  | "SpecializedIndustrialShipHold"
  | "SpecializedAmmoHold"
  | "SpecializedCommandCenterHold"
  | "SpecializedPlanetaryCommoditiesHold"
  | "SpecializedMaterialBay"
  | "SubSystemSlot0"
  | "SubSystemSlot1"
  | "SubSystemSlot2"
  | "SubSystemSlot3"
  | "SubSystemSlot4"
  | "SubSystemSlot5"
  | "SubSystemSlot6"
  | "SubSystemSlot7"
  | "FighterBay"
  | "FighterTube0"
  | "FighterTube1"
  | "FighterTube2"
  | "FighterTube3"
  | "FighterTube4"
  | "Module";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdBlueprintsOk = GetCharactersCharacterIdBlueprints_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdBlueprints_200Ok {
  /**
   * Unique ID for this item.
   */
  item_id: number;
  location_flag: GetCharactersCharacterIdBlueprintsLocationFlag;
  /**
   * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
   */
  location_id: number;
  /**
   * Material Efficiency Level of the blueprint.
   */
  material_efficiency: number;
  /**
   * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   */
  quantity: number;
  /**
   * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   */
  runs: number;
  /**
   * Time Efficiency Level of the blueprint.
   */
  time_efficiency: number;
  type_id: number;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/corporationhistory/
 */
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetCharactersCharacterIdCorporationhistoryOk = GetCharactersCharacterIdCorporationhistory_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdCorporationhistory_200Ok {
  /**
   * corporation_id integer
   */
  corporation_id: number;
  /**
   * True if the corporation has been deleted
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

/*!
 * ESI endpoint: get:/characters/{character_id}/fatigue/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdFatigueOk {
  /**
   * Character's jump fatigue expiry
   */
  jump_fatigue_expire_date?: string;
  /**
   * Character's last jump activation
   */
  last_jump_date?: string;
  /**
   * Character's last jump update
   */
  last_update_date?: string;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/medals/
 */
/**
 * graphics array
 *
 * @minItems 3
 * @maxItems 9
 */
type GetCharactersCharacterIdMedalsGraphics = [
  GetCharactersCharacterIdMedalsGraphic,
  GetCharactersCharacterIdMedalsGraphic,
  GetCharactersCharacterIdMedalsGraphic,
  ...GetCharactersCharacterIdMedalsGraphic[]
];
/**
 * status string
 */
type GetCharactersCharacterIdMedalsStatus = "public" | "private";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdMedalsOk = GetCharactersCharacterIdMedals_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMedals_200Ok {
  /**
   * corporation_id integer
   */
  corporation_id: number;
  /**
   * date string
   */
  date: string;
  /**
   * description string
   */
  description: string;
  graphics: GetCharactersCharacterIdMedalsGraphics;
  /**
   * issuer_id integer
   */
  issuer_id: number;
  /**
   * medal_id integer
   */
  medal_id: number;
  /**
   * reason string
   */
  reason: string;
  status: GetCharactersCharacterIdMedalsStatus;
  /**
   * title string
   */
  title: string;
  [k: string]: unknown | undefined;
}
/**
 * graphic object
 */
interface GetCharactersCharacterIdMedalsGraphic {
  /**
   * color integer
   */
  color?: number;
  /**
   * graphic string
   */
  graphic: string;
  /**
   * layer integer
   */
  layer: number;
  /**
   * part integer
   */
  part: number;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/notifications/
 */
/**
 * sender_type string
 */
type GetCharactersCharacterIdNotificationsSenderType =
  | "character"
  | "corporation"
  | "alliance"
  | "faction"
  | "other";
/**
 * type string
 */
type GetCharactersCharacterIdNotificationsType =
  | "AcceptedAlly"
  | "AcceptedSurrender"
  | "AgentRetiredTrigravian"
  | "AllAnchoringMsg"
  | "AllMaintenanceBillMsg"
  | "AllStrucInvulnerableMsg"
  | "AllStructVulnerableMsg"
  | "AllWarCorpJoinedAllianceMsg"
  | "AllWarDeclaredMsg"
  | "AllWarInvalidatedMsg"
  | "AllWarRetractedMsg"
  | "AllWarSurrenderMsg"
  | "AllianceCapitalChanged"
  | "AllianceWarDeclaredV2"
  | "AllyContractCancelled"
  | "AllyJoinedWarAggressorMsg"
  | "AllyJoinedWarAllyMsg"
  | "AllyJoinedWarDefenderMsg"
  | "BattlePunishFriendlyFire"
  | "BillOutOfMoneyMsg"
  | "BillPaidCorpAllMsg"
  | "BountyClaimMsg"
  | "BountyESSShared"
  | "BountyESSTaken"
  | "BountyPlacedAlliance"
  | "BountyPlacedChar"
  | "BountyPlacedCorp"
  | "BountyYourBountyClaimed"
  | "BuddyConnectContactAdd"
  | "CharAppAcceptMsg"
  | "CharAppRejectMsg"
  | "CharAppWithdrawMsg"
  | "CharLeftCorpMsg"
  | "CharMedalMsg"
  | "CharTerminationMsg"
  | "CloneActivationMsg"
  | "CloneActivationMsg2"
  | "CloneMovedMsg"
  | "CloneRevokedMsg1"
  | "CloneRevokedMsg2"
  | "CombatOperationFinished"
  | "ContactAdd"
  | "ContactEdit"
  | "ContainerPasswordMsg"
  | "ContractRegionChangedToPochven"
  | "CorpAllBillMsg"
  | "CorpAppAcceptMsg"
  | "CorpAppInvitedMsg"
  | "CorpAppNewMsg"
  | "CorpAppRejectCustomMsg"
  | "CorpAppRejectMsg"
  | "CorpBecameWarEligible"
  | "CorpDividendMsg"
  | "CorpFriendlyFireDisableTimerCompleted"
  | "CorpFriendlyFireDisableTimerStarted"
  | "CorpFriendlyFireEnableTimerCompleted"
  | "CorpFriendlyFireEnableTimerStarted"
  | "CorpKicked"
  | "CorpLiquidationMsg"
  | "CorpNewCEOMsg"
  | "CorpNewsMsg"
  | "CorpNoLongerWarEligible"
  | "CorpOfficeExpirationMsg"
  | "CorpStructLostMsg"
  | "CorpTaxChangeMsg"
  | "CorpVoteCEORevokedMsg"
  | "CorpVoteMsg"
  | "CorpWarDeclaredMsg"
  | "CorpWarDeclaredV2"
  | "CorpWarFightingLegalMsg"
  | "CorpWarInvalidatedMsg"
  | "CorpWarRetractedMsg"
  | "CorpWarSurrenderMsg"
  | "CorporationGoalClosed"
  | "CorporationGoalCompleted"
  | "CorporationGoalCreated"
  | "CorporationGoalExpired"
  | "CorporationGoalLimitReached"
  | "CorporationGoalNameChange"
  | "CorporationLeft"
  | "CustomsMsg"
  | "DailyItemRewardAutoClaimed"
  | "DeclareWar"
  | "DistrictAttacked"
  | "DustAppAcceptedMsg"
  | "ESSMainBankLink"
  | "EntosisCaptureStarted"
  | "ExpertSystemExpired"
  | "ExpertSystemExpiryImminent"
  | "FWAllianceKickMsg"
  | "FWAllianceWarningMsg"
  | "FWCharKickMsg"
  | "FWCharRankGainMsg"
  | "FWCharRankLossMsg"
  | "FWCharWarningMsg"
  | "FWCorpJoinMsg"
  | "FWCorpKickMsg"
  | "FWCorpLeaveMsg"
  | "FWCorpWarningMsg"
  | "FacWarCorpJoinRequestMsg"
  | "FacWarCorpJoinWithdrawMsg"
  | "FacWarCorpLeaveRequestMsg"
  | "FacWarCorpLeaveWithdrawMsg"
  | "FacWarLPDisqualifiedEvent"
  | "FacWarLPDisqualifiedKill"
  | "FacWarLPPayoutEvent"
  | "FacWarLPPayoutKill"
  | "GameTimeAdded"
  | "GameTimeReceived"
  | "GameTimeSent"
  | "GiftReceived"
  | "IHubDestroyedByBillFailure"
  | "IncursionCompletedMsg"
  | "IndustryOperationFinished"
  | "IndustryTeamAuctionLost"
  | "IndustryTeamAuctionWon"
  | "InfrastructureHubBillAboutToExpire"
  | "InsuranceExpirationMsg"
  | "InsuranceFirstShipMsg"
  | "InsuranceInvalidatedMsg"
  | "InsuranceIssuedMsg"
  | "InsurancePayoutMsg"
  | "InvasionCompletedMsg"
  | "InvasionSystemLogin"
  | "InvasionSystemStart"
  | "JumpCloneDeletedMsg1"
  | "JumpCloneDeletedMsg2"
  | "KillReportFinalBlow"
  | "KillReportVictim"
  | "KillRightAvailable"
  | "KillRightAvailableOpen"
  | "KillRightEarned"
  | "KillRightUnavailable"
  | "KillRightUnavailableOpen"
  | "KillRightUsed"
  | "LPAutoRedeemed"
  | "LocateCharMsg"
  | "MadeWarMutual"
  | "MercOfferRetractedMsg"
  | "MercOfferedNegotiationMsg"
  | "MercenaryDenAttacked"
  | "MercenaryDenNewMTO"
  | "MercenaryDenReinforced"
  | "MissionCanceledTriglavian"
  | "MissionOfferExpirationMsg"
  | "MissionTimeoutMsg"
  | "MoonminingAutomaticFracture"
  | "MoonminingExtractionCancelled"
  | "MoonminingExtractionFinished"
  | "MoonminingExtractionStarted"
  | "MoonminingLaserFired"
  | "MutualWarExpired"
  | "MutualWarInviteAccepted"
  | "MutualWarInviteRejected"
  | "MutualWarInviteSent"
  | "NPCStandingsGained"
  | "NPCStandingsLost"
  | "OfferToAllyRetracted"
  | "OfferedSurrender"
  | "OfferedToAlly"
  | "OfficeLeaseCanceledInsufficientStandings"
  | "OldLscMessages"
  | "OperationFinished"
  | "OrbitalAttacked"
  | "OrbitalReinforced"
  | "OwnershipTransferred"
  | "RaffleCreated"
  | "RaffleExpired"
  | "RaffleFinished"
  | "ReimbursementMsg"
  | "ResearchMissionAvailableMsg"
  | "RetractsWar"
  | "SPAutoRedeemed"
  | "SeasonalChallengeCompleted"
  | "SkinSequencingCompleted"
  | "SkyhookDeployed"
  | "SkyhookDestroyed"
  | "SkyhookLostShields"
  | "SkyhookOnline"
  | "SkyhookUnderAttack"
  | "SovAllClaimAquiredMsg"
  | "SovAllClaimLostMsg"
  | "SovCommandNodeEventStarted"
  | "SovCorpBillLateMsg"
  | "SovCorpClaimFailMsg"
  | "SovDisruptorMsg"
  | "SovStationEnteredFreeport"
  | "SovStructureDestroyed"
  | "SovStructureReinforced"
  | "SovStructureSelfDestructCancel"
  | "SovStructureSelfDestructFinished"
  | "SovStructureSelfDestructRequested"
  | "SovereigntyIHDamageMsg"
  | "SovereigntySBUDamageMsg"
  | "SovereigntyTCUDamageMsg"
  | "StationAggressionMsg1"
  | "StationAggressionMsg2"
  | "StationConquerMsg"
  | "StationServiceDisabled"
  | "StationServiceEnabled"
  | "StationStateChangeMsg"
  | "StoryLineMissionAvailableMsg"
  | "StructureAnchoring"
  | "StructureCourierContractChanged"
  | "StructureDestroyed"
  | "StructureFuelAlert"
  | "StructureImpendingAbandonmentAssetsAtRisk"
  | "StructureItemsDelivered"
  | "StructureItemsMovedToSafety"
  | "StructureLostArmor"
  | "StructureLostShields"
  | "StructureLowReagentsAlert"
  | "StructureNoReagentsAlert"
  | "StructureOnline"
  | "StructurePaintPurchased"
  | "StructureServicesOffline"
  | "StructureUnanchoring"
  | "StructureUnderAttack"
  | "StructureWentHighPower"
  | "StructureWentLowPower"
  | "StructuresJobsCancelled"
  | "StructuresJobsPaused"
  | "StructuresReinforcementChanged"
  | "TowerAlertMsg"
  | "TowerResourceAlertMsg"
  | "TransactionReversalMsg"
  | "TutorialMsg"
  | "WarAdopted "
  | "WarAllyInherited"
  | "WarAllyOfferDeclinedMsg"
  | "WarConcordInvalidates"
  | "WarDeclared"
  | "WarEndedHqSecurityDrop"
  | "WarHQRemovedFromSpace"
  | "WarInherited"
  | "WarInvalid"
  | "WarRetracted"
  | "WarRetractedByConcord"
  | "WarSurrenderDeclinedMsg"
  | "WarSurrenderOfferMsg";
/**
 * 200 ok array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdNotificationsOk = GetCharactersCharacterIdNotifications_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdNotifications_200Ok {
  /**
   * is_read boolean
   */
  is_read?: boolean;
  /**
   * notification_id integer
   */
  notification_id: number;
  /**
   * sender_id integer
   */
  sender_id: number;
  sender_type: GetCharactersCharacterIdNotificationsSenderType;
  /**
   * text string
   */
  text?: string;
  /**
   * timestamp string
   */
  timestamp: string;
  type: GetCharactersCharacterIdNotificationsType;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/notifications/contacts/
 */
/**
 * 200 ok array
 *
 * @maxItems 50
 */
type GetCharactersCharacterIdNotificationsContactsOk = GetCharactersCharacterIdNotificationsContacts_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdNotificationsContacts_200Ok {
  /**
   * message string
   */
  message: string;
  /**
   * notification_id integer
   */
  notification_id: number;
  /**
   * send_date string
   */
  send_date: string;
  /**
   * sender_character_id integer
   */
  sender_character_id: number;
  /**
   * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
   */
  standing_level: number;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/portrait/
 */

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdPortraitOk {
  /**
   * px128x128 string
   */
  px128x128?: string;
  /**
   * px256x256 string
   */
  px256x256?: string;
  /**
   * px512x512 string
   */
  px512x512?: string;
  /**
   * px64x64 string
   */
  px64x64?: string;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/roles/
 */

/**
 * role string
 */
type __CharacterRole =
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
type CharacterRoleArray = __CharacterRole[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdRolesOk {
  /**
   * roles array
   *
   * @maxItems 100
   */
  roles?: CharacterRoleArray;

  /**
   * roles_at_base array
   *
   * @maxItems 100
   */
  roles_at_base?: CharacterRoleArray;

  /**
   * roles_at_hq array
   *
   * @maxItems 100
   */
  roles_at_hq?: CharacterRoleArray;

  /**
   * roles_at_other array
   *
   * @maxItems 100
   */
  roles_at_other?: CharacterRoleArray;

  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/standings/
 */
/**
 * from_type string
 */
type GetCharactersCharacterIdStandingsFromType = "agent" | "npc_corp" | "faction";
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetCharactersCharacterIdStandingsOk = GetCharactersCharacterIdStandings_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdStandings_200Ok {
  /**
   * from_id integer
   */
  from_id: number;
  from_type: GetCharactersCharacterIdStandingsFromType;
  /**
   * standing number
   */
  standing: number;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/titles/
 */
/**
 * 200 ok array
 *
 * @maxItems 16
 */
type GetCharactersCharacterIdTitlesOk = GetCharactersCharacterIdTitles_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdTitles_200Ok {
  /**
   * name string
   */
  name?: string;
  /**
   * title_id integer
   */
  title_id?: number;
  [k: string]: unknown | undefined;
}
