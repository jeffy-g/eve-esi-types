/**
 * ESI endpoint: /characters/{character_id}/standings/
 */

/**
 * from_id integer
 */
type GetCharactersCharacterIdStandingsFromId = number;
/**
 * from_type string
 */
type GetCharactersCharacterIdStandingsFromType = "agent" | "npc_corp" | "faction";
/**
 * standing number
 */
type GetCharactersCharacterIdStandingsStanding = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetCharactersCharacterIdStandingsOk = GetCharactersCharacterIdStandings_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdStandings_200Ok {
  from_id: GetCharactersCharacterIdStandingsFromId;
  from_type: GetCharactersCharacterIdStandingsFromType;
  standing: GetCharactersCharacterIdStandingsStanding;
  [k: string]: unknown | undefined;
}
