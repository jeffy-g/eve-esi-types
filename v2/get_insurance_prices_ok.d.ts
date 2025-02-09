/*!
 * ESI endpoint: get:/insurance/prices/
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
  type_id: number;
  [k: string]: unknown | undefined;
}
/**
 * level object
 */
interface GetInsurancePricesLevel {
  /**
   * cost number
   */
  cost: number;
  /**
   * Localized insurance level
   */
  name: string;
  /**
   * payout number
   */
  payout: number;
  [k: string]: unknown | undefined;
}
