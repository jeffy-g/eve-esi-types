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
 * 200 ok object
 */
interface GetUniverseRaces_200Ok {
/**
 * The alliance generally associated with this race
 */
  alliance_id: number;
/**
 * description string
 */
  description: string;
/**
 * name string
 */
  name: string;
/**
 * race_id integer
 */
  race_id: number;
  [k: string]: unknown | undefined;
}
