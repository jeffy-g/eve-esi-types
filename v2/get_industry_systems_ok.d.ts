/*!
 * ESI endpoint: get:/industry/systems/
 */
/**
 * cost_indices array
 *
 * @maxItems 10
 */
type GetIndustrySystemsCostIndices =
  | []
  | [GetIndustrySystemsCostIndice]
  | [GetIndustrySystemsCostIndice, GetIndustrySystemsCostIndice]
  | [GetIndustrySystemsCostIndice, GetIndustrySystemsCostIndice, GetIndustrySystemsCostIndice]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ]
  | [
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice,
      GetIndustrySystemsCostIndice
    ];
/**
 * activity string
 */
type GetIndustrySystemsActivity =
  | "copying"
  | "duplicating"
  | "invention"
  | "manufacturing"
  | "none"
  | "reaction"
  | "researching_material_efficiency"
  | "researching_technology"
  | "researching_time_efficiency"
  | "reverse_engineering";
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetIndustrySystemsOk = GetIndustrySystems_200Ok[];

/**
 * 200 ok object
 */
interface GetIndustrySystems_200Ok {
  cost_indices: GetIndustrySystemsCostIndices;
  /**
   * solar_system_id integer
   */
  solar_system_id: number;
  [k: string]: unknown | undefined;
}
/**
 * cost_indice object
 */
interface GetIndustrySystemsCostIndice {
  activity: GetIndustrySystemsActivity;
  /**
   * cost_index number
   */
  cost_index: number;
  [k: string]: unknown | undefined;
}
