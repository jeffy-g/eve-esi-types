/*!
 * ESI endpoint: get:/universe/stations/{station_id}/
 */
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
 * 200 ok object
 */
interface GetUniverseStationsStationIdOk {
  /**
   * max_dockable_ship_volume number
   */
  max_dockable_ship_volume: number;
  /**
   * name string
   */
  name: string;
  /**
   * office_rental_cost number
   */
  office_rental_cost: number;
  /**
   * ID of the corporation that controls this station
   */
  owner?: number;
  position: GetUniverseStationsStationIdPosition;
  /**
   * race_id integer
   */
  race_id?: number;
  /**
   * reprocessing_efficiency number
   */
  reprocessing_efficiency: number;
  /**
   * reprocessing_stations_take number
   */
  reprocessing_stations_take: number;
  services: GetUniverseStationsStationIdServices;
  /**
   * station_id integer
   */
  station_id: number;
  /**
   * The solar system this station is in
   */
  system_id: number;
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * position object
 */
interface GetUniverseStationsStationIdPosition {
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
