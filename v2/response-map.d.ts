/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * THIS DTS IS AUTO GENERATED, DO NOT EDIT
 * 
 * @file eve-esi-types/v2/response-map.d.ts
 * @summary This file is auto-generated and defines version 3.2.3 of the EVE Online ESI response types.
 */
import "./types-index.d.ts";


export type TESIResponseOKMap = {
  get: {
    "/alliances/": {
      result: GetAlliancesOk;
      tag: "Alliance";
      cachedSeconds: 3600;
    },
    "/alliances/{alliance_id}/": {
      result: GetAlliancesAllianceIdOk;
      tag: "Alliance";
      cachedSeconds: 3600;
    },
    "/alliances/{alliance_id}/contacts/": {
      result: GetAlliancesAllianceIdContactsOk;
      /** `esi-alliances.read_contacts.v1` */
      auth: true;
      tag: "Contacts";
      cachedSeconds: 300;
    },
    "/alliances/{alliance_id}/contacts/labels/": {
      result: GetAlliancesAllianceIdContactsLabelsOk;
      /** `esi-alliances.read_contacts.v1` */
      auth: true;
      tag: "Contacts";
      cachedSeconds: 300;
    },
    "/alliances/{alliance_id}/corporations/": {
      result: GetAlliancesAllianceIdCorporationsOk;
      tag: "Alliance";
      cachedSeconds: 3600;
    },
    "/alliances/{alliance_id}/icons/": {
      result: GetAlliancesAllianceIdIconsOk;
      tag: "Alliance";
    },
    "/characters/{character_id}/": {
      result: GetCharactersCharacterIdOk;
      tag: "Character";
      cachedSeconds: 604800;
    },
    "/characters/{character_id}/agents_research/": {
      result: GetCharactersCharacterIdAgentsResearchOk;
      /** `esi-characters.read_agents_research.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/assets/": {
      result: GetCharactersCharacterIdAssetsOk;
      /** `esi-assets.read_assets.v1` */
      auth: true;
      tag: "Assets";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/attributes/": {
      result: GetCharactersCharacterIdAttributesOk;
      /** `esi-skills.read_skills.v1` */
      auth: true;
      tag: "Skills";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/blueprints/": {
      result: GetCharactersCharacterIdBlueprintsOk;
      /** `esi-characters.read_blueprints.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/calendar/": {
      result: GetCharactersCharacterIdCalendarOk;
      query: {
        from_event?: number;
      },
      /** `esi-calendar.read_calendar_events.v1` */
      auth: true;
      tag: "Calendar";
      cachedSeconds: 5;
    },
    "/characters/{character_id}/calendar/{event_id}/": {
      result: GetCharactersCharacterIdCalendarEventIdOk;
      /** `esi-calendar.read_calendar_events.v1` */
      auth: true;
      tag: "Calendar";
      cachedSeconds: 5;
    },
    "/characters/{character_id}/calendar/{event_id}/attendees/": {
      result: GetCharactersCharacterIdCalendarEventIdAttendeesOk;
      /** `esi-calendar.read_calendar_events.v1` */
      auth: true;
      tag: "Calendar";
      cachedSeconds: 600;
    },
    "/characters/{character_id}/clones/": {
      result: GetCharactersCharacterIdClonesOk;
      /** `esi-clones.read_clones.v1` */
      auth: true;
      tag: "Clones";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/contacts/": {
      result: GetCharactersCharacterIdContactsOk;
      /** `esi-characters.read_contacts.v1` */
      auth: true;
      tag: "Contacts";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/contacts/labels/": {
      result: GetCharactersCharacterIdContactsLabelsOk;
      /** `esi-characters.read_contacts.v1` */
      auth: true;
      tag: "Contacts";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/contracts/": {
      result: GetCharactersCharacterIdContractsOk;
      /** `esi-contracts.read_character_contracts.v1` */
      auth: true;
      tag: "Contracts";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/contracts/{contract_id}/bids/": {
      result: GetCharactersCharacterIdContractsContractIdBidsOk;
      /** `esi-contracts.read_character_contracts.v1` */
      auth: true;
      tag: "Contracts";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/contracts/{contract_id}/items/": {
      result: GetCharactersCharacterIdContractsContractIdItemsOk;
      /** `esi-contracts.read_character_contracts.v1` */
      auth: true;
      tag: "Contracts";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/corporationhistory/": {
      result: GetCharactersCharacterIdCorporationhistoryOk;
      tag: "Character";
      cachedSeconds: 86400;
    },
    "/characters/{character_id}/fatigue/": {
      result: GetCharactersCharacterIdFatigueOk;
      /** `esi-characters.read_fatigue.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/fittings/": {
      result: GetCharactersCharacterIdFittingsOk;
      /** `esi-fittings.read_fittings.v1` */
      auth: true;
      tag: "Fittings";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/fleet/": {
      result: GetCharactersCharacterIdFleetOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
      tag: "Fleets";
      cachedSeconds: 60;
    },
    "/characters/{character_id}/fw/stats/": {
      result: GetCharactersCharacterIdFwStatsOk;
      /** `esi-characters.read_fw_stats.v1` */
      auth: true;
      tag: "Faction Warfare";
    },
    "/characters/{character_id}/implants/": {
      result: GetCharactersCharacterIdImplantsOk;
      /** `esi-clones.read_implants.v1` */
      auth: true;
      tag: "Clones";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/industry/jobs/": {
      result: GetCharactersCharacterIdIndustryJobsOk;
      query: {
        include_completed?: boolean;
      },
      /** `esi-industry.read_character_jobs.v1` */
      auth: true;
      tag: "Industry";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/killmails/recent/": {
      result: GetCharactersCharacterIdKillmailsRecentOk;
      /** `esi-killmails.read_killmails.v1` */
      auth: true;
      tag: "Killmails";
      cachedSeconds: 300;
    },
    "/characters/{character_id}/location/": {
      result: GetCharactersCharacterIdLocationOk;
      /** `esi-location.read_location.v1` */
      auth: true;
      tag: "Location";
      cachedSeconds: 5;
    },
    "/characters/{character_id}/loyalty/points/": {
      result: GetCharactersCharacterIdLoyaltyPointsOk;
      /** `esi-characters.read_loyalty.v1` */
      auth: true;
      tag: "Loyalty";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/mail/": {
      result: GetCharactersCharacterIdMailOk;
      query: {
        labels?: GetCharactersCharacterIdMailLabels;
        last_mail_id?: number;
      },
      /** `esi-mail.read_mail.v1` */
      auth: true;
      tag: "Mail";
      cachedSeconds: 30;
    },
    "/characters/{character_id}/mail/labels/": {
      result: GetCharactersCharacterIdMailLabelsOk;
      /** `esi-mail.read_mail.v1` */
      auth: true;
      tag: "Mail";
      cachedSeconds: 30;
    },
    "/characters/{character_id}/mail/lists/": {
      result: GetCharactersCharacterIdMailListsOk;
      /** `esi-mail.read_mail.v1` */
      auth: true;
      tag: "Mail";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/mail/{mail_id}/": {
      result: GetCharactersCharacterIdMailMailIdOk;
      /** `esi-mail.read_mail.v1` */
      auth: true;
      tag: "Mail";
      cachedSeconds: 30;
    },
    "/characters/{character_id}/medals/": {
      result: GetCharactersCharacterIdMedalsOk;
      /** `esi-characters.read_medals.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/mining/": {
      result: GetCharactersCharacterIdMiningOk;
      /** `esi-industry.read_character_mining.v1` */
      auth: true;
      tag: "Industry";
      cachedSeconds: 600;
    },
    "/characters/{character_id}/notifications/": {
      result: GetCharactersCharacterIdNotificationsOk;
      /** `esi-characters.read_notifications.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 600;
    },
    "/characters/{character_id}/notifications/contacts/": {
      result: GetCharactersCharacterIdNotificationsContactsOk;
      /** `esi-characters.read_notifications.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 600;
    },
    "/characters/{character_id}/online/": {
      result: GetCharactersCharacterIdOnlineOk;
      /** `esi-location.read_online.v1` */
      auth: true;
      tag: "Location";
      cachedSeconds: 60;
    },
    "/characters/{character_id}/orders/": {
      result: GetCharactersCharacterIdOrdersOk;
      /** `esi-markets.read_character_orders.v1` */
      auth: true;
      tag: "Market";
      cachedSeconds: 1200;
    },
    "/characters/{character_id}/orders/history/": {
      result: GetCharactersCharacterIdOrdersHistoryOk;
      /** `esi-markets.read_character_orders.v1` */
      auth: true;
      tag: "Market";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/planets/": {
      result: GetCharactersCharacterIdPlanetsOk;
      /** `esi-planets.manage_planets.v1` */
      auth: true;
      tag: "Planetary Interaction";
      cachedSeconds: 600;
    },
    "/characters/{character_id}/planets/{planet_id}/": {
      result: GetCharactersCharacterIdPlanetsPlanetIdOk;
      /** `esi-planets.manage_planets.v1` */
      auth: true;
      tag: "Planetary Interaction";
    },
    "/characters/{character_id}/portrait/": {
      result: GetCharactersCharacterIdPortraitOk;
      tag: "Character";
    },
    "/characters/{character_id}/roles/": {
      result: GetCharactersCharacterIdRolesOk;
      /** `esi-characters.read_corporation_roles.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/search/": {
      result: GetCharactersCharacterIdSearchOk;
      query: {
        categories: GetCharactersCharacterIdSearchCategories;
        search: GetCharactersCharacterIdSearchSearch;
        strict?: boolean;
      },
      /** `esi-search.search_structures.v1` */
      auth: true;
      tag: "Search";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/ship/": {
      result: GetCharactersCharacterIdShipOk;
      /** `esi-location.read_ship_type.v1` */
      auth: true;
      tag: "Location";
      cachedSeconds: 5;
    },
    "/characters/{character_id}/skillqueue/": {
      result: GetCharactersCharacterIdSkillqueueOk;
      /** `esi-skills.read_skillqueue.v1` */
      auth: true;
      tag: "Skills";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/skills/": {
      result: GetCharactersCharacterIdSkillsOk;
      /** `esi-skills.read_skills.v1` */
      auth: true;
      tag: "Skills";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/standings/": {
      result: GetCharactersCharacterIdStandingsOk;
      /** `esi-characters.read_standings.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/titles/": {
      result: GetCharactersCharacterIdTitlesOk;
      /** `esi-characters.read_titles.v1` */
      auth: true;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/wallet/": {
      result: GetCharactersCharacterIdWalletOk;
      /** `esi-wallet.read_character_wallet.v1` */
      auth: true;
      tag: "Wallet";
      cachedSeconds: 120;
    },
    "/characters/{character_id}/wallet/journal/": {
      result: GetCharactersCharacterIdWalletJournalOk;
      /** `esi-wallet.read_character_wallet.v1` */
      auth: true;
      tag: "Wallet";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/wallet/transactions/": {
      result: GetCharactersCharacterIdWalletTransactionsOk;
      query: {
        from_id?: number;
      },
      /** `esi-wallet.read_character_wallet.v1` */
      auth: true;
      tag: "Wallet";
      cachedSeconds: 3600;
    },
    "/contracts/public/bids/{contract_id}/": {
      result: GetContractsPublicBidsContractIdOk;
      tag: "Contracts";
      cachedSeconds: 300;
    },
    "/contracts/public/items/{contract_id}/": {
      result: GetContractsPublicItemsContractIdOk;
      tag: "Contracts";
      cachedSeconds: 3600;
    },
    "/contracts/public/{region_id}/": {
      result: GetContractsPublicRegionIdOk;
      tag: "Contracts";
      cachedSeconds: 1800;
    },
    "/corporation/{corporation_id}/mining/extractions/": {
      result: GetCorporationCorporationIdMiningExtractionsOk;
      /** `esi-industry.read_corporation_mining.v1` */
      auth: true;
      tag: "Industry";
      cachedSeconds: 1800;
    },
    "/corporation/{corporation_id}/mining/observers/": {
      result: GetCorporationCorporationIdMiningObserversOk;
      /** `esi-industry.read_corporation_mining.v1` */
      auth: true;
      tag: "Industry";
      cachedSeconds: 3600;
    },
    "/corporation/{corporation_id}/mining/observers/{observer_id}/": {
      result: GetCorporationCorporationIdMiningObserversObserverIdOk;
      /** `esi-industry.read_corporation_mining.v1` */
      auth: true;
      tag: "Industry";
      cachedSeconds: 3600;
    },
    "/corporations/npccorps/": {
      result: GetCorporationsNpccorpsOk;
      tag: "Corporation";
    },
    "/corporations/{corporation_id}/": {
      result: GetCorporationsCorporationIdOk;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/alliancehistory/": {
      result: GetCorporationsCorporationIdAlliancehistoryOk;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/assets/": {
      result: GetCorporationsCorporationIdAssetsOk;
      /** `esi-assets.read_corporation_assets.v1` */
      auth: true;
      tag: "Assets";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/blueprints/": {
      result: GetCorporationsCorporationIdBlueprintsOk;
      /** `esi-corporations.read_blueprints.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/contacts/": {
      result: GetCorporationsCorporationIdContactsOk;
      /** `esi-corporations.read_contacts.v1` */
      auth: true;
      tag: "Contacts";
      cachedSeconds: 300;
    },
    "/corporations/{corporation_id}/contacts/labels/": {
      result: GetCorporationsCorporationIdContactsLabelsOk;
      /** `esi-corporations.read_contacts.v1` */
      auth: true;
      tag: "Contacts";
      cachedSeconds: 300;
    },
    "/corporations/{corporation_id}/containers/logs/": {
      result: GetCorporationsCorporationIdContainersLogsOk;
      /** `esi-corporations.read_container_logs.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 600;
    },
    "/corporations/{corporation_id}/contracts/": {
      result: GetCorporationsCorporationIdContractsOk;
      /** `esi-contracts.read_corporation_contracts.v1` */
      auth: true;
      tag: "Contracts";
      cachedSeconds: 300;
    },
    "/corporations/{corporation_id}/contracts/{contract_id}/bids/": {
      result: GetCorporationsCorporationIdContractsContractIdBidsOk;
      /** `esi-contracts.read_corporation_contracts.v1` */
      auth: true;
      tag: "Contracts";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/contracts/{contract_id}/items/": {
      result: GetCorporationsCorporationIdContractsContractIdItemsOk;
      /** `esi-contracts.read_corporation_contracts.v1` */
      auth: true;
      tag: "Contracts";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/customs_offices/": {
      result: GetCorporationsCorporationIdCustomsOfficesOk;
      /** `esi-planets.read_customs_offices.v1` */
      auth: true;
      tag: "Planetary Interaction";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/divisions/": {
      result: GetCorporationsCorporationIdDivisionsOk;
      /** `esi-corporations.read_divisions.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/facilities/": {
      result: GetCorporationsCorporationIdFacilitiesOk;
      /** `esi-corporations.read_facilities.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/fw/stats/": {
      result: GetCorporationsCorporationIdFwStatsOk;
      /** `esi-corporations.read_fw_stats.v1` */
      auth: true;
      tag: "Faction Warfare";
    },
    "/corporations/{corporation_id}/icons/": {
      result: GetCorporationsCorporationIdIconsOk;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/industry/jobs/": {
      result: GetCorporationsCorporationIdIndustryJobsOk;
      query: {
        include_completed?: boolean;
      },
      /** `esi-industry.read_corporation_jobs.v1` */
      auth: true;
      tag: "Industry";
      cachedSeconds: 300;
    },
    "/corporations/{corporation_id}/killmails/recent/": {
      result: GetCorporationsCorporationIdKillmailsRecentOk;
      /** `esi-killmails.read_corporation_killmails.v1` */
      auth: true;
      tag: "Killmails";
      cachedSeconds: 300;
    },
    "/corporations/{corporation_id}/medals/": {
      result: GetCorporationsCorporationIdMedalsOk;
      /** `esi-corporations.read_medals.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/medals/issued/": {
      result: GetCorporationsCorporationIdMedalsIssuedOk;
      /** `esi-corporations.read_medals.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/members/": {
      result: GetCorporationsCorporationIdMembersOk;
      /** `esi-corporations.read_corporation_membership.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/members/limit/": {
      result: GetCorporationsCorporationIdMembersLimitOk;
      /** `esi-corporations.track_members.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/members/titles/": {
      result: GetCorporationsCorporationIdMembersTitlesOk;
      /** `esi-corporations.read_titles.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/membertracking/": {
      result: GetCorporationsCorporationIdMembertrackingOk;
      /** `esi-corporations.track_members.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/orders/": {
      result: GetCorporationsCorporationIdOrdersOk;
      /** `esi-markets.read_corporation_orders.v1` */
      auth: true;
      tag: "Market";
      cachedSeconds: 1200;
    },
    "/corporations/{corporation_id}/orders/history/": {
      result: GetCorporationsCorporationIdOrdersHistoryOk;
      /** `esi-markets.read_corporation_orders.v1` */
      auth: true;
      tag: "Market";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/roles/": {
      result: GetCorporationsCorporationIdRolesOk;
      /** `esi-corporations.read_corporation_membership.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/roles/history/": {
      result: GetCorporationsCorporationIdRolesHistoryOk;
      /** `esi-corporations.read_corporation_membership.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/shareholders/": {
      result: GetCorporationsCorporationIdShareholdersOk;
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/standings/": {
      result: GetCorporationsCorporationIdStandingsOk;
      /** `esi-corporations.read_standings.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/starbases/": {
      result: GetCorporationsCorporationIdStarbasesOk;
      /** `esi-corporations.read_starbases.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/starbases/{starbase_id}/": {
      result: GetCorporationsCorporationIdStarbasesStarbaseIdOk;
      query: {
        system_id: number;
      },
      /** `esi-corporations.read_starbases.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/structures/": {
      result: GetCorporationsCorporationIdStructuresOk;
      /** `esi-corporations.read_structures.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/titles/": {
      result: GetCorporationsCorporationIdTitlesOk;
      /** `esi-corporations.read_titles.v1` */
      auth: true;
      tag: "Corporation";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/wallets/": {
      result: GetCorporationsCorporationIdWalletsOk;
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
      tag: "Wallet";
      cachedSeconds: 300;
    },
    "/corporations/{corporation_id}/wallets/{division}/journal/": {
      result: GetCorporationsCorporationIdWalletsDivisionJournalOk;
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
      tag: "Wallet";
      cachedSeconds: 3600;
    },
    "/corporations/{corporation_id}/wallets/{division}/transactions/": {
      result: GetCorporationsCorporationIdWalletsDivisionTransactionsOk;
      query: {
        from_id?: number;
      },
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
      tag: "Wallet";
      cachedSeconds: 3600;
    },
    "/dogma/attributes/": {
      result: GetDogmaAttributesOk;
      tag: "Dogma";
    },
    "/dogma/attributes/{attribute_id}/": {
      result: GetDogmaAttributesAttributeIdOk;
      tag: "Dogma";
    },
    "/dogma/dynamic/items/{type_id}/{item_id}/": {
      result: GetDogmaDynamicItemsTypeIdItemIdOk;
      tag: "Dogma";
    },
    "/dogma/effects/": {
      result: GetDogmaEffectsOk;
      tag: "Dogma";
    },
    "/dogma/effects/{effect_id}/": {
      result: GetDogmaEffectsEffectIdOk;
      tag: "Dogma";
    },
    "/fleets/{fleet_id}/": {
      result: GetFleetsFleetIdOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
      tag: "Fleets";
      cachedSeconds: 5;
    },
    "/fleets/{fleet_id}/members/": {
      result: GetFleetsFleetIdMembersOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
      tag: "Fleets";
      cachedSeconds: 5;
    },
    "/fleets/{fleet_id}/wings/": {
      result: GetFleetsFleetIdWingsOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
      tag: "Fleets";
      cachedSeconds: 5;
    },
    "/fw/leaderboards/": {
      result: GetFwLeaderboardsOk;
      tag: "Faction Warfare";
    },
    "/fw/leaderboards/characters/": {
      result: GetFwLeaderboardsCharactersOk;
      tag: "Faction Warfare";
    },
    "/fw/leaderboards/corporations/": {
      result: GetFwLeaderboardsCorporationsOk;
      tag: "Faction Warfare";
    },
    "/fw/stats/": {
      result: GetFwStatsOk;
      tag: "Faction Warfare";
    },
    "/fw/systems/": {
      result: GetFwSystemsOk;
      tag: "Faction Warfare";
      cachedSeconds: 1800;
    },
    "/fw/wars/": {
      result: GetFwWarsOk;
      tag: "Faction Warfare";
    },
    "/incursions/": {
      result: GetIncursionsOk;
      tag: "Incursions";
      cachedSeconds: 300;
    },
    "/industry/facilities/": {
      result: GetIndustryFacilitiesOk;
      tag: "Industry";
      cachedSeconds: 3600;
    },
    "/industry/systems/": {
      result: GetIndustrySystemsOk;
      tag: "Industry";
      cachedSeconds: 3600;
    },
    "/insurance/prices/": {
      result: GetInsurancePricesOk;
      tag: "Insurance";
      cachedSeconds: 3600;
    },
    "/killmails/{killmail_id}/{killmail_hash}/": {
      result: GetKillmailsKillmailIdKillmailHashOk;
      tag: "Killmails";
      cachedSeconds: 30758400;
    },
    "/loyalty/stores/{corporation_id}/offers/": {
      result: GetLoyaltyStoresCorporationIdOffersOk;
      tag: "Loyalty";
    },
    "/markets/groups/": {
      result: GetMarketsGroupsOk;
      tag: "Market";
    },
    "/markets/groups/{market_group_id}/": {
      result: GetMarketsGroupsMarketGroupIdOk;
      tag: "Market";
    },
    "/markets/prices/": {
      result: GetMarketsPricesOk;
      tag: "Market";
      cachedSeconds: 3600;
    },
    "/markets/structures/{structure_id}/": {
      result: GetMarketsStructuresStructureIdOk;
      /** `esi-markets.structure_markets.v1` */
      auth: true;
      tag: "Market";
      cachedSeconds: 300;
    },
    "/markets/{region_id}/history/": {
      result: GetMarketsRegionIdHistoryOk;
      query: {
        type_id: number;
      },
      tag: "Market";
    },
    "/markets/{region_id}/orders/": {
      result: GetMarketsRegionIdOrdersOk;
      query: {
        order_type: GetMarketsRegionIdOrdersOrderType;
        type_id?: number;
      },
      tag: "Market";
      cachedSeconds: 300;
    },
    "/markets/{region_id}/types/": {
      result: GetMarketsRegionIdTypesOk;
      tag: "Market";
      cachedSeconds: 600;
    },
    "/route/{origin}/{destination}/": {
      result: GetRouteOriginDestinationOk;
      query: {
        avoid?: GetRouteOriginDestinationAvoid;
        connections?: GetRouteOriginDestinationConnections;
        flag?: GetRouteOriginDestinationFlag;
      },
      tag: "Routes";
      cachedSeconds: 86400;
    },
    "/sovereignty/campaigns/": {
      result: GetSovereigntyCampaignsOk;
      tag: "Sovereignty";
      cachedSeconds: 5;
    },
    "/sovereignty/map/": {
      result: GetSovereigntyMapOk;
      tag: "Sovereignty";
      cachedSeconds: 3600;
    },
    "/sovereignty/structures/": {
      result: GetSovereigntyStructuresOk;
      tag: "Sovereignty";
      cachedSeconds: 120;
    },
    "/status/": {
      result: GetStatusOk;
      tag: "Status";
      cachedSeconds: 30;
    },
    "/universe/ancestries/": {
      result: GetUniverseAncestriesOk;
      tag: "Universe";
    },
    "/universe/asteroid_belts/{asteroid_belt_id}/": {
      result: GetUniverseAsteroidBeltsAsteroidBeltIdOk;
      tag: "Universe";
    },
    "/universe/bloodlines/": {
      result: GetUniverseBloodlinesOk;
      tag: "Universe";
    },
    "/universe/categories/": {
      result: GetUniverseCategoriesOk;
      tag: "Universe";
    },
    "/universe/categories/{category_id}/": {
      result: GetUniverseCategoriesCategoryIdOk;
      tag: "Universe";
    },
    "/universe/constellations/": {
      result: GetUniverseConstellationsOk;
      tag: "Universe";
    },
    "/universe/constellations/{constellation_id}/": {
      result: GetUniverseConstellationsConstellationIdOk;
      tag: "Universe";
    },
    "/universe/factions/": {
      result: GetUniverseFactionsOk;
      tag: "Universe";
    },
    "/universe/graphics/": {
      result: GetUniverseGraphicsOk;
      tag: "Universe";
    },
    "/universe/graphics/{graphic_id}/": {
      result: GetUniverseGraphicsGraphicIdOk;
      tag: "Universe";
    },
    "/universe/groups/": {
      result: GetUniverseGroupsOk;
      tag: "Universe";
    },
    "/universe/groups/{group_id}/": {
      result: GetUniverseGroupsGroupIdOk;
      tag: "Universe";
    },
    "/universe/moons/{moon_id}/": {
      result: GetUniverseMoonsMoonIdOk;
      tag: "Universe";
    },
    "/universe/planets/{planet_id}/": {
      result: GetUniversePlanetsPlanetIdOk;
      tag: "Universe";
    },
    "/universe/races/": {
      result: GetUniverseRacesOk;
      tag: "Universe";
    },
    "/universe/regions/": {
      result: GetUniverseRegionsOk;
      tag: "Universe";
    },
    "/universe/regions/{region_id}/": {
      result: GetUniverseRegionsRegionIdOk;
      tag: "Universe";
    },
    "/universe/schematics/{schematic_id}/": {
      result: GetUniverseSchematicsSchematicIdOk;
      tag: "Planetary Interaction";
      cachedSeconds: 3600;
    },
    "/universe/stargates/{stargate_id}/": {
      result: GetUniverseStargatesStargateIdOk;
      tag: "Universe";
    },
    "/universe/stars/{star_id}/": {
      result: GetUniverseStarsStarIdOk;
      tag: "Universe";
    },
    "/universe/stations/{station_id}/": {
      result: GetUniverseStationsStationIdOk;
      tag: "Universe";
    },
    "/universe/structures/": {
      result: GetUniverseStructuresOk;
      query: {
        filter?: GetUniverseStructuresFilter;
      },
      tag: "Universe";
      cachedSeconds: 3600;
    },
    "/universe/structures/{structure_id}/": {
      result: GetUniverseStructuresStructureIdOk;
      /** `esi-universe.read_structures.v1` */
      auth: true;
      tag: "Universe";
      cachedSeconds: 3600;
    },
    "/universe/system_jumps/": {
      result: GetUniverseSystemJumpsOk;
      tag: "Universe";
      cachedSeconds: 3600;
    },
    "/universe/system_kills/": {
      result: GetUniverseSystemKillsOk;
      tag: "Universe";
      cachedSeconds: 3600;
    },
    "/universe/systems/": {
      result: GetUniverseSystemsOk;
      tag: "Universe";
    },
    "/universe/systems/{system_id}/": {
      result: GetUniverseSystemsSystemIdOk;
      tag: "Universe";
    },
    "/universe/types/": {
      result: GetUniverseTypesOk;
      tag: "Universe";
    },
    "/universe/types/{type_id}/": {
      result: GetUniverseTypesTypeIdOk;
      tag: "Universe";
    },
    "/wars/": {
      result: GetWarsOk;
      query: {
        max_war_id?: number;
      },
      tag: "Wars";
      cachedSeconds: 3600;
    },
    "/wars/{war_id}/": {
      result: GetWarsWarIdOk;
      tag: "Wars";
      cachedSeconds: 3600;
    },
    "/wars/{war_id}/killmails/": {
      result: GetWarsWarIdKillmailsOk;
      tag: "Wars";
      cachedSeconds: 3600;
    }
  },
  post: {
    "/fleets/{fleet_id}/members/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PostFleetsFleetIdMembersInvitation;
    },
    "/ui/autopilot/waypoint/": {
      result: NoContentResponse;
      tag: "User Interface";
      /** `esi-ui.write_waypoint.v1` */
      auth: true;
      query: {
        add_to_beginning: boolean;
        clear_other_waypoints: boolean;
        destination_id: number;
      }
    },
    "/ui/openwindow/contract/": {
      result: NoContentResponse;
      tag: "User Interface";
      /** `esi-ui.open_window.v1` */
      auth: true;
      query: {
        contract_id: number;
      }
    },
    "/ui/openwindow/information/": {
      result: NoContentResponse;
      tag: "User Interface";
      /** `esi-ui.open_window.v1` */
      auth: true;
      query: {
        target_id: number;
      }
    },
    "/ui/openwindow/marketdetails/": {
      result: NoContentResponse;
      tag: "User Interface";
      /** `esi-ui.open_window.v1` */
      auth: true;
      query: {
        type_id: number;
      }
    },
    "/ui/openwindow/newmail/": {
      result: NoContentResponse;
      tag: "User Interface";
      /** `esi-ui.open_window.v1` */
      auth: true;
      body: PostUiOpenwindowNewmailNewMail;
    },
    "/characters/affiliation/": {
      result: PostCharactersAffiliationOk;
      body: PostCharactersAffiliationCharacters;
      tag: "Character";
      cachedSeconds: 3600;
    },
    "/characters/{character_id}/assets/locations/": {
      result: PostCharactersCharacterIdAssetsLocationsOk;
      body: PostCharactersCharacterIdAssetsLocationsItemIds;
      /** `esi-assets.read_assets.v1` */
      auth: true;
      tag: "Assets";
    },
    "/characters/{character_id}/assets/names/": {
      result: PostCharactersCharacterIdAssetsNamesOk;
      body: PostCharactersCharacterIdAssetsNamesItemIds;
      /** `esi-assets.read_assets.v1` */
      auth: true;
      tag: "Assets";
    },
    "/characters/{character_id}/contacts/": {
      result: PostCharactersCharacterIdContactsCreated;
      body: PostCharactersCharacterIdContactsContactIds;
      query: {
        label_ids?: PostCharactersCharacterIdContactsLabelIds;
        standing: number;
        watched?: boolean;
      },
      /** `esi-characters.write_contacts.v1` */
      auth: true;
      tag: "Contacts";
    },
    "/characters/{character_id}/cspa/": {
      result: PostCharactersCharacterIdCspaCreated;
      body: PostCharactersCharacterIdCspaCharacters;
      /** `esi-characters.read_contacts.v1` */
      auth: true;
      tag: "Character";
    },
    "/characters/{character_id}/fittings/": {
      result: PostCharactersCharacterIdFittingsCreated;
      body: PostCharactersCharacterIdFittingsFitting;
      /** `esi-fittings.write_fittings.v1` */
      auth: true;
      tag: "Fittings";
    },
    "/characters/{character_id}/mail/": {
      result: PostCharactersCharacterIdMailCreated;
      body: PostCharactersCharacterIdMailMail;
      /** `esi-mail.send_mail.v1` */
      auth: true;
      tag: "Mail";
    },
    "/characters/{character_id}/mail/labels/": {
      result: PostCharactersCharacterIdMailLabelsCreated;
      body: PostCharactersCharacterIdMailLabelsLabel;
      /** `esi-mail.organize_mail.v1` */
      auth: true;
      tag: "Mail";
    },
    "/corporations/{corporation_id}/assets/locations/": {
      result: PostCorporationsCorporationIdAssetsLocationsOk;
      body: PostCorporationsCorporationIdAssetsLocationsItemIds;
      /** `esi-assets.read_corporation_assets.v1` */
      auth: true;
      tag: "Assets";
    },
    "/corporations/{corporation_id}/assets/names/": {
      result: PostCorporationsCorporationIdAssetsNamesOk;
      body: PostCorporationsCorporationIdAssetsNamesItemIds;
      /** `esi-assets.read_corporation_assets.v1` */
      auth: true;
      tag: "Assets";
    },
    "/fleets/{fleet_id}/wings/": {
      result: PostFleetsFleetIdWingsCreated;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      tag: "Fleets";
    },
    "/fleets/{fleet_id}/wings/{wing_id}/squads/": {
      result: PostFleetsFleetIdWingsWingIdSquadsCreated;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      tag: "Fleets";
    },
    "/universe/ids/": {
      result: PostUniverseIdsOk;
      body: PostUniverseIdsNames;
      tag: "Universe";
    },
    "/universe/names/": {
      result: PostUniverseNamesOk;
      body: PostUniverseNamesIds;
      tag: "Universe";
    }
  },
  put: {
    "/characters/{character_id}/calendar/{event_id}/": {
      result: NoContentResponse;
      tag: "Calendar";
      cachedSeconds: 5;
      /** `esi-calendar.respond_calendar_events.v1` */
      auth: true;
      body: PutCharactersCharacterIdCalendarEventIdResponse;
    },
    "/characters/{character_id}/contacts/": {
      result: NoContentResponse;
      tag: "Contacts";
      /** `esi-characters.write_contacts.v1` */
      auth: true;
      body: PutCharactersCharacterIdContactsContactIds;
      query: {
        label_ids?: PutCharactersCharacterIdContactsLabelIds;
        standing: number;
        watched?: boolean;
      }
    },
    "/characters/{character_id}/mail/{mail_id}/": {
      result: NoContentResponse;
      tag: "Mail";
      /** `esi-mail.organize_mail.v1` */
      auth: true;
      body: PutCharactersCharacterIdMailMailIdContents;
    },
    "/fleets/{fleet_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdNewSettings;
    },
    "/fleets/{fleet_id}/members/{member_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdMembersMemberIdMovement;
    },
    "/fleets/{fleet_id}/squads/{squad_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdSquadsSquadIdNaming;
    },
    "/fleets/{fleet_id}/wings/{wing_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdWingsWingIdNaming;
    }
  },
  delete: {
    "/characters/{character_id}/contacts/": {
      result: NoContentResponse;
      tag: "Contacts";
      /** `esi-characters.write_contacts.v1` */
      auth: true;
      query: {
        contact_ids: DeleteCharactersCharacterIdContactsContactIds;
      }
    },
    "/characters/{character_id}/fittings/{fitting_id}/": {
      result: NoContentResponse;
      tag: "Fittings";
      /** `esi-fittings.write_fittings.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/labels/{label_id}/": {
      result: NoContentResponse;
      tag: "Mail";
      /** `esi-mail.organize_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/{mail_id}/": {
      result: NoContentResponse;
      tag: "Mail";
      /** `esi-mail.organize_mail.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/members/{member_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/squads/{squad_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/wings/{wing_id}/": {
      result: NoContentResponse;
      tag: "Fleets";
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    }
  }
};
