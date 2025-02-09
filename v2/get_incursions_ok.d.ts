/*!
 * ESI endpoint: get:/incursions/
 */
/**
 * The state of this incursion
 */
type GetIncursionsState = "withdrawing" | "mobilizing" | "established";
/**
 * 200 ok array
 *
 * @maxItems 100
 */
type GetIncursionsOk = GetIncursions_200Ok[];

/**
 * 200 ok object
 */
interface GetIncursions_200Ok {
  /**
   * The constellation id in which this incursion takes place
   */
  constellation_id: number;
  /**
   * The attacking faction's id
   */
  faction_id: number;
  /**
   * Whether the final encounter has boss or not
   */
  has_boss: boolean;
  /**
   * A list of infested solar system ids that are a part of this incursion
   *
   * @maxItems 100
   */
  infested_solar_systems: number[];
  /**
   * Influence of this incursion as a float from 0 to 1
   */
  influence: number;
  /**
   * Staging solar system for this incursion
   */
  staging_solar_system_id: number;
  state: GetIncursionsState;
  type: string;
  [k: string]: unknown | undefined;
}
