/**
 * ESI endpoint: /corporations/{corporation_id}/industry/jobs/
 */

/**
 * Job activity ID
 */
type GetCorporationsCorporationIdIndustryJobsActivityId = number;
/**
 * blueprint_id integer
 */
type GetCorporationsCorporationIdIndustryJobsBlueprintId = number;
/**
 * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
 */
type GetCorporationsCorporationIdIndustryJobsBlueprintLocationId = number;
/**
 * blueprint_type_id integer
 */
type GetCorporationsCorporationIdIndustryJobsBlueprintTypeId = number;
/**
 * ID of the character which completed this job
 */
type GetCorporationsCorporationIdIndustryJobsCompletedCharacterId = number;
/**
 * Date and time when this job was completed
 */
type GetCorporationsCorporationIdIndustryJobsCompletedDate = string;
/**
 * The sume of job installation fee and industry facility tax
 */
type GetCorporationsCorporationIdIndustryJobsCost = number;
/**
 * Job duration in seconds
 */
type GetCorporationsCorporationIdIndustryJobsDuration = number;
/**
 * Date and time when this job finished
 */
type GetCorporationsCorporationIdIndustryJobsEndDate = string;
/**
 * ID of the facility where this job is running
 */
type GetCorporationsCorporationIdIndustryJobsFacilityId = number;
/**
 * ID of the character which installed this job
 */
type GetCorporationsCorporationIdIndustryJobsInstallerId = number;
/**
 * Unique job ID
 */
type GetCorporationsCorporationIdIndustryJobsJobId = number;
/**
 * Number of runs blueprint is licensed for
 */
type GetCorporationsCorporationIdIndustryJobsLicensedRuns = number;
/**
 * ID of the location for the industry facility
 */
type GetCorporationsCorporationIdIndustryJobsLocationId = number;
/**
 * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
 */
type GetCorporationsCorporationIdIndustryJobsOutputLocationId = number;
/**
 * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
 */
type GetCorporationsCorporationIdIndustryJobsPauseDate = string;
/**
 * Chance of success for invention
 */
type GetCorporationsCorporationIdIndustryJobsProbability = number;
/**
 * Type ID of product (manufactured, copied or invented)
 */
type GetCorporationsCorporationIdIndustryJobsProductTypeId = number;
/**
 * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
 */
type GetCorporationsCorporationIdIndustryJobsRuns = number;
/**
 * Date and time when this job started
 */
type GetCorporationsCorporationIdIndustryJobsStartDate = string;
/**
 * status string
 */
type GetCorporationsCorporationIdIndustryJobsStatus =
  | "active"
  | "cancelled"
  | "delivered"
  | "paused"
  | "ready"
  | "reverted";
/**
 * Number of successful runs for this job. Equal to runs unless this is an invention job
 */
type GetCorporationsCorporationIdIndustryJobsSuccessfulRuns = number;
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCorporationsCorporationIdIndustryJobsOk = GetCorporationsCorporationIdIndustryJobs_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdIndustryJobs_200Ok {
  activity_id: GetCorporationsCorporationIdIndustryJobsActivityId;
  blueprint_id: GetCorporationsCorporationIdIndustryJobsBlueprintId;
  blueprint_location_id: GetCorporationsCorporationIdIndustryJobsBlueprintLocationId;
  blueprint_type_id: GetCorporationsCorporationIdIndustryJobsBlueprintTypeId;
  completed_character_id?: GetCorporationsCorporationIdIndustryJobsCompletedCharacterId;
  completed_date?: GetCorporationsCorporationIdIndustryJobsCompletedDate;
  cost?: GetCorporationsCorporationIdIndustryJobsCost;
  duration: GetCorporationsCorporationIdIndustryJobsDuration;
  end_date: GetCorporationsCorporationIdIndustryJobsEndDate;
  facility_id: GetCorporationsCorporationIdIndustryJobsFacilityId;
  installer_id: GetCorporationsCorporationIdIndustryJobsInstallerId;
  job_id: GetCorporationsCorporationIdIndustryJobsJobId;
  licensed_runs?: GetCorporationsCorporationIdIndustryJobsLicensedRuns;
  location_id: GetCorporationsCorporationIdIndustryJobsLocationId;
  output_location_id: GetCorporationsCorporationIdIndustryJobsOutputLocationId;
  pause_date?: GetCorporationsCorporationIdIndustryJobsPauseDate;
  probability?: GetCorporationsCorporationIdIndustryJobsProbability;
  product_type_id?: GetCorporationsCorporationIdIndustryJobsProductTypeId;
  runs: GetCorporationsCorporationIdIndustryJobsRuns;
  start_date: GetCorporationsCorporationIdIndustryJobsStartDate;
  status: GetCorporationsCorporationIdIndustryJobsStatus;
  successful_runs?: GetCorporationsCorporationIdIndustryJobsSuccessfulRuns;
  [k: string]: unknown | undefined;
}
