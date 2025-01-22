/**
 * ESI endpoint: /universe/ancestries/
 */

/**
 * The bloodline associated with this ancestry
 */
type GetUniverseAncestriesBloodlineId = number;
/**
 * description string
 */
type GetUniverseAncestriesDescription = string;
/**
 * icon_id integer
 */
type GetUniverseAncestriesIconId = number;
/**
 * id integer
 */
type GetUniverseAncestriesId = number;
/**
 * name string
 */
type GetUniverseAncestriesName = string;
/**
 * short_description string
 */
type GetUniverseAncestriesShortDescription = string;
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
  bloodline_id: GetUniverseAncestriesBloodlineId;
  description: GetUniverseAncestriesDescription;
  icon_id?: GetUniverseAncestriesIconId;
  id: GetUniverseAncestriesId;
  name: GetUniverseAncestriesName;
  short_description?: GetUniverseAncestriesShortDescription;
  [k: string]: unknown | undefined;
}
