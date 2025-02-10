/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * THIS TSD IS AUTO GENERATED, DO NOT EDIT
 * 
 * @file eve-esi-types/v2/index.d.ts
 * @summary This file is auto-generated and defines version 2.2.2 of the EVE Online ESI response types.
 */
import "./get_alliances_ok.d.ts";
import "./get_alliances_alliance_id_ok.d.ts";
import "./get_alliances_alliance_id_contacts_ok.d.ts";
import "./get_alliances_alliance_id_contacts_labels_ok.d.ts";
import "./get_alliances_alliance_id_corporations_ok.d.ts";
import "./get_alliances_alliance_id_icons_ok.d.ts";
import "./post_characters_affiliation_ok.d.ts";
import "./get_characters_character_id_ok.d.ts";
import "./get_characters_character_id_agents_research_ok.d.ts";
import "./get_characters_character_id_assets_ok.d.ts";
import "./post_characters_character_id_assets_locations_ok.d.ts";
import "./post_characters_character_id_assets_names_ok.d.ts";
import "./get_characters_character_id_attributes_ok.d.ts";
import "./get_characters_character_id_blueprints_ok.d.ts";
import "./get_characters_character_id_bookmarks_ok.d.ts";
import "./get_characters_character_id_bookmarks_folders_ok.d.ts";
import "./get_characters_character_id_calendar_ok.d.ts";
import "./get_characters_character_id_calendar_event_id_ok.d.ts";
import "./get_characters_character_id_calendar_event_id_attendees_ok.d.ts";
import "./get_characters_character_id_clones_ok.d.ts";
import "./get_characters_character_id_contacts_ok.d.ts";
import "./post_characters_character_id_contacts_created.d.ts";
import "./get_characters_character_id_contacts_labels_ok.d.ts";
import "./get_characters_character_id_contracts_ok.d.ts";
import "./get_characters_character_id_contracts_contract_id_bids_ok.d.ts";
import "./get_characters_character_id_contracts_contract_id_items_ok.d.ts";
import "./get_characters_character_id_corporationhistory_ok.d.ts";
import "./post_characters_character_id_cspa_created.d.ts";
import "./get_characters_character_id_fatigue_ok.d.ts";
import "./get_characters_character_id_fittings_ok.d.ts";
import "./post_characters_character_id_fittings_created.d.ts";
import "./get_characters_character_id_fleet_ok.d.ts";
import "./get_characters_character_id_fw_stats_ok.d.ts";
import "./get_characters_character_id_implants_ok.d.ts";
import "./get_characters_character_id_industry_jobs_ok.d.ts";
import "./get_characters_character_id_killmails_recent_ok.d.ts";
import "./get_characters_character_id_location_ok.d.ts";
import "./get_characters_character_id_loyalty_points_ok.d.ts";
import "./get_characters_character_id_mail_ok.d.ts";
import "./post_characters_character_id_mail_created.d.ts";
import "./get_characters_character_id_mail_labels_ok.d.ts";
import "./post_characters_character_id_mail_labels_created.d.ts";
import "./get_characters_character_id_mail_lists_ok.d.ts";
import "./get_characters_character_id_mail_mail_id_ok.d.ts";
import "./get_characters_character_id_medals_ok.d.ts";
import "./get_characters_character_id_mining_ok.d.ts";
import "./get_characters_character_id_notifications_ok.d.ts";
import "./get_characters_character_id_notifications_contacts_ok.d.ts";
import "./get_characters_character_id_online_ok.d.ts";
import "./get_characters_character_id_opportunities_ok.d.ts";
import "./get_characters_character_id_orders_ok.d.ts";
import "./get_characters_character_id_orders_history_ok.d.ts";
import "./get_characters_character_id_planets_ok.d.ts";
import "./get_characters_character_id_planets_planet_id_ok.d.ts";
import "./get_characters_character_id_portrait_ok.d.ts";
import "./get_characters_character_id_roles_ok.d.ts";
import "./get_characters_character_id_search_ok.d.ts";
import "./get_characters_character_id_ship_ok.d.ts";
import "./get_characters_character_id_skillqueue_ok.d.ts";
import "./get_characters_character_id_skills_ok.d.ts";
import "./get_characters_character_id_standings_ok.d.ts";
import "./get_characters_character_id_titles_ok.d.ts";
import "./get_characters_character_id_wallet_ok.d.ts";
import "./get_characters_character_id_wallet_journal_ok.d.ts";
import "./get_characters_character_id_wallet_transactions_ok.d.ts";
import "./get_contracts_public_bids_contract_id_ok.d.ts";
import "./get_contracts_public_items_contract_id_ok.d.ts";
import "./get_contracts_public_region_id_ok.d.ts";
import "./get_corporation_corporation_id_mining_extractions_ok.d.ts";
import "./get_corporation_corporation_id_mining_observers_ok.d.ts";
import "./get_corporation_corporation_id_mining_observers_observer_id_ok.d.ts";
import "./get_corporations_npccorps_ok.d.ts";
import "./get_corporations_corporation_id_ok.d.ts";
import "./get_corporations_corporation_id_alliancehistory_ok.d.ts";
import "./get_corporations_corporation_id_assets_ok.d.ts";
import "./post_corporations_corporation_id_assets_locations_ok.d.ts";
import "./post_corporations_corporation_id_assets_names_ok.d.ts";
import "./get_corporations_corporation_id_blueprints_ok.d.ts";
import "./get_corporations_corporation_id_bookmarks_ok.d.ts";
import "./get_corporations_corporation_id_bookmarks_folders_ok.d.ts";
import "./get_corporations_corporation_id_contacts_ok.d.ts";
import "./get_corporations_corporation_id_contacts_labels_ok.d.ts";
import "./get_corporations_corporation_id_containers_logs_ok.d.ts";
import "./get_corporations_corporation_id_contracts_ok.d.ts";
import "./get_corporations_corporation_id_contracts_contract_id_bids_ok.d.ts";
import "./get_corporations_corporation_id_contracts_contract_id_items_ok.d.ts";
import "./get_corporations_corporation_id_customs_offices_ok.d.ts";
import "./get_corporations_corporation_id_divisions_ok.d.ts";
import "./get_corporations_corporation_id_facilities_ok.d.ts";
import "./get_corporations_corporation_id_fw_stats_ok.d.ts";
import "./get_corporations_corporation_id_icons_ok.d.ts";
import "./get_corporations_corporation_id_industry_jobs_ok.d.ts";
import "./get_corporations_corporation_id_killmails_recent_ok.d.ts";
import "./get_corporations_corporation_id_medals_ok.d.ts";
import "./get_corporations_corporation_id_medals_issued_ok.d.ts";
import "./get_corporations_corporation_id_members_ok.d.ts";
import "./get_corporations_corporation_id_members_limit_ok.d.ts";
import "./get_corporations_corporation_id_members_titles_ok.d.ts";
import "./get_corporations_corporation_id_membertracking_ok.d.ts";
import "./get_corporations_corporation_id_orders_ok.d.ts";
import "./get_corporations_corporation_id_orders_history_ok.d.ts";
import "./get_corporations_corporation_id_roles_ok.d.ts";
import "./get_corporations_corporation_id_roles_history_ok.d.ts";
import "./get_corporations_corporation_id_shareholders_ok.d.ts";
import "./get_corporations_corporation_id_standings_ok.d.ts";
import "./get_corporations_corporation_id_starbases_ok.d.ts";
import "./get_corporations_corporation_id_starbases_starbase_id_ok.d.ts";
import "./get_corporations_corporation_id_structures_ok.d.ts";
import "./get_corporations_corporation_id_titles_ok.d.ts";
import "./get_corporations_corporation_id_wallets_ok.d.ts";
import "./get_corporations_corporation_id_wallets_division_journal_ok.d.ts";
import "./get_corporations_corporation_id_wallets_division_transactions_ok.d.ts";
import "./get_dogma_attributes_ok.d.ts";
import "./get_dogma_attributes_attribute_id_ok.d.ts";
import "./get_dogma_dynamic_items_type_id_item_id_ok.d.ts";
import "./get_dogma_effects_ok.d.ts";
import "./get_dogma_effects_effect_id_ok.d.ts";
import "./get_fleets_fleet_id_ok.d.ts";
import "./get_fleets_fleet_id_members_ok.d.ts";
import "./get_fleets_fleet_id_wings_ok.d.ts";
import "./post_fleets_fleet_id_wings_created.d.ts";
import "./post_fleets_fleet_id_wings_wing_id_squads_created.d.ts";
import "./get_fw_leaderboards_ok.d.ts";
import "./get_fw_leaderboards_characters_ok.d.ts";
import "./get_fw_leaderboards_corporations_ok.d.ts";
import "./get_fw_stats_ok.d.ts";
import "./get_fw_systems_ok.d.ts";
import "./get_fw_wars_ok.d.ts";
import "./get_incursions_ok.d.ts";
import "./get_industry_facilities_ok.d.ts";
import "./get_industry_systems_ok.d.ts";
import "./get_insurance_prices_ok.d.ts";
import "./get_killmails_killmail_id_killmail_hash_ok.d.ts";
import "./get_loyalty_stores_corporation_id_offers_ok.d.ts";
import "./get_markets_groups_ok.d.ts";
import "./get_markets_groups_market_group_id_ok.d.ts";
import "./get_markets_prices_ok.d.ts";
import "./get_markets_structures_structure_id_ok.d.ts";
import "./get_markets_region_id_history_ok.d.ts";
import "./get_markets_region_id_orders_ok.d.ts";
import "./get_markets_region_id_types_ok.d.ts";
import "./get_opportunities_groups_ok.d.ts";
import "./get_opportunities_groups_group_id_ok.d.ts";
import "./get_opportunities_tasks_ok.d.ts";
import "./get_opportunities_tasks_task_id_ok.d.ts";
import "./get_route_origin_destination_ok.d.ts";
import "./get_sovereignty_campaigns_ok.d.ts";
import "./get_sovereignty_map_ok.d.ts";
import "./get_sovereignty_structures_ok.d.ts";
import "./get_status_ok.d.ts";
import "./get_universe_ancestries_ok.d.ts";
import "./get_universe_asteroid_belts_asteroid_belt_id_ok.d.ts";
import "./get_universe_bloodlines_ok.d.ts";
import "./get_universe_categories_ok.d.ts";
import "./get_universe_categories_category_id_ok.d.ts";
import "./get_universe_constellations_ok.d.ts";
import "./get_universe_constellations_constellation_id_ok.d.ts";
import "./get_universe_factions_ok.d.ts";
import "./get_universe_graphics_ok.d.ts";
import "./get_universe_graphics_graphic_id_ok.d.ts";
import "./get_universe_groups_ok.d.ts";
import "./get_universe_groups_group_id_ok.d.ts";
import "./post_universe_ids_ok.d.ts";
import "./get_universe_moons_moon_id_ok.d.ts";
import "./post_universe_names_ok.d.ts";
import "./get_universe_planets_planet_id_ok.d.ts";
import "./get_universe_races_ok.d.ts";
import "./get_universe_regions_ok.d.ts";
import "./get_universe_regions_region_id_ok.d.ts";
import "./get_universe_schematics_schematic_id_ok.d.ts";
import "./get_universe_stargates_stargate_id_ok.d.ts";
import "./get_universe_stars_star_id_ok.d.ts";
import "./get_universe_stations_station_id_ok.d.ts";
import "./get_universe_structures_ok.d.ts";
import "./get_universe_structures_structure_id_ok.d.ts";
import "./get_universe_system_jumps_ok.d.ts";
import "./get_universe_system_kills_ok.d.ts";
import "./get_universe_systems_ok.d.ts";
import "./get_universe_systems_system_id_ok.d.ts";
import "./get_universe_types_ok.d.ts";
import "./get_universe_types_type_id_ok.d.ts";
import "./get_wars_ok.d.ts";
import "./get_wars_war_id_ok.d.ts";
import "./get_wars_war_id_killmails_ok.d.ts";
import "./extra-types.d.ts";


