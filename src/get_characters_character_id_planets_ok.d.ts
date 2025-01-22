/**
 * ESI endpoint: /characters/{character_id}/planets/
 */

/**
 * 200 ok array
 *
 * @maxItems 10
 */
type GetCharactersCharacterIdPlanetsOk =
  | []
  | [GetCharactersCharacterIdPlanets_200Ok]
  | [GetCharactersCharacterIdPlanets_200Ok, GetCharactersCharacterIdPlanets_200Ok]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ]
  | [
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok,
      GetCharactersCharacterIdPlanets_200Ok
    ];
/**
 * last_update string
 */
type GetCharactersCharacterIdPlanetsLastUpdate = string;
/**
 * num_pins integer
 */
type GetCharactersCharacterIdPlanetsNumPins = number;
/**
 * owner_id integer
 */
type GetCharactersCharacterIdPlanetsOwnerId = number;
/**
 * planet_id integer
 */
type GetCharactersCharacterIdPlanetsPlanetId = number;
/**
 * planet_type string
 */
type GetCharactersCharacterIdPlanetsPlanetType =
  | "temperate"
  | "barren"
  | "oceanic"
  | "ice"
  | "gas"
  | "lava"
  | "storm"
  | "plasma";
/**
 * solar_system_id integer
 */
type GetCharactersCharacterIdPlanetsSolarSystemId = number;
/**
 * upgrade_level integer
 */
type GetCharactersCharacterIdPlanetsUpgradeLevel = number;

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdPlanets_200Ok {
  last_update: GetCharactersCharacterIdPlanetsLastUpdate;
  num_pins: GetCharactersCharacterIdPlanetsNumPins;
  owner_id: GetCharactersCharacterIdPlanetsOwnerId;
  planet_id: GetCharactersCharacterIdPlanetsPlanetId;
  planet_type: GetCharactersCharacterIdPlanetsPlanetType;
  solar_system_id: GetCharactersCharacterIdPlanetsSolarSystemId;
  upgrade_level: GetCharactersCharacterIdPlanetsUpgradeLevel;
  [k: string]: unknown | undefined;
}
