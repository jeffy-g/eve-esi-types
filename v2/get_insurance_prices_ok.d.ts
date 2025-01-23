/**
 * ESI endpoint: /insurance/prices/
 */

/**
 * A list of a available insurance levels for this ship type
 *
 * @maxItems 6
 */
type GetInsurancePricesLevels =
  | []
  | [GetInsurancePricesLevel]
  | [GetInsurancePricesLevel, GetInsurancePricesLevel]
  | [GetInsurancePricesLevel, GetInsurancePricesLevel, GetInsurancePricesLevel]
  | [GetInsurancePricesLevel, GetInsurancePricesLevel, GetInsurancePricesLevel, GetInsurancePricesLevel]
  | [
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel
    ]
  | [
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel,
      GetInsurancePricesLevel
    ];
/**
 * cost number
 */
type GetInsurancePricesCost = number;
/**
 * Localized insurance level
 */
type GetInsurancePricesName = string;
/**
 * payout number
 */
type GetInsurancePricesPayout = number;
/**
 * type_id integer
 */
type GetInsurancePricesTypeId = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetInsurancePricesOk = GetInsurancePrices_200Ok[];

/**
 * 200 ok object
 */
interface GetInsurancePrices_200Ok {
  levels: GetInsurancePricesLevels;
  type_id: GetInsurancePricesTypeId;
  [k: string]: unknown | undefined;
}
/**
 * level object
 */
interface GetInsurancePricesLevel {
  cost: GetInsurancePricesCost;
  name: GetInsurancePricesName;
  payout: GetInsurancePricesPayout;
  [k: string]: unknown | undefined;
}
