/*!
 * ESI endpoint: /characters/{character_id}/standings/
 */
/**
 * from_type string
 */
type GetCharactersCharacterIdStandingsFromType = "agent" | "npc_corp" | "faction";
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
  /**
   * from_id integer
   */
  from_id: number;
  from_type: GetCharactersCharacterIdStandingsFromType;
  /**
   * standing number
   */
  standing: number;
  [k: string]: unknown | undefined;
}