/**
 * mark a specific property as `required`
 */
type RequireThese<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Represents a function that can make ESI requests with various HTTP methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * @example
 * ```ts
 * // @ ts-expect-error
 * export const request: IESIRequestFunction<ESIRequestOptions> = (method, endpoint, pathParams, opt) => {
 * // Implementation for "get" | "post" | "put" | "delete" request
 * };
 * // You can easily implement "get" | "post" | "put" | "delete" requests
 * // with code like the following:
 * (["get", "post", "put", "delete"] as (keyof typeof request)[]).forEach((method) => {
 *     request[method] = function (this: typeof request, endpoint, params, opt) {
 *         return this(method, endpoint, params, opt);
 *     } as TESIRequestFunctionEachMethod<typeof method>;
 * });
 * ```
 */
export interface IESIRequestFunction<ActualOpt>
  extends TESIRequestFunctionSignature<ActualOpt>, IESIRequestFunctionMethods<ActualOpt> {
}

/**
 * Represents the methods available for making ESI requests.
 * 
 *  + This interface is used when you already have implementation code such as  
 *    TESIRequestFunctionSignature and you want to implement additional shorthand methods.
 *
 * @template ActualOpt - The actual type of the options.
 *
 * @example
 * ```ts
 * export const request: TESIRequestFunctionSignature<ESIRequestOptions> = (method, endpoint, pathParams, opt) => {
 * // Implementation for "get" | "post" | "put" | "delete" request
 * };
 * // You can easily implement "get" | "post" | "put" | "delete" requests
 * // with code like the following:
 * const esiMethods = {} as IESIRequestFunctionMethods<ESIRequestOptions>;
 * (["get", "post", "put", "delete"] as (keyof IESIRequestFunctionMethods)[]).forEach((method) => {
 *     esiMethods[method] = function (endpoint, params, opt) {
 *         return request(method, endpoint, params, opt);
 *     } as TESIRequestFunctionEachMethod<typeof method>;
 * });
 * ```
 */
