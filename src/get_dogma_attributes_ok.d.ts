/**
 * ESI endpoint: /dogma/attributes/
 */

/**
 * 200 ok integer
 */
type GetDogmaAttributes_200Ok = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetDogmaAttributesOk = GetDogmaAttributes_200Ok[];
