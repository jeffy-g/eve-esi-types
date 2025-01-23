/**
* ESI endpoint: /characters/{character_id}/planets/{planet_id}/
*/
/**
 * links array
 *
 * @maxItems 500
 */
type GetCharactersCharacterIdPlanetsPlanetIdLinks = GetCharactersCharacterIdPlanetsPlanetIdLink[];
/**
 * contents array
 *
 * @maxItems 90
 */
type GetCharactersCharacterIdPlanetsPlanetIdContents = GetCharactersCharacterIdPlanetsPlanetIdContent[];
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
 * pins array
 *
 * @maxItems 100
 */
type GetCharactersCharacterIdPlanetsPlanetIdPins = GetCharactersCharacterIdPlanetsPlanetIdPin[];
/**
 * list of pin ID waypoints
 *
 * @maxItems 5
 */
type GetCharactersCharacterIdPlanetsPlanetIdWaypoints =
  | []
/**
 * waypoint integer
 */
  | [number]
/**
 * waypoint integer
 */
  | [GetCharactersCharacterIdPlanetsPlanetIdWaypoint, number]
  | [
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number
    ]
  | [
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number
    ]
  | [
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number,
/**
 * waypoint integer
 */
      number
    ];
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
/**
 * destination_pin_id integer
 */
  destination_pin_id: number;
/**
 * link_level integer
 */
  link_level: number;
/**
 * source_pin_id integer
 */
  source_pin_id: number;
  [k: string]: unknown | undefined;
}
/**
 * pin object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdPin {
  contents?: GetCharactersCharacterIdPlanetsPlanetIdContents;
/**
 * expiry_time string
 */
  expiry_time?: string;
  extractor_details?: GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails;
  factory_details?: GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails;
/**
 * install_time string
 */
  install_time?: string;
/**
 * last_cycle_start string
 */
  last_cycle_start?: string;
/**
 * latitude number
 */
  latitude: number;
/**
 * longitude number
 */
  longitude: number;
/**
 * pin_id integer
 */
  pin_id: number;
/**
 * schematic_id integer
 */
  schematic_id?: number;
/**
 * type_id integer
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * content object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdContent {
/**
 * amount integer
 */
  amount: number;
/**
 * type_id integer
 */
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * extractor_details object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails {
/**
 * in seconds
 */
  cycle_time?: number;
/**
 * head_radius number
 */
  head_radius?: number;
  heads: GetCharactersCharacterIdPlanetsPlanetIdHeads;
/**
 * product_type_id integer
 */
  product_type_id?: number;
/**
 * qty_per_cycle integer
 */
  qty_per_cycle?: number;
  [k: string]: unknown | undefined;
}
/**
 * head object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdHead {
/**
 * head_id integer
 */
  head_id: number;
/**
 * latitude number
 */
  latitude: number;
/**
 * longitude number
 */
  longitude: number;
  [k: string]: unknown | undefined;
}
/**
 * factory_details object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails {
/**
 * schematic_id integer
 */
  schematic_id: number;
  [k: string]: unknown | undefined;
}
/**
 * route object
 */
interface GetCharactersCharacterIdPlanetsPlanetIdRoute {
/**
 * content_type_id integer
 */
  content_type_id: number;
/**
 * destination_pin_id integer
 */
  destination_pin_id: number;
/**
 * quantity number
 */
  quantity: number;
/**
 * route_id integer
 */
  route_id: number;
/**
 * source_pin_id integer
 */
  source_pin_id: number;
  waypoints?: GetCharactersCharacterIdPlanetsPlanetIdWaypoints;
  [k: string]: unknown | undefined;
}