export interface IESIRequestFunctionMethods<ActualOpt = {}> {
  get: TESIRequestFunctionEachMethod<"get", ActualOpt>;
  post: TESIRequestFunctionEachMethod<"post", ActualOpt>;
  put: TESIRequestFunctionEachMethod<"put", ActualOpt>;
  delete: TESIRequestFunctionEachMethod<"delete", ActualOpt>;
}

declare global {

  /**
   * ### ESI request function all in one signature
   * 
   * TESIRequestFunctionSignature is a type that defines the signature of an ESI request function.
   * 
   * This function sends a request to a specified endpoint and returns a response.
   * 
   * @template ActualOpt - The actual type of the option.  
   *   Required parameters inferred by typescript are merged.
   * @template M - The HTTP method to use for the request
   * @template EP - The Path of the ESI endpoint to send the request to
   * @template P2 - Parameters to include in the request
   * @template Opt - Options to include in the request  
   *   If there is a required parameter, its type will be merged with `ActualOpt`
   * @template R - The response type
   */
  type TESIRequestFunctionSignature<ActualOpt> = <
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M],
    P2 extends IfParameterizedPath<EP, Opt>,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt>,
    R extends InferESIResponseResult<M, EP>
  >(method: M, endpoint: EP, pathParams?: P2, options?: Opt) => Promise<R>;


  type TESIRequestFunctionEachMethod<M extends TESIEntryMethod, ActualOpt = {}> = <
    EP extends keyof TESIResponseOKMap[M],
    P2 extends IfParameterizedPath<EP, Opt>,
    Opt extends IdentifyParameters<TESIResponseOKMap[M][EP], ActualOpt>,
    R extends InferESIResponseResult<M, EP>
  >(endpoint: EP, pathParams?: P2, options?: Opt) => Promise<R>;

  // /**
  //  * is parameterized path
  //  */
  // type IsParameterizedPath<EP, A, B> = EP extends `${string}/{${string}}/${string | ""}` ? A: B;
  /**
   * if parameterized path then specify number type, otherwise will be `Opt` type.
   */
  type IfParameterizedPath<EP, Opt> = EP extends `${string}/{${string}}/${string | ""}` ? number | number[]: Opt;

  /**
   * Identifies the required parameters for a given entry type.
   *
   * @template Entry - The entry type to identify parameters for.
   * @template Opt - The type of the parameters.
   * @type {Opt & Pick<Entry, Exclude<keyof Entry, "result">>}
   */
  //* ctt
  type IdentifyParameters<
    Entry, Opt,
    Keys = Exclude<keyof Entry, "result">
  > = RequireThese<Opt, Keys> & Pick<Entry, Keys>;
  /*/
  type IdentifyParameters<
    Entry, Opt,
    Keys = Exclude<keyof Entry, "result">
  > = Opt & (Keys extends keyof Entry ? Pick<Entry, Keys> : {});
  //*/

  /**
   * Infer the result type of an ESI response based on the method and endpoint.
   * 
   * @template M - The HTTP method (e.g., "get", "post").
   * @template EP - The endpoint path.
   */
  type InferESIResponseResult<
    M extends TESIEntryMethod,
    EP extends keyof TESIResponseOKMap[M]
  > = TESIResponseOKMap[M][EP] extends { result: infer U } ? U : never;

  /**
   * Represents a response with no content (HTTP status 204).
   * Although no data is returned, it indicates successful completion by returning a status of 204.
   */
  type NoContentResponse = { status: 204 };

  /**
   * Represents the HTTP methods supported by ESI.
   * 
   * ```ts
   * "get" | "post" | "put" | "delete"
   * ```
   */
  type TESIEntryMethod = keyof TESIResponseOKMap;

  /**
   * Represents the endpoints for the "get" method.
   */
  type TEndPointGet = keyof TESIResponseOKMap["get"];
  /**
   * Represents the endpoints for the "post" method.
   */
  type TEndPointPost = keyof TESIResponseOKMap["post"];
  /**
   * Represents the endpoints for the "put" method.
   */
  type TEndPointPut = keyof TESIResponseOKMap["put"];
  /**
   * Represents the endpoints for the "delete" method.
   */
  type TEndPointDelete = keyof TESIResponseOKMap["delete"];

  /**
   * Represents the entry details for the "get" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponseGetEntry<K extends TEndPointGet> = TESIResponseOKMap["get"][K];
  /**
   * Represents the entry details for the "put" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponsePutEntry<K extends TEndPointPut> = TESIResponseOKMap["put"][K];
  /**
   * Represents the entry details for the "post" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponsePostEntry<K extends TEndPointPost> = TESIResponseOKMap["post"][K];
  /**
   * Represents the entry details for the "delete" method.
   * 
   * @template K - The endpoint key.
   */
  type TESIResponseDeleteEntry<K extends TEndPointDelete> = TESIResponseOKMap["delete"][K];
}

