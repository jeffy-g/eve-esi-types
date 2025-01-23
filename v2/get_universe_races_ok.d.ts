/**
 * ESI endpoint: /universe/races/
 */

/**
 * 200 ok array
 *
 * @maxItems 6
 */
type GetUniverseRacesOk =
  | []
  | [GetUniverseRaces_200Ok]
  | [GetUniverseRaces_200Ok, GetUniverseRaces_200Ok]
  | [GetUniverseRaces_200Ok, GetUniverseRaces_200Ok, GetUniverseRaces_200Ok]
  | [GetUniverseRaces_200Ok, GetUniverseRaces_200Ok, GetUniverseRaces_200Ok, GetUniverseRaces_200Ok]
  | [
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok
    ]
  | [
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok,
      GetUniverseRaces_200Ok
    ];
/**
 * The alliance generally associated with this race
 */
type GetUniverseRacesAllianceId = number;
/**
 * description string
 */
type GetUniverseRacesDescription = string;
/**
 * name string
 */
type GetUniverseRacesName = string;
/**
 * race_id integer
 */
type GetUniverseRacesRaceId = number;

/**
 * 200 ok object
 */
interface GetUniverseRaces_200Ok {
  alliance_id: GetUniverseRacesAllianceId;
  description: GetUniverseRacesDescription;
  name: GetUniverseRacesName;
  race_id: GetUniverseRacesRaceId;
  [k: string]: unknown | undefined;
}
