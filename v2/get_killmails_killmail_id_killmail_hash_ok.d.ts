/**
 * ESI endpoint: /killmails/{killmail_id}/{killmail_hash}/
 */

/**
 * alliance_id integer
 */
type GetKillmailsKillmailIdKillmailHashAllianceId = number;
/**
 * character_id integer
 */
type GetKillmailsKillmailIdKillmailHashCharacterId = number;
/**
 * corporation_id integer
 */
type GetKillmailsKillmailIdKillmailHashCorporationId = number;
/**
 * damage_done integer
 */
type GetKillmailsKillmailIdKillmailHashDamageDone = number;
/**
 * faction_id integer
 */
type GetKillmailsKillmailIdKillmailHashFactionId = number;
/**
 * Was the attacker the one to achieve the final blow
 *
 */
type GetKillmailsKillmailIdKillmailHashFinalBlow = boolean;
/**
 * Security status for the attacker
 *
 */
type GetKillmailsKillmailIdKillmailHashSecurityStatus = number;
/**
 * What ship was the attacker flying
 *
 */
type GetKillmailsKillmailIdKillmailHashShipTypeId = number;
/**
 * What weapon was used by the attacker for the kill
 *
 */
type GetKillmailsKillmailIdKillmailHashWeaponTypeId = number;
/**
 * attackers array
 *
 * @maxItems 10000
 */
type GetKillmailsKillmailIdKillmailHashAttackers = GetKillmailsKillmailIdKillmailHashAttacker[];
/**
 * ID of the killmail
 */
type GetKillmailsKillmailIdKillmailHashKillmailId = number;
/**
 * Time that the victim was killed and the killmail generated
 *
 */
type GetKillmailsKillmailIdKillmailHashKillmailTime = string;
/**
 * Moon if the kill took place at one
 */
type GetKillmailsKillmailIdKillmailHashMoonId = number;
/**
 * Solar system that the kill took place in
 *
 */
type GetKillmailsKillmailIdKillmailHashSolarSystemId = number;
/**
 * alliance_id integer
 */
type GetKillmailsKillmailIdKillmailHashVictimAllianceId = number;
/**
 * character_id integer
 */
type GetKillmailsKillmailIdKillmailHashVictimCharacterId = number;
/**
 * corporation_id integer
 */
type GetKillmailsKillmailIdKillmailHashVictimCorporationId = number;
/**
 * How much total damage was taken by the victim
 *
 */
type GetKillmailsKillmailIdKillmailHashDamageTaken = number;
/**
 * faction_id integer
 */
type GetKillmailsKillmailIdKillmailHashVictimFactionId = number;
/**
 * Flag for the location of the item
 *
 */
type GetKillmailsKillmailIdKillmailHashFlag = number;
/**
 * item_type_id integer
 */
type GetKillmailsKillmailIdKillmailHashItemTypeId = number;
/**
 * flag integer
 */
type GetKillmailsKillmailIdKillmailHashItemFlag = number;
/**
 * item_type_id integer
 */
type GetKillmailsKillmailIdKillmailHashItemItemTypeId = number;
/**
 * quantity_destroyed integer
 */
type GetKillmailsKillmailIdKillmailHashItemQuantityDestroyed = number;
/**
 * quantity_dropped integer
 */
type GetKillmailsKillmailIdKillmailHashItemQuantityDropped = number;
/**
 * singleton integer
 */
type GetKillmailsKillmailIdKillmailHashItemSingleton = number;
/**
 * items array
 *
 * @maxItems 10000
 */
type GetKillmailsKillmailIdKillmailHashItemItems = GetKillmailsKillmailIdKillmailHashItemsItem[];
/**
 * How many of the item were destroyed if any
 *
 */
type GetKillmailsKillmailIdKillmailHashQuantityDestroyed = number;
/**
 * How many of the item were dropped if any
 *
 */
type GetKillmailsKillmailIdKillmailHashQuantityDropped = number;
/**
 * singleton integer
 */
type GetKillmailsKillmailIdKillmailHashSingleton = number;
/**
 * items array
 *
 * @maxItems 10000
 */
type GetKillmailsKillmailIdKillmailHashItems = GetKillmailsKillmailIdKillmailHashItem[];
/**
 * x number
 */
type GetKillmailsKillmailIdKillmailHashX = number;
/**
 * y number
 */
type GetKillmailsKillmailIdKillmailHashY = number;
/**
 * z number
 */
