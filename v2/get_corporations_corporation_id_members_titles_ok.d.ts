/*!
 * ESI endpoint: get:/corporations/{corporation_id}/members/titles/
 */
/**
 * A list of title_id
 *
 * @maxItems 16
 */
type GetCorporationsCorporationIdMembersTitlesTitles =
  | []
  /**
   * title integer
   */
  | [number]
  | [number, number]
  | [
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ];
/**
 * 200 ok array
 *
 * @maxItems 12601
 */
type GetCorporationsCorporationIdMembersTitlesOk = GetCorporationsCorporationIdMembersTitles_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdMembersTitles_200Ok {
  /**
   * character_id integer
   */
  character_id: number;
  titles: GetCorporationsCorporationIdMembersTitlesTitles;
  [k: string]: unknown | undefined;
}
