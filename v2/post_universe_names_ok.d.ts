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
 * id integer
 */
type PostUniverseNamesId = number;
/**
 * name string
 */
type PostUniverseNamesName = string;
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
  id: PostUniverseNamesId;
  name: PostUniverseNamesName;
  [k: string]: unknown | undefined;
}
