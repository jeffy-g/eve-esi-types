/**
 * ESI endpoint: /universe/stations/{station_id}/
 */

/**
 * max_dockable_ship_volume number
 */
type GetUniverseStationsStationIdMaxDockableShipVolume = number;
/**
 * name string
 */
type GetUniverseStationsStationIdName = string;
/**
 * office_rental_cost number
 */
type GetUniverseStationsStationIdOfficeRentalCost = number;
/**
 * ID of the corporation that controls this station
 */
type GetUniverseStationsStationIdOwner = number;
/**
 * x number
 */
type GetUniverseStationsStationIdX = number;
/**
 * y number
 */
type GetUniverseStationsStationIdY = number;
/**
 * z number
 */
type GetUniverseStationsStationIdZ = number;
/**
 * race_id integer
 */
type GetUniverseStationsStationIdRaceId = number;
/**
 * reprocessing_efficiency number
 */
type GetUniverseStationsStationIdReprocessingEfficiency = number;
/**
 * reprocessing_stations_take number
 */
type GetUniverseStationsStationIdReprocessingStationsTake = number;
/**
 * service string
 */
type GetUniverseStationsStationIdService =
  | "bounty-missions"
  | "assasination-missions"
  | "courier-missions"
  | "interbus"
  | "reprocessing-plant"
  | "refinery"
  | "market"
  | "black-market"
  | "stock-exchange"
  | "cloning"
  | "surgery"
  | "dna-therapy"
  | "repair-facilities"
  | "factory"
  | "labratory"
  | "gambling"
  | "fitting"
  | "paintshop"
  | "news"
  | "storage"
  | "insurance"
  | "docking"
  | "office-rental"
  | "jump-clone-facility"
  | "loyalty-point-store"
  | "navy-offices"
  | "security-offices";
/**
 * services array
 *
 * @maxItems 30
 */
type GetUniverseStationsStationIdServices = GetUniverseStationsStationIdService[];
/**
 * station_id integer
 */
type GetUniverseStationsStationIdStationId = number;
/**
 * The solar system this station is in
 */
type GetUniverseStationsStationIdSystemId = number;
/**
 * type_id integer
 */
type GetUniverseStationsStationIdTypeId = number;

/**
 * 200 ok object
 */
interface GetUniverseStationsStationIdOk {
  max_dockable_ship_volume: GetUniverseStationsStationIdMaxDockableShipVolume;
  name: GetUniverseStationsStationIdName;
  office_rental_cost: GetUniverseStationsStationIdOfficeRentalCost;
  owner?: GetUniverseStationsStationIdOwner;
  position: GetUniverseStationsStationIdPosition;
  race_id?: GetUniverseStationsStationIdRaceId;
  reprocessing_efficiency: GetUniverseStationsStationIdReprocessingEfficiency;
  reprocessing_stations_take: GetUniverseStationsStationIdReprocessingStationsTake;
  services: GetUniverseStationsStationIdServices;
  station_id: GetUniverseStationsStationIdStationId;
  system_id: GetUniverseStationsStationIdSystemId;
  type_id: GetUniverseStationsStationIdTypeId;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseStationsStationIdPosition {
  x: GetUniverseStationsStationIdX;
  y: GetUniverseStationsStationIdY;
  z: GetUniverseStationsStationIdZ;
  [k: string]: unknown | undefined;
}
