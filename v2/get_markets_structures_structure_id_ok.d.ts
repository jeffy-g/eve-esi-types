/**
 * ESI endpoint: /markets/structures/{structure_id}/
 */

/**
 * duration integer
 */
type GetMarketsStructuresStructureIdDuration = number;
/**
 * is_buy_order boolean
 */
type GetMarketsStructuresStructureIdIsBuyOrder = boolean;
/**
 * issued string
 */
type GetMarketsStructuresStructureIdIssued = string;
/**
 * location_id integer
 */
type GetMarketsStructuresStructureIdLocationId = number;
/**
 * min_volume integer
 */
type GetMarketsStructuresStructureIdMinVolume = number;
/**
 * order_id integer
 */
type GetMarketsStructuresStructureIdOrderId = number;
/**
 * price number
 */
type GetMarketsStructuresStructureIdPrice = number;
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
 * type_id integer
 */
type GetMarketsStructuresStructureIdTypeId = number;
/**
 * volume_remain integer
 */
type GetMarketsStructuresStructureIdVolumeRemain = number;
/**
 * volume_total integer
 */
type GetMarketsStructuresStructureIdVolumeTotal = number;
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
  duration: GetMarketsStructuresStructureIdDuration;
  is_buy_order: GetMarketsStructuresStructureIdIsBuyOrder;
  issued: GetMarketsStructuresStructureIdIssued;
  location_id: GetMarketsStructuresStructureIdLocationId;
  min_volume: GetMarketsStructuresStructureIdMinVolume;
  order_id: GetMarketsStructuresStructureIdOrderId;
  price: GetMarketsStructuresStructureIdPrice;
  range: GetMarketsStructuresStructureIdRange;
  type_id: GetMarketsStructuresStructureIdTypeId;
  volume_remain: GetMarketsStructuresStructureIdVolumeRemain;
  volume_total: GetMarketsStructuresStructureIdVolumeTotal;
  [k: string]: unknown | undefined;
}
