/*!
 * ESI endpoint: get:/killmails/{killmail_id}/{killmail_hash}/
 */
/**
 * attackers array
 *
 * @maxItems 10000
 */
type GetKillmailsKillmailIdKillmailHashAttackers = GetKillmailsKillmailIdKillmailHashAttacker[];
/**
 * items array
 *
 * @maxItems 10000
 */
type GetKillmailsKillmailIdKillmailHashItemItems = GetKillmailsKillmailIdKillmailHashItemsItem[];
/**
 * items array
 *
 * @maxItems 10000
 */
type GetKillmailsKillmailIdKillmailHashItems = GetKillmailsKillmailIdKillmailHashItem[];

/**
 * 200 ok object
 */
interface GetKillmailsKillmailIdKillmailHashOk {
  attackers: GetKillmailsKillmailIdKillmailHashAttackers;
  /**
   * ID of the killmail
   */
  killmail_id: number;
  /**
   * Time that the victim was killed and the killmail generated
   *
   */
  killmail_time: string;
  /**
   * Moon if the kill took place at one
   */
  moon_id?: number;
  /**
   * Solar system that the kill took place in
   *
   */
  solar_system_id: number;
  victim: GetKillmailsKillmailIdKillmailHashVictim;
  /**
   * War if the killmail is generated in relation to an official war
   *
   */
  war_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * attacker object
 */
interface GetKillmailsKillmailIdKillmailHashAttacker {
  /**
   * alliance_id integer
   */
  alliance_id?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  /**
   * corporation_id integer
   */
  corporation_id?: number;
  /**
   * damage_done integer
   */
  damage_done: number;
  /**
   * faction_id integer
   */
  faction_id?: number;
  /**
   * Was the attacker the one to achieve the final blow
   *
   */
  final_blow: boolean;
  /**
   * Security status for the attacker
   *
   */
  security_status: number;
  ship_type_id?: number;
  weapon_type_id?: number;
  [k: string]: unknown | undefined;
}
/**
 * victim object
 */
interface GetKillmailsKillmailIdKillmailHashVictim {
  /**
   * alliance_id integer
   */
  alliance_id?: number;
  /**
   * character_id integer
   */
  character_id?: number;
  /**
   * corporation_id integer
   */
  corporation_id?: number;
  /**
   * How much total damage was taken by the victim
   *
   */
  damage_taken: number;
  /**
   * faction_id integer
   */
  faction_id?: number;
  items?: GetKillmailsKillmailIdKillmailHashItems;
  position?: GetKillmailsKillmailIdKillmailHashPosition;
  ship_type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface GetKillmailsKillmailIdKillmailHashItem {
  /**
   * Flag for the location of the item
   *
   */
  flag: number;
  item_type_id: number;
  items?: GetKillmailsKillmailIdKillmailHashItemItems;
  /**
   * How many of the item were destroyed if any
   *
   */
  quantity_destroyed?: number;
  /**
   * How many of the item were dropped if any
   *
   */
  quantity_dropped?: number;
  /**
   * singleton integer
   */
  singleton: number;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface GetKillmailsKillmailIdKillmailHashItemsItem {
  /**
   * flag integer
   */
  flag: number;
  item_type_id: number;
  /**
   * quantity_destroyed integer
   */
  quantity_destroyed?: number;
  /**
   * quantity_dropped integer
   */
  quantity_dropped?: number;
  /**
   * singleton integer
   */
  singleton: number;
  [k: string]: unknown | undefined;
}
/**
 * Coordinates of the victim in Cartesian space relative to the Sun
 *
 */
interface GetKillmailsKillmailIdKillmailHashPosition {
  /**
   * x number
   */
  x: number;
  /**
   * y number
   */
  y: number;
  /**
   * z number
   */
  z: number;
  [k: string]: unknown | undefined;
}
