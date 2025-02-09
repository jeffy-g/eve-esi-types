/*!
 * ESI endpoint: get:/characters/{character_id}/planets/
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
 * 200 ok object
 */
interface GetCharactersCharacterIdPlanets_200Ok {
  /**
   * last_update string
   */
  last_update: string;
  /**
   * num_pins integer
   */
  num_pins: number;
  /**
   * owner_id integer
   */
  owner_id: number;
  /**
   * planet_id integer
   */
  planet_id: number;
  planet_type: GetCharactersCharacterIdPlanetsPlanetType;
  /**
   * solar_system_id integer
   */
  solar_system_id: number;
  /**
   * upgrade_level integer
   */
  upgrade_level: number;
  [k: string]: unknown | undefined;
}