type GetKillmailsKillmailIdKillmailHashZ = number;
/**
 * The ship that the victim was piloting and was destroyed
 *
 */
type GetKillmailsKillmailIdKillmailHashVictimShipTypeId = number;
/**
 * War if the killmail is generated in relation to an official war
 *
 */
type GetKillmailsKillmailIdKillmailHashWarId = number;

/**
 * 200 ok object
 */
interface GetKillmailsKillmailIdKillmailHashOk {
  attackers: GetKillmailsKillmailIdKillmailHashAttackers;
  killmail_id: GetKillmailsKillmailIdKillmailHashKillmailId;
  killmail_time: GetKillmailsKillmailIdKillmailHashKillmailTime;
  moon_id?: GetKillmailsKillmailIdKillmailHashMoonId;
  solar_system_id: GetKillmailsKillmailIdKillmailHashSolarSystemId;
  victim: GetKillmailsKillmailIdKillmailHashVictim;
  war_id?: GetKillmailsKillmailIdKillmailHashWarId;
  [k: string]: unknown | undefined;
}
/**
 * attacker object
 */
interface GetKillmailsKillmailIdKillmailHashAttacker {
  alliance_id?: GetKillmailsKillmailIdKillmailHashAllianceId;
  character_id?: GetKillmailsKillmailIdKillmailHashCharacterId;
  corporation_id?: GetKillmailsKillmailIdKillmailHashCorporationId;
  damage_done: GetKillmailsKillmailIdKillmailHashDamageDone;
  faction_id?: GetKillmailsKillmailIdKillmailHashFactionId;
  final_blow: GetKillmailsKillmailIdKillmailHashFinalBlow;
  security_status: GetKillmailsKillmailIdKillmailHashSecurityStatus;
  ship_type_id?: GetKillmailsKillmailIdKillmailHashShipTypeId;
  weapon_type_id?: GetKillmailsKillmailIdKillmailHashWeaponTypeId;
  [k: string]: unknown | undefined;
}
/**
 * victim object
 */
interface GetKillmailsKillmailIdKillmailHashVictim {
  alliance_id?: GetKillmailsKillmailIdKillmailHashVictimAllianceId;
  character_id?: GetKillmailsKillmailIdKillmailHashVictimCharacterId;
  corporation_id?: GetKillmailsKillmailIdKillmailHashVictimCorporationId;
  damage_taken: GetKillmailsKillmailIdKillmailHashDamageTaken;
  faction_id?: GetKillmailsKillmailIdKillmailHashVictimFactionId;
  items?: GetKillmailsKillmailIdKillmailHashItems;
  position?: GetKillmailsKillmailIdKillmailHashPosition;
  ship_type_id: GetKillmailsKillmailIdKillmailHashVictimShipTypeId;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface GetKillmailsKillmailIdKillmailHashItem {
  flag: GetKillmailsKillmailIdKillmailHashFlag;
  item_type_id: GetKillmailsKillmailIdKillmailHashItemTypeId;
  items?: GetKillmailsKillmailIdKillmailHashItemItems;
  quantity_destroyed?: GetKillmailsKillmailIdKillmailHashQuantityDestroyed;
  quantity_dropped?: GetKillmailsKillmailIdKillmailHashQuantityDropped;
  singleton: GetKillmailsKillmailIdKillmailHashSingleton;
  [k: string]: unknown | undefined;
}
/**
 * item object
 */
interface GetKillmailsKillmailIdKillmailHashItemsItem {
  flag: GetKillmailsKillmailIdKillmailHashItemFlag;
  item_type_id: GetKillmailsKillmailIdKillmailHashItemItemTypeId;
  quantity_destroyed?: GetKillmailsKillmailIdKillmailHashItemQuantityDestroyed;
  quantity_dropped?: GetKillmailsKillmailIdKillmailHashItemQuantityDropped;
  singleton: GetKillmailsKillmailIdKillmailHashItemSingleton;
  [k: string]: unknown | undefined;
}
/**
 * Coordinates of the victim in Cartesian space relative to the Sun
 *
 */
interface GetKillmailsKillmailIdKillmailHashPosition {
  x: GetKillmailsKillmailIdKillmailHashX;
  y: GetKillmailsKillmailIdKillmailHashY;
  z: GetKillmailsKillmailIdKillmailHashZ;
  [k: string]: unknown | undefined;
}
