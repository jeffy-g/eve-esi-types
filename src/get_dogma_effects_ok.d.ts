/**
 * ESI endpoint: /dogma/effects/
 */

/**
 * 200 ok integer
 */
type GetDogmaEffects_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetDogmaEffectsOk = GetDogmaEffects_200Ok[];
