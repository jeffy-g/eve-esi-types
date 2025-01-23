/**
* ESI endpoint: /universe/names/
*/
/**
 * category string
 */
type PostUniverseNamesCategory =
  | "alliance"
  | "character"
  | "constellation"
  | "corporation"
  | "inventory_type"
  | "region"
  | "solar_system"
  | "station"
  | "faction";
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type PostUniverseNamesOk = PostUniverseNames_200Ok[];

/**
 * 200 ok object
 */
interface PostUniverseNames_200Ok {
  category: PostUniverseNamesCategory;
/**
 * id integer
 */
  id: number;
/**
 * name string
 */
  name: string;
  [k: string]: unknown | undefined;
}
