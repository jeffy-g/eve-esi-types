/*!
 * ESI endpoint: get:/markets/structures/{structure_id}/
 */
/**
 * range string
 */
type GetMarketsStructuresStructureIdRange =
  | "station"
  | "region"
  | "solarsystem"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "10"
  | "20"
  | "30"
  | "40";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetMarketsStructuresStructureIdOk = GetMarketsStructuresStructureId_200Ok[];

/**
 * 200 ok object
 */
interface GetMarketsStructuresStructureId_200Ok {
  /**
   * duration integer
   */
  duration: number;
  /**
   * is_buy_order boolean
   */
  is_buy_order: boolean;
  /**
   * issued string
   */
  issued: string;
  /**
   * location_id integer
   */
  location_id: number;
  /**
   * min_volume integer
   */
  min_volume: number;
  /**
   * order_id integer
   */
  order_id: number;
  /**
   * price number
   */
  price: number;
  range: GetMarketsStructuresStructureIdRange;
  type_id: number;
  /**
   * volume_remain integer
   */
  volume_remain: number;
  /**
   * volume_total integer
   */
  volume_total: number;
  [k: string]: unknown | undefined;
}
