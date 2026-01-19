// - - - - - - - - - - - - - - - - - - - - - - - - - -
//                    BODY TYPES
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/* (Character) post_characters_affiliation:body, type name: "characters" */

/**
 * characters array
 *
 * @minItems 1
 * @maxItems 1000
 */
type PostCharactersAffiliationCharacters = [number, ...number[]];

/* (Assets) post_characters_character_id_assets_locations:body, type name: "item_ids" */

/**
 * item_ids array
 *
 * @minItems 1
 * @maxItems 1000
 */
type PostCharactersCharacterIdAssetsLocationsItemIds = [number, ...number[]];

/* (Assets) post_characters_character_id_assets_names:body, type name: "item_ids" */

/**
 * item_ids array
 *
 * @minItems 1
 * @maxItems 1000
 */
type PostCharactersCharacterIdAssetsNamesItemIds = [number, ...number[]];

/* (Calendar) put_characters_character_id_calendar_event_id:body, type name: "response" */

/**
 * response string
 */
type PutCharactersCharacterIdCalendarEventIdResponseResponse = "accepted" | "declined" | "tentative";

/**
 * response object
 */
interface PutCharactersCharacterIdCalendarEventIdResponse {
  response: PutCharactersCharacterIdCalendarEventIdResponseResponse;
  [k: string]: unknown | undefined;
}

/* (Contacts) post_characters_character_id_contacts:body, type name: "contact_ids" */

/**
 * contact_ids array
 *
 * @minItems 1
 * @maxItems 100
 */
type PostCharactersCharacterIdContactsContactIds = [number, ...number[]];

/* (Contacts) put_characters_character_id_contacts:body, type name: "contact_ids" */

/**
 * contact_ids array
 *
 * @minItems 1
 * @maxItems 100
 */
type PutCharactersCharacterIdContactsContactIds = [number, ...number[]];

/* (Character) post_characters_character_id_cspa:body, type name: "characters" */

/**
 * characters array
 *
 * @minItems 1
 * @maxItems 100
 */
type PostCharactersCharacterIdCspaCharacters = [number, ...number[]];

/* (Fittings) post_characters_character_id_fittings:body, type name: "fitting" */

/**
 * items array
 *
 * @minItems 1
 * @maxItems 512
 */
type PostCharactersCharacterIdFittingsItems = [PostCharactersCharacterIdFittingsItem, ...PostCharactersCharacterIdFittingsItem[]];
/**
 * Fitting location for the item. Entries placed in 'Invalid' will be discarded. If this leaves the fitting with nothing, it will cause an error.
 */
type PostCharactersCharacterIdFittingsFlag =
  | "Cargo"
  | "DroneBay"
  | "FighterBay"
  | "HiSlot0"
  | "HiSlot1"
  | "HiSlot2"
  | "HiSlot3"
  | "HiSlot4"
  | "HiSlot5"
  | "HiSlot6"
  | "HiSlot7"
  | "Invalid"
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
  | "RigSlot0"
  | "RigSlot1"
  | "RigSlot2"
  | "ServiceSlot0"
  | "ServiceSlot1"
  | "ServiceSlot2"
  | "ServiceSlot3"
  | "ServiceSlot4"
  | "ServiceSlot5"
  | "ServiceSlot6"
  | "ServiceSlot7"
  | "SubSystemSlot0"
  | "SubSystemSlot1"
  | "SubSystemSlot2"
  | "SubSystemSlot3";

/**
 * fitting object
 */
