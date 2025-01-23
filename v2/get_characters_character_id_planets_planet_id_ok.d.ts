/**
 * ESI endpoint: /characters/{character_id}/planets/{planet_id}/
 */

/**
 * destination_pin_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdDestinationPinId = number;
/**
 * link_level integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdLinkLevel = number;
/**
 * source_pin_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdSourcePinId = number;
/**
 * links array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdPlanetsPlanetIdLinks = GetCharactersCharacterIdPlanetsPlanetIdLink[];
/**
 * amount integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdAmount = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdContentTypeId = number;
/**
 * contents array
 *
 * @maxItems 90
 */
type GetCharactersCharacterIdPlanetsPlanetIdContents = GetCharactersCharacterIdPlanetsPlanetIdContent[];
/**
 * expiry_time string
 */
type GetCharactersCharacterIdPlanetsPlanetIdExpiryTime = string;
/**
 * in seconds
 */
type GetCharactersCharacterIdPlanetsPlanetIdCycleTime = number;
/**
 * head_radius number
 */
type GetCharactersCharacterIdPlanetsPlanetIdHeadRadius = number;
/**
 * heads array
 *
 * @maxItems 10
 */
type GetCharactersCharacterIdPlanetsPlanetIdHeads =
  | []
  | [GetCharactersCharacterIdPlanetsPlanetIdHead]
  | [GetCharactersCharacterIdPlanetsPlanetIdHead, GetCharactersCharacterIdPlanetsPlanetIdHead]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead,
      GetCharactersCharacterIdPlanetsPlanetIdHead
    ];
/**
 * head_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdHeadId = number;
/**
 * latitude number
 */
type GetCharactersCharacterIdPlanetsPlanetIdHeadLatitude = number;
/**
 * longitude number
 */
type GetCharactersCharacterIdPlanetsPlanetIdHeadLongitude = number;
/**
 * product_type_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdProductTypeId = number;
/**
 * qty_per_cycle integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdQtyPerCycle = number;
/**
 * schematic_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdFactoryDetailsSchematicId = number;
/**
 * install_time string
 */
type GetCharactersCharacterIdPlanetsPlanetIdInstallTime = string;
/**
 * last_cycle_start string
 */
type GetCharactersCharacterIdPlanetsPlanetIdLastCycleStart = string;
/**
 * latitude number
 */
type GetCharactersCharacterIdPlanetsPlanetIdLatitude = number;
/**
 * longitude number
 */
type GetCharactersCharacterIdPlanetsPlanetIdLongitude = number;
/**
 * pin_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdPinId = number;
/**
 * schematic_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdSchematicId = number;
/**
 * type_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdTypeId = number;
/**
 * pins array
 *
 * @maxItems 100
 */
type GetCharactersCharacterIdPlanetsPlanetIdPins = GetCharactersCharacterIdPlanetsPlanetIdPin[];
/**
 * content_type_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdRouteContentTypeId = number;
/**
 * destination_pin_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdRouteDestinationPinId = number;
/**
 * quantity number
 */
type GetCharactersCharacterIdPlanetsPlanetIdQuantity = number;
/**
 * route_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdRouteId = number;
/**
 * source_pin_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdRouteSourcePinId = number;
/**
 * list of pin ID waypoints
 *
 * @maxItems 5
 */
type GetCharactersCharacterIdPlanetsPlanetIdWaypoints =
  | []
  | [GetCharactersCharacterIdPlanetsPlanetIdWaypoint]
  | [GetCharactersCharacterIdPlanetsPlanetIdWaypoint, GetCharactersCharacterIdPlanetsPlanetIdWaypoint]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint
    ]
  | [
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint,
      GetCharactersCharacterIdPlanetsPlanetIdWaypoint
    ];
/**
 * waypoint integer
 */
type GetCharactersCharacterIdPlanetsPlanetIdWaypoint = number;
/**
 * routes array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdPlanetsPlanetIdRoutes = GetCharactersCharacterIdPlanetsPlanetIdRoute[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdOk {
  links: GetCharactersCharacterIdPlanetsPlanetIdLinks;
  pins: GetCharactersCharacterIdPlanetsPlanetIdPins;
  routes: GetCharactersCharacterIdPlanetsPlanetIdRoutes;
  [k: string]: unknown | undefined;
}
/**
 * link object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdLink {
  destination_pin_id: GetCharactersCharacterIdPlanetsPlanetIdDestinationPinId;
  link_level: GetCharactersCharacterIdPlanetsPlanetIdLinkLevel;
  source_pin_id: GetCharactersCharacterIdPlanetsPlanetIdSourcePinId;
  [k: string]: unknown | undefined;
}
/**
 * pin object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdPin {
  contents?: GetCharactersCharacterIdPlanetsPlanetIdContents;
  expiry_time?: GetCharactersCharacterIdPlanetsPlanetIdExpiryTime;
  extractor_details?: GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails;
  factory_details?: GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails;
  install_time?: GetCharactersCharacterIdPlanetsPlanetIdInstallTime;
  last_cycle_start?: GetCharactersCharacterIdPlanetsPlanetIdLastCycleStart;
  latitude: GetCharactersCharacterIdPlanetsPlanetIdLatitude;
  longitude: GetCharactersCharacterIdPlanetsPlanetIdLongitude;
  pin_id: GetCharactersCharacterIdPlanetsPlanetIdPinId;
  schematic_id?: GetCharactersCharacterIdPlanetsPlanetIdSchematicId;
  type_id: GetCharactersCharacterIdPlanetsPlanetIdTypeId;
  [k: string]: unknown | undefined;
}
/**
 * content object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdContent {
  amount: GetCharactersCharacterIdPlanetsPlanetIdAmount;
  type_id: GetCharactersCharacterIdPlanetsPlanetIdContentTypeId;
  [k: string]: unknown | undefined;
}
/**
 * extractor_details object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails {
  cycle_time?: GetCharactersCharacterIdPlanetsPlanetIdCycleTime;
  head_radius?: GetCharactersCharacterIdPlanetsPlanetIdHeadRadius;
  heads: GetCharactersCharacterIdPlanetsPlanetIdHeads;
  product_type_id?: GetCharactersCharacterIdPlanetsPlanetIdProductTypeId;
  qty_per_cycle?: GetCharactersCharacterIdPlanetsPlanetIdQtyPerCycle;
  [k: string]: unknown | undefined;
}
/**
 * head object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdHead {
  head_id: GetCharactersCharacterIdPlanetsPlanetIdHeadId;
  latitude: GetCharactersCharacterIdPlanetsPlanetIdHeadLatitude;
  longitude: GetCharactersCharacterIdPlanetsPlanetIdHeadLongitude;
  [k: string]: unknown | undefined;
}
/**
 * factory_details object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails {
  schematic_id: GetCharactersCharacterIdPlanetsPlanetIdFactoryDetailsSchematicId;
  [k: string]: unknown | undefined;
}
/**
 * route object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdRoute {
  content_type_id: GetCharactersCharacterIdPlanetsPlanetIdRouteContentTypeId;
  destination_pin_id: GetCharactersCharacterIdPlanetsPlanetIdRouteDestinationPinId;
  quantity: GetCharactersCharacterIdPlanetsPlanetIdQuantity;
  route_id: GetCharactersCharacterIdPlanetsPlanetIdRouteId;
  source_pin_id: GetCharactersCharacterIdPlanetsPlanetIdRouteSourcePinId;
  waypoints?: GetCharactersCharacterIdPlanetsPlanetIdWaypoints;
  [k: string]: unknown | undefined;
}
