/*!
 * ESI endpoint: /universe/ancestries/
 */
/**
 * 200 ok array
 *
 * @maxItems 100
 */
type GetUniverseAncestriesOk = GetUniverseAncestries_200Ok[];

/**
 * 200 ok object
 */
interface GetUniverseAncestries_200Ok {
  /**
   * The bloodline associated with this ancestry
   */
  bloodline_id: number;
  /**
   * description string
   */
  description: string;
  /**
   * icon_id integer
   */
  icon_id?: number;
  /**
   * id integer
   */
  id: number;
  /**
   * name string
   */
  name: string;
  /**
   * short_description string
   */
  short_description?: string;
  [k: string]: unknown | undefined;
}