interface PostCharactersCharacterIdFittingsFitting {
  /**
   * description string
   */
  description: string;
  items: PostCharactersCharacterIdFittingsItems;
  /**
   * name string
   */
  name: string;
  ship_type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface PostCharactersCharacterIdFittingsItem {
  flag: PostCharactersCharacterIdFittingsFlag;
  /**
   * quantity integer
   */
  quantity: number;
  type_id: number;
  [k: string]: unknown | undefined;
}

/* (Mail) post_characters_character_id_mail:body, type name: "mail" */

/**
 * recipients array
 *
 * @minItems 1
 * @maxItems 50
 */
type PostCharactersCharacterIdMailRecipients = [PostCharactersCharacterIdMailRecipient, ...PostCharactersCharacterIdMailRecipient[]];
/**
 * recipient_type string
 */
type PostCharactersCharacterIdMailRecipientType = "alliance" | "character" | "corporation" | "mailing_list";

/**
 * mail object
 */
interface PostCharactersCharacterIdMailMail {
  /**
   * approved_cost integer
   */
  approved_cost?: number;
  /**
   * body string
   */
  body: string;
  recipients: PostCharactersCharacterIdMailRecipients;
  /**
   * subject string
   */
  subject: string;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface PostCharactersCharacterIdMailRecipient {
  /**
   * recipient_id integer
   */
  recipient_id: number;
  recipient_type: PostCharactersCharacterIdMailRecipientType;
  [k: string]: unknown | undefined;
}

/* (Mail) post_characters_character_id_mail_labels:body, type name: "label" */

/**
 * Hexadecimal string representing label color, in RGB format
 */
type PostCharactersCharacterIdMailLabelsColor =
  | "#0000fe"
  | "#006634"
  | "#0099ff"
  | "#00ff33"
  | "#01ffff"
  | "#349800"
  | "#660066"
  | "#666666"
  | "#999999"
  | "#99ffff"
  | "#9a0000"
  | "#ccff9a"
  | "#e6e6e6"
  | "#fe0000"
  | "#ff6600"
  | "#ffff01"
  | "#ffffcd"
  | "#ffffff";

/**
 * label object
 */
interface PostCharactersCharacterIdMailLabelsLabel {
  color?: PostCharactersCharacterIdMailLabelsColor;
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}

/* (Mail) put_characters_character_id_mail_mail_id:body, type name: "contents" */


/**
 * contents object
 */
interface PutCharactersCharacterIdMailMailIdContents {
  /**
   * Labels to assign to the mail. Pre-existing labels are unassigned.
   *
   * @maxItems 25
   */
  labels?: number[];
  /**
   * Whether the mail is flagged as read
   */
  read?: boolean;
  [k: string]: unknown | undefined;
}

/* (Assets) post_corporations_corporation_id_assets_locations:body, type name: "item_ids" */

/**
 * item_ids array
 *
 * @minItems 1
 * @maxItems 1000
 */
type PostCorporationsCorporationIdAssetsLocationsItemIds = [number, ...number[]];

/* (Assets) post_corporations_corporation_id_assets_names:body, type name: "item_ids" */

/**
 * item_ids array
 *
 * @minItems 1
 * @maxItems 1000
 */
type PostCorporationsCorporationIdAssetsNamesItemIds = [number, ...number[]];

/* (Fleets) put_fleets_fleet_id:body, type name: "new_settings" */


/**
 * new_settings object
 */
interface PutFleetsFleetIdNewSettings {
  /**
   * Should free-move be enabled in the fleet
   */
  is_free_move?: boolean;
  /**
   * New fleet MOTD in CCP flavoured HTML
   */
  motd?: string;
  [k: string]: unknown | undefined;
}

/* (Fleets) post_fleets_fleet_id_members:body, type name: "invitation" */

/**
 * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
 */
type PostFleetsFleetIdMembersRole = "fleet_commander" | "wing_commander" | "squad_commander" | "squad_member";

/**
 * invitation object
 */
interface PostFleetsFleetIdMembersInvitation {
  /**
   * The character you want to invite
   */
  character_id: number;
  role: PostFleetsFleetIdMembersRole;
  /**
   * squad_id integer
   */
  squad_id?: number;
  /**
   * wing_id integer
   */
  wing_id?: number;
  [k: string]: unknown | undefined;
}

/* (Fleets) put_fleets_fleet_id_members_member_id:body, type name: "movement" */

/**
 * If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
 */
type PutFleetsFleetIdMembersMemberIdRole =
  | "fleet_commander"
  | "wing_commander"
  | "squad_commander"
  | "squad_member";

/**
 * movement object
 */
interface PutFleetsFleetIdMembersMemberIdMovement {
  role: PutFleetsFleetIdMembersMemberIdRole;
  /**
   * squad_id integer
   */
  squad_id?: number;
  /**
   * wing_id integer
   */
  wing_id?: number;
  [k: string]: unknown | undefined;
}

/* (Fleets) put_fleets_fleet_id_squads_squad_id:body, type name: "naming" */


/**
 * naming object
 */
interface PutFleetsFleetIdSquadsSquadIdNaming {
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}

/* (Fleets) put_fleets_fleet_id_wings_wing_id:body, type name: "naming" */


/**
 * naming object
 */
interface PutFleetsFleetIdWingsWingIdNaming {
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}

/* (User Interface) post_ui_openwindow_newmail:body, type name: "new_mail" */

/**
 * recipients array
 *
 * @minItems 1
 * @maxItems 50
 */
type PostUiOpenwindowNewmailRecipients = [number, ...number[]];

/**
 * new_mail object
 */
interface PostUiOpenwindowNewmailNewMail {
  /**
   * body string
   */
  body: string;
  recipients: PostUiOpenwindowNewmailRecipients;
  /**
   * subject string
   */
  subject: string;
  /**
   * to_corp_or_alliance_id integer
   */
  to_corp_or_alliance_id?: number;
  /**
   * Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
   */
  to_mailing_list_id?: number;
  [k: string]: unknown | undefined;
}

/* (Universe) post_universe_ids:body, type name: "names" */

/**
 * names array
 *
 * @minItems 1
 * @maxItems 500
 */
type PostUniverseIdsNames = [string, ...string[]];

/* (Universe) post_universe_names:body, type name: "ids" */

/**
 * ids array
 *
 * @minItems 1
 * @maxItems 1000
 */
type PostUniverseNamesIds = [number, ...number[]];


// - - - - - - - - - - - - - - - - - - - - - - - - - -
//                    QUERY TYPES
// - - - - - - - - - - - - - - - - - - - - - - - - - -
/* (Contacts) delete_characters_character_id_contacts:query, parameter name: "contact_ids" */

/**
 * A list of contacts to delete
 *
 * @minItems 1
 * @maxItems 20
 */
type DeleteCharactersCharacterIdContactsContactIds = [number, ...number[]];

/* (Contacts) post_characters_character_id_contacts:query, parameter name: "label_ids" */

/**
 * Add custom labels to the new contact
 *
 * @maxItems 63
 */
type PostCharactersCharacterIdContactsLabelIds = number[];

/* (Contacts) put_characters_character_id_contacts:query, parameter name: "label_ids" */

/**
 * Add custom labels to the contact
 *
 * @maxItems 63
 */
type PutCharactersCharacterIdContactsLabelIds = number[];

/* (Mail) get_characters_character_id_mail:query, parameter name: "labels" */

/**
 * Fetch only mails that match one or more of the given labels
 *
 * @minItems 1
 * @maxItems 25
 */
type GetCharactersCharacterIdMailLabels = [number, ...number[]];

/* get_characters_character_id_search, categories query type */
type GetCharactersCharacterIdSearchCategory =
  | "agent"
  | "alliance"
  | "character"
  | "constellation"
  | "corporation"
  | "faction"
  | "inventory_type"
  | "region"
  | "solar_system"
  | "station"
  | "structure";


/* (Search) get_characters_character_id_search:query, parameter name: "categories" */

/**
 * Type of entities to search for
 *
 * @minItems 1
 * @maxItems 11
 */
type GetCharactersCharacterIdSearchCategories = [GetCharactersCharacterIdSearchCategory, ...GetCharactersCharacterIdSearchCategory[]];

/* (Search) get_characters_character_id_search:query, parameter name: "search" */

/**
 * The string to search on
 */
type GetCharactersCharacterIdSearchSearch = string;

/* get_markets_region_id_orders, order_type query type */

/**
 * Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
 */
type GetMarketsRegionIdOrdersOrderType = "buy" | "sell" | "all";

/* (Routes) get_route_origin_destination:query, parameter name: "avoid" */

/**
 * avoid solar system ID(s)
 *
 * @maxItems 100
 */
type GetRouteOriginDestinationAvoid = number[];

/* (Routes) get_route_origin_destination:query, parameter name: "connections" */

/**
 * connected solar system pairs
 *
 * @maxItems 100
 */
type GetRouteOriginDestinationConnections = [number, number][];

/* (Routes) get_route_origin_destination:query, parameter name: "flag" */

/**
 * route security preference
 */
type GetRouteOriginDestinationFlag = "shortest" | "secure" | "insecure";

/* get_universe_structures, filter query type */

/**
 * Only list public structures that have this service online
 */
type GetUniverseStructuresFilter = "market" | "manufacturing_basic";