export type TESIResponseOKMap = {
  get: {
    "/alliances/": {
      result: GetAlliancesOk;
    },
    "/alliances/{alliance_id}/": {
      result: GetAlliancesAllianceIdOk;
    },
    "/alliances/{alliance_id}/contacts/": {
      result: GetAlliancesAllianceIdContactsOk;
      /** `esi-alliances.read_contacts.v1` */
      auth: true;
    },
    "/alliances/{alliance_id}/contacts/labels/": {
      result: GetAlliancesAllianceIdContactsLabelsOk;
      /** `esi-alliances.read_contacts.v1` */
      auth: true;
    },
    "/alliances/{alliance_id}/corporations/": {
      result: GetAlliancesAllianceIdCorporationsOk;
    },
    "/alliances/{alliance_id}/icons/": {
      result: GetAlliancesAllianceIdIconsOk;
    },
    "/characters/{character_id}/": {
      result: GetCharactersCharacterIdOk;
    },
    "/characters/{character_id}/agents_research/": {
      result: GetCharactersCharacterIdAgentsResearchOk;
      /** `esi-characters.read_agents_research.v1` */
      auth: true;
    },
    "/characters/{character_id}/assets/": {
      result: GetCharactersCharacterIdAssetsOk;
      /** `esi-assets.read_assets.v1` */
      auth: true;
    },
    "/characters/{character_id}/attributes/": {
      result: GetCharactersCharacterIdAttributesOk;
      /** `esi-skills.read_skills.v1` */
      auth: true;
    },
    "/characters/{character_id}/blueprints/": {
      result: GetCharactersCharacterIdBlueprintsOk;
      /** `esi-characters.read_blueprints.v1` */
      auth: true;
    },
    "/characters/{character_id}/bookmarks/": {
      result: GetCharactersCharacterIdBookmarksOk;
      /** `esi-bookmarks.read_character_bookmarks.v1` */
      auth: true;
    },
    "/characters/{character_id}/bookmarks/folders/": {
      result: GetCharactersCharacterIdBookmarksFoldersOk;
      /** `esi-bookmarks.read_character_bookmarks.v1` */
      auth: true;
    },
    "/characters/{character_id}/calendar/": {
      result: GetCharactersCharacterIdCalendarOk;
      query: {
        from_event?: number;
      },
      /** `esi-calendar.read_calendar_events.v1` */
      auth: true;
    },
    "/characters/{character_id}/calendar/{event_id}/": {
      result: GetCharactersCharacterIdCalendarEventIdOk;
      /** `esi-calendar.read_calendar_events.v1` */
      auth: true;
    },
    "/characters/{character_id}/calendar/{event_id}/attendees/": {
      result: GetCharactersCharacterIdCalendarEventIdAttendeesOk;
      /** `esi-calendar.read_calendar_events.v1` */
      auth: true;
    },
    "/characters/{character_id}/clones/": {
      result: GetCharactersCharacterIdClonesOk;
      /** `esi-clones.read_clones.v1` */
      auth: true;
    },
    "/characters/{character_id}/contacts/": {
      result: GetCharactersCharacterIdContactsOk;
      /** `esi-characters.read_contacts.v1` */
      auth: true;
    },
    "/characters/{character_id}/contacts/labels/": {
      result: GetCharactersCharacterIdContactsLabelsOk;
      /** `esi-characters.read_contacts.v1` */
      auth: true;
    },
    "/characters/{character_id}/contracts/": {
      result: GetCharactersCharacterIdContractsOk;
      /** `esi-contracts.read_character_contracts.v1` */
      auth: true;
    },
    "/characters/{character_id}/contracts/{contract_id}/bids/": {
      result: GetCharactersCharacterIdContractsContractIdBidsOk;
      /** `esi-contracts.read_character_contracts.v1` */
      auth: true;
    },
    "/characters/{character_id}/contracts/{contract_id}/items/": {
      result: GetCharactersCharacterIdContractsContractIdItemsOk;
      /** `esi-contracts.read_character_contracts.v1` */
      auth: true;
    },
    "/characters/{character_id}/corporationhistory/": {
      result: GetCharactersCharacterIdCorporationhistoryOk;
    },
    "/characters/{character_id}/fatigue/": {
      result: GetCharactersCharacterIdFatigueOk;
      /** `esi-characters.read_fatigue.v1` */
      auth: true;
    },
    "/characters/{character_id}/fittings/": {
      result: GetCharactersCharacterIdFittingsOk;
      /** `esi-fittings.read_fittings.v1` */
      auth: true;
    },
    "/characters/{character_id}/fleet/": {
      result: GetCharactersCharacterIdFleetOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
    },
    "/characters/{character_id}/fw/stats/": {
      result: GetCharactersCharacterIdFwStatsOk;
      /** `esi-characters.read_fw_stats.v1` */
      auth: true;
    },
    "/characters/{character_id}/implants/": {
      result: GetCharactersCharacterIdImplantsOk;
      /** `esi-clones.read_implants.v1` */
      auth: true;
    },
    "/characters/{character_id}/industry/jobs/": {
      result: GetCharactersCharacterIdIndustryJobsOk;
      query: {
        include_completed?: boolean;
      },
      /** `esi-industry.read_character_jobs.v1` */
      auth: true;
    },
    "/characters/{character_id}/killmails/recent/": {
      result: GetCharactersCharacterIdKillmailsRecentOk;
      /** `esi-killmails.read_killmails.v1` */
      auth: true;
    },
    "/characters/{character_id}/location/": {
      result: GetCharactersCharacterIdLocationOk;
      /** `esi-location.read_location.v1` */
      auth: true;
    },
    "/characters/{character_id}/loyalty/points/": {
      result: GetCharactersCharacterIdLoyaltyPointsOk;
      /** `esi-characters.read_loyalty.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/": {
      result: GetCharactersCharacterIdMailOk;
      query: {
        labels?: GetCharactersCharacterIdMailLabels;
        last_mail_id?: number;
      },
      /** `esi-mail.read_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/labels/": {
      result: GetCharactersCharacterIdMailLabelsOk;
      /** `esi-mail.read_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/lists/": {
      result: GetCharactersCharacterIdMailListsOk;
      /** `esi-mail.read_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/{mail_id}/": {
      result: GetCharactersCharacterIdMailMailIdOk;
      /** `esi-mail.read_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/medals/": {
      result: GetCharactersCharacterIdMedalsOk;
      /** `esi-characters.read_medals.v1` */
      auth: true;
    },
    "/characters/{character_id}/mining/": {
      result: GetCharactersCharacterIdMiningOk;
      /** `esi-industry.read_character_mining.v1` */
      auth: true;
    },
    "/characters/{character_id}/notifications/": {
      result: GetCharactersCharacterIdNotificationsOk;
      /** `esi-characters.read_notifications.v1` */
      auth: true;
    },
    "/characters/{character_id}/notifications/contacts/": {
      result: GetCharactersCharacterIdNotificationsContactsOk;
      /** `esi-characters.read_notifications.v1` */
      auth: true;
    },
    "/characters/{character_id}/online/": {
      result: GetCharactersCharacterIdOnlineOk;
      /** `esi-location.read_online.v1` */
      auth: true;
    },
    "/characters/{character_id}/opportunities/": {
      result: GetCharactersCharacterIdOpportunitiesOk;
      /** `esi-characters.read_opportunities.v1` */
      auth: true;
    },
    "/characters/{character_id}/orders/": {
      result: GetCharactersCharacterIdOrdersOk;
      /** `esi-markets.read_character_orders.v1` */
      auth: true;
    },
    "/characters/{character_id}/orders/history/": {
      result: GetCharactersCharacterIdOrdersHistoryOk;
      /** `esi-markets.read_character_orders.v1` */
      auth: true;
    },
    "/characters/{character_id}/planets/": {
      result: GetCharactersCharacterIdPlanetsOk;
      /** `esi-planets.manage_planets.v1` */
      auth: true;
    },
    "/characters/{character_id}/planets/{planet_id}/": {
      result: GetCharactersCharacterIdPlanetsPlanetIdOk;
      /** `esi-planets.manage_planets.v1` */
      auth: true;
    },
    "/characters/{character_id}/portrait/": {
      result: GetCharactersCharacterIdPortraitOk;
    },
    "/characters/{character_id}/roles/": {
      result: GetCharactersCharacterIdRolesOk;
      /** `esi-characters.read_corporation_roles.v1` */
      auth: true;
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
    },
    "/characters/{character_id}/ship/": {
      result: GetCharactersCharacterIdShipOk;
      /** `esi-location.read_ship_type.v1` */
      auth: true;
    },
    "/characters/{character_id}/skillqueue/": {
      result: GetCharactersCharacterIdSkillqueueOk;
      /** `esi-skills.read_skillqueue.v1` */
      auth: true;
    },
    "/characters/{character_id}/skills/": {
      result: GetCharactersCharacterIdSkillsOk;
      /** `esi-skills.read_skills.v1` */
      auth: true;
    },
    "/characters/{character_id}/standings/": {
      result: GetCharactersCharacterIdStandingsOk;
      /** `esi-characters.read_standings.v1` */
      auth: true;
    },
    "/characters/{character_id}/titles/": {
      result: GetCharactersCharacterIdTitlesOk;
      /** `esi-characters.read_titles.v1` */
      auth: true;
    },
    "/characters/{character_id}/wallet/": {
      result: GetCharactersCharacterIdWalletOk;
      /** `esi-wallet.read_character_wallet.v1` */
      auth: true;
    },
    "/characters/{character_id}/wallet/journal/": {
      result: GetCharactersCharacterIdWalletJournalOk;
      /** `esi-wallet.read_character_wallet.v1` */
      auth: true;
    },
    "/characters/{character_id}/wallet/transactions/": {
      result: GetCharactersCharacterIdWalletTransactionsOk;
      query: {
        from_id?: number;
      },
      /** `esi-wallet.read_character_wallet.v1` */
      auth: true;
    },
    "/contracts/public/bids/{contract_id}/": {
      result: GetContractsPublicBidsContractIdOk;
    },
    "/contracts/public/items/{contract_id}/": {
      result: GetContractsPublicItemsContractIdOk;
    },
    "/contracts/public/{region_id}/": {
      result: GetContractsPublicRegionIdOk;
    },
    "/corporation/{corporation_id}/mining/extractions/": {
      result: GetCorporationCorporationIdMiningExtractionsOk;
      /** `esi-industry.read_corporation_mining.v1` */
      auth: true;
    },
    "/corporation/{corporation_id}/mining/observers/": {
      result: GetCorporationCorporationIdMiningObserversOk;
      /** `esi-industry.read_corporation_mining.v1` */
      auth: true;
    },
    "/corporation/{corporation_id}/mining/observers/{observer_id}/": {
      result: GetCorporationCorporationIdMiningObserversObserverIdOk;
      /** `esi-industry.read_corporation_mining.v1` */
      auth: true;
    },
    "/corporations/npccorps/": {
      result: GetCorporationsNpccorpsOk;
    },
    "/corporations/{corporation_id}/": {
      result: GetCorporationsCorporationIdOk;
    },
    "/corporations/{corporation_id}/alliancehistory/": {
      result: GetCorporationsCorporationIdAlliancehistoryOk;
    },
    "/corporations/{corporation_id}/assets/": {
      result: GetCorporationsCorporationIdAssetsOk;
      /** `esi-assets.read_corporation_assets.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/blueprints/": {
      result: GetCorporationsCorporationIdBlueprintsOk;
      /** `esi-corporations.read_blueprints.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/bookmarks/": {
      result: GetCorporationsCorporationIdBookmarksOk;
      /** `esi-bookmarks.read_corporation_bookmarks.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/bookmarks/folders/": {
      result: GetCorporationsCorporationIdBookmarksFoldersOk;
      /** `esi-bookmarks.read_corporation_bookmarks.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/contacts/": {
      result: GetCorporationsCorporationIdContactsOk;
      /** `esi-corporations.read_contacts.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/contacts/labels/": {
      result: GetCorporationsCorporationIdContactsLabelsOk;
      /** `esi-corporations.read_contacts.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/containers/logs/": {
      result: GetCorporationsCorporationIdContainersLogsOk;
      /** `esi-corporations.read_container_logs.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/contracts/": {
      result: GetCorporationsCorporationIdContractsOk;
      /** `esi-contracts.read_corporation_contracts.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/contracts/{contract_id}/bids/": {
      result: GetCorporationsCorporationIdContractsContractIdBidsOk;
      /** `esi-contracts.read_corporation_contracts.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/contracts/{contract_id}/items/": {
      result: GetCorporationsCorporationIdContractsContractIdItemsOk;
      /** `esi-contracts.read_corporation_contracts.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/customs_offices/": {
      result: GetCorporationsCorporationIdCustomsOfficesOk;
      /** `esi-planets.read_customs_offices.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/divisions/": {
      result: GetCorporationsCorporationIdDivisionsOk;
      /** `esi-corporations.read_divisions.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/facilities/": {
      result: GetCorporationsCorporationIdFacilitiesOk;
      /** `esi-corporations.read_facilities.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/fw/stats/": {
      result: GetCorporationsCorporationIdFwStatsOk;
      /** `esi-corporations.read_fw_stats.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/icons/": {
      result: GetCorporationsCorporationIdIconsOk;
    },
    "/corporations/{corporation_id}/industry/jobs/": {
      result: GetCorporationsCorporationIdIndustryJobsOk;
      query: {
        include_completed?: boolean;
      },
      /** `esi-industry.read_corporation_jobs.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/killmails/recent/": {
      result: GetCorporationsCorporationIdKillmailsRecentOk;
      /** `esi-killmails.read_corporation_killmails.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/medals/": {
      result: GetCorporationsCorporationIdMedalsOk;
      /** `esi-corporations.read_medals.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/medals/issued/": {
      result: GetCorporationsCorporationIdMedalsIssuedOk;
      /** `esi-corporations.read_medals.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/members/": {
      result: GetCorporationsCorporationIdMembersOk;
      /** `esi-corporations.read_corporation_membership.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/members/limit/": {
      result: GetCorporationsCorporationIdMembersLimitOk;
      /** `esi-corporations.track_members.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/members/titles/": {
      result: GetCorporationsCorporationIdMembersTitlesOk;
      /** `esi-corporations.read_titles.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/membertracking/": {
      result: GetCorporationsCorporationIdMembertrackingOk;
      /** `esi-corporations.track_members.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/orders/": {
      result: GetCorporationsCorporationIdOrdersOk;
      /** `esi-markets.read_corporation_orders.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/orders/history/": {
      result: GetCorporationsCorporationIdOrdersHistoryOk;
      /** `esi-markets.read_corporation_orders.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/roles/": {
      result: GetCorporationsCorporationIdRolesOk;
      /** `esi-corporations.read_corporation_membership.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/roles/history/": {
      result: GetCorporationsCorporationIdRolesHistoryOk;
      /** `esi-corporations.read_corporation_membership.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/shareholders/": {
      result: GetCorporationsCorporationIdShareholdersOk;
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/standings/": {
      result: GetCorporationsCorporationIdStandingsOk;
      /** `esi-corporations.read_standings.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/starbases/": {
      result: GetCorporationsCorporationIdStarbasesOk;
      /** `esi-corporations.read_starbases.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/starbases/{starbase_id}/": {
      result: GetCorporationsCorporationIdStarbasesStarbaseIdOk;
      query: {
        system_id: number;
      },
      /** `esi-corporations.read_starbases.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/structures/": {
      result: GetCorporationsCorporationIdStructuresOk;
      /** `esi-corporations.read_structures.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/titles/": {
      result: GetCorporationsCorporationIdTitlesOk;
      /** `esi-corporations.read_titles.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/wallets/": {
      result: GetCorporationsCorporationIdWalletsOk;
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/wallets/{division}/journal/": {
      result: GetCorporationsCorporationIdWalletsDivisionJournalOk;
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/wallets/{division}/transactions/": {
      result: GetCorporationsCorporationIdWalletsDivisionTransactionsOk;
      query: {
        from_id?: number;
      },
      /** `esi-wallet.read_corporation_wallets.v1` */
      auth: true;
    },
    "/dogma/attributes/": {
      result: GetDogmaAttributesOk;
    },
    "/dogma/attributes/{attribute_id}/": {
      result: GetDogmaAttributesAttributeIdOk;
    },
    "/dogma/dynamic/items/{type_id}/{item_id}/": {
      result: GetDogmaDynamicItemsTypeIdItemIdOk;
    },
    "/dogma/effects/": {
      result: GetDogmaEffectsOk;
    },
    "/dogma/effects/{effect_id}/": {
      result: GetDogmaEffectsEffectIdOk;
    },
    "/fleets/{fleet_id}/": {
      result: GetFleetsFleetIdOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/members/": {
      result: GetFleetsFleetIdMembersOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/wings/": {
      result: GetFleetsFleetIdWingsOk;
      /** `esi-fleets.read_fleet.v1` */
      auth: true;
    },
    "/fw/leaderboards/": {
      result: GetFwLeaderboardsOk;
    },
    "/fw/leaderboards/characters/": {
      result: GetFwLeaderboardsCharactersOk;
    },
    "/fw/leaderboards/corporations/": {
      result: GetFwLeaderboardsCorporationsOk;
    },
    "/fw/stats/": {
      result: GetFwStatsOk;
    },
    "/fw/systems/": {
      result: GetFwSystemsOk;
    },
    "/fw/wars/": {
      result: GetFwWarsOk;
    },
    "/incursions/": {
      result: GetIncursionsOk;
    },
    "/industry/facilities/": {
      result: GetIndustryFacilitiesOk;
    },
    "/industry/systems/": {
      result: GetIndustrySystemsOk;
    },
    "/insurance/prices/": {
      result: GetInsurancePricesOk;
    },
    "/killmails/{killmail_id}/{killmail_hash}/": {
      result: GetKillmailsKillmailIdKillmailHashOk;
    },
    "/loyalty/stores/{corporation_id}/offers/": {
      result: GetLoyaltyStoresCorporationIdOffersOk;
    },
    "/markets/groups/": {
      result: GetMarketsGroupsOk;
    },
    "/markets/groups/{market_group_id}/": {
      result: GetMarketsGroupsMarketGroupIdOk;
    },
    "/markets/prices/": {
      result: GetMarketsPricesOk;
    },
    "/markets/structures/{structure_id}/": {
      result: GetMarketsStructuresStructureIdOk;
      /** `esi-markets.structure_markets.v1` */
      auth: true;
    },
    "/markets/{region_id}/history/": {
      result: GetMarketsRegionIdHistoryOk;
      query: {
        type_id: number;
      }
    },
    "/markets/{region_id}/orders/": {
      result: GetMarketsRegionIdOrdersOk;
      query: {
        order_type: GetMarketsRegionIdOrdersOrderType;
        type_id?: number;
      }
    },
    "/markets/{region_id}/types/": {
      result: GetMarketsRegionIdTypesOk;
    },
    "/opportunities/groups/": {
      result: GetOpportunitiesGroupsOk;
    },
    "/opportunities/groups/{group_id}/": {
      result: GetOpportunitiesGroupsGroupIdOk;
    },
    "/opportunities/tasks/": {
      result: GetOpportunitiesTasksOk;
    },
    "/opportunities/tasks/{task_id}/": {
      result: GetOpportunitiesTasksTaskIdOk;
    },
    "/route/{origin}/{destination}/": {
      result: GetRouteOriginDestinationOk;
      query: {
        avoid?: GetRouteOriginDestinationAvoid;
        connections?: GetRouteOriginDestinationConnections;
        flag?: GetRouteOriginDestinationFlag;
      }
    },
    "/sovereignty/campaigns/": {
      result: GetSovereigntyCampaignsOk;
    },
    "/sovereignty/map/": {
      result: GetSovereigntyMapOk;
    },
    "/sovereignty/structures/": {
      result: GetSovereigntyStructuresOk;
    },
    "/status/": {
      result: GetStatusOk;
    },
    "/universe/ancestries/": {
      result: GetUniverseAncestriesOk;
    },
    "/universe/asteroid_belts/{asteroid_belt_id}/": {
      result: GetUniverseAsteroidBeltsAsteroidBeltIdOk;
    },
    "/universe/bloodlines/": {
      result: GetUniverseBloodlinesOk;
    },
    "/universe/categories/": {
      result: GetUniverseCategoriesOk;
    },
    "/universe/categories/{category_id}/": {
      result: GetUniverseCategoriesCategoryIdOk;
    },
    "/universe/constellations/": {
      result: GetUniverseConstellationsOk;
    },
    "/universe/constellations/{constellation_id}/": {
      result: GetUniverseConstellationsConstellationIdOk;
    },
    "/universe/factions/": {
      result: GetUniverseFactionsOk;
    },
    "/universe/graphics/": {
      result: GetUniverseGraphicsOk;
    },
    "/universe/graphics/{graphic_id}/": {
      result: GetUniverseGraphicsGraphicIdOk;
    },
    "/universe/groups/": {
      result: GetUniverseGroupsOk;
    },
    "/universe/groups/{group_id}/": {
      result: GetUniverseGroupsGroupIdOk;
    },
    "/universe/moons/{moon_id}/": {
      result: GetUniverseMoonsMoonIdOk;
    },
    "/universe/planets/{planet_id}/": {
      result: GetUniversePlanetsPlanetIdOk;
    },
    "/universe/races/": {
      result: GetUniverseRacesOk;
    },
    "/universe/regions/": {
      result: GetUniverseRegionsOk;
    },
    "/universe/regions/{region_id}/": {
      result: GetUniverseRegionsRegionIdOk;
    },
    "/universe/schematics/{schematic_id}/": {
      result: GetUniverseSchematicsSchematicIdOk;
    },
    "/universe/stargates/{stargate_id}/": {
      result: GetUniverseStargatesStargateIdOk;
    },
    "/universe/stars/{star_id}/": {
      result: GetUniverseStarsStarIdOk;
    },
    "/universe/stations/{station_id}/": {
      result: GetUniverseStationsStationIdOk;
    },
    "/universe/structures/": {
      result: GetUniverseStructuresOk;
      query: {
        filter?: GetUniverseStructuresFilter;
      }
    },
    "/universe/structures/{structure_id}/": {
      result: GetUniverseStructuresStructureIdOk;
      /** `esi-universe.read_structures.v1` */
      auth: true;
    },
    "/universe/system_jumps/": {
      result: GetUniverseSystemJumpsOk;
    },
    "/universe/system_kills/": {
      result: GetUniverseSystemKillsOk;
    },
    "/universe/systems/": {
      result: GetUniverseSystemsOk;
    },
    "/universe/systems/{system_id}/": {
      result: GetUniverseSystemsSystemIdOk;
    },
    "/universe/types/": {
      result: GetUniverseTypesOk;
    },
    "/universe/types/{type_id}/": {
      result: GetUniverseTypesTypeIdOk;
    },
    "/wars/": {
      result: GetWarsOk;
      query: {
        max_war_id?: number;
      }
    },
    "/wars/{war_id}/": {
      result: GetWarsWarIdOk;
    },
    "/wars/{war_id}/killmails/": {
      result: GetWarsWarIdKillmailsOk;
    }
  },
  post: {
    "/fleets/{fleet_id}/members/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PostFleetsFleetIdMembersInvitation;
    },
    "/ui/autopilot/waypoint/": {
      result: NoContentResponse;
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
      /** `esi-ui.open_window.v1` */
      auth: true;
      query: {
        contract_id: number;
      }
    },
    "/ui/openwindow/information/": {
      result: NoContentResponse;
      /** `esi-ui.open_window.v1` */
      auth: true;
      query: {
        target_id: number;
      }
    },
    "/ui/openwindow/marketdetails/": {
      result: NoContentResponse;
      /** `esi-ui.open_window.v1` */
      auth: true;
      query: {
        type_id: number;
      }
    },
    "/ui/openwindow/newmail/": {
      result: NoContentResponse;
      /** `esi-ui.open_window.v1` */
      auth: true;
      body: PostUiOpenwindowNewmailNewMail;
    },
    "/characters/affiliation/": {
      result: PostCharactersAffiliationOk;
      body: PostCharactersAffiliationCharacters;
    },
    "/characters/{character_id}/assets/locations/": {
      result: PostCharactersCharacterIdAssetsLocationsOk;
      body: PostCharactersCharacterIdAssetsLocationsItemIds;
      /** `esi-assets.read_assets.v1` */
      auth: true;
    },
    "/characters/{character_id}/assets/names/": {
      result: PostCharactersCharacterIdAssetsNamesOk;
      body: PostCharactersCharacterIdAssetsNamesItemIds;
      /** `esi-assets.read_assets.v1` */
      auth: true;
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
    },
    "/characters/{character_id}/cspa/": {
      result: PostCharactersCharacterIdCspaCreated;
      body: PostCharactersCharacterIdCspaCharacters;
      /** `esi-characters.read_contacts.v1` */
      auth: true;
    },
    "/characters/{character_id}/fittings/": {
      result: PostCharactersCharacterIdFittingsCreated;
      body: PostCharactersCharacterIdFittingsFitting;
      /** `esi-fittings.write_fittings.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/": {
      result: PostCharactersCharacterIdMailCreated;
      body: PostCharactersCharacterIdMailMail;
      /** `esi-mail.send_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/labels/": {
      result: PostCharactersCharacterIdMailLabelsCreated;
      body: PostCharactersCharacterIdMailLabelsLabel;
      /** `esi-mail.organize_mail.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/assets/locations/": {
      result: PostCorporationsCorporationIdAssetsLocationsOk;
      body: PostCorporationsCorporationIdAssetsLocationsItemIds;
      /** `esi-assets.read_corporation_assets.v1` */
      auth: true;
    },
    "/corporations/{corporation_id}/assets/names/": {
      result: PostCorporationsCorporationIdAssetsNamesOk;
      body: PostCorporationsCorporationIdAssetsNamesItemIds;
      /** `esi-assets.read_corporation_assets.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/wings/": {
      result: PostFleetsFleetIdWingsCreated;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/wings/{wing_id}/squads/": {
      result: PostFleetsFleetIdWingsWingIdSquadsCreated;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    },
    "/universe/ids/": {
      result: PostUniverseIdsOk;
      body: PostUniverseIdsNames;
    },
    "/universe/names/": {
      result: PostUniverseNamesOk;
      body: PostUniverseNamesIds;
    }
  },
  put: {
    "/characters/{character_id}/calendar/{event_id}/": {
      result: NoContentResponse;
      /** `esi-calendar.respond_calendar_events.v1` */
      auth: true;
      body: PutCharactersCharacterIdCalendarEventIdResponse;
    },
    "/characters/{character_id}/contacts/": {
      result: NoContentResponse;
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
      /** `esi-mail.organize_mail.v1` */
      auth: true;
      body: PutCharactersCharacterIdMailMailIdContents;
    },
    "/fleets/{fleet_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdNewSettings;
    },
    "/fleets/{fleet_id}/members/{member_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdMembersMemberIdMovement;
    },
    "/fleets/{fleet_id}/squads/{squad_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdSquadsSquadIdNaming;
    },
    "/fleets/{fleet_id}/wings/{wing_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
      body: PutFleetsFleetIdWingsWingIdNaming;
    }
  },
  delete: {
    "/characters/{character_id}/contacts/": {
      result: NoContentResponse;
      /** `esi-characters.write_contacts.v1` */
      auth: true;
      query: {
        contact_ids: DeleteCharactersCharacterIdContactsContactIds;
      }
    },
    "/characters/{character_id}/fittings/{fitting_id}/": {
      result: NoContentResponse;
      /** `esi-fittings.write_fittings.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/labels/{label_id}/": {
      result: NoContentResponse;
      /** `esi-mail.organize_mail.v1` */
      auth: true;
    },
    "/characters/{character_id}/mail/{mail_id}/": {
      result: NoContentResponse;
      /** `esi-mail.organize_mail.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/members/{member_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/squads/{squad_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    },
    "/fleets/{fleet_id}/wings/{wing_id}/": {
      result: NoContentResponse;
      /** `esi-fleets.write_fleet.v1` */
      auth: true;
    }
  }
};

