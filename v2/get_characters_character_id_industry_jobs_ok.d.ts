/**
 * ESI endpoint: /characters/{character_id}/industry/jobs/
 */

/**
 * Job activity ID
 */
type GetCharactersCharacterIdIndustryJobsActivityId = number;
/**
 * blueprint_id integer
 */
type GetCharactersCharacterIdIndustryJobsBlueprintId = number;
/**
 * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
 */
type GetCharactersCharacterIdIndustryJobsBlueprintLocationId = number;
/**
 * blueprint_type_id integer
 */
type GetCharactersCharacterIdIndustryJobsBlueprintTypeId = number;
/**
 * ID of the character which completed this job
 */
type GetCharactersCharacterIdIndustryJobsCompletedCharacterId = number;
/**
 * Date and time when this job was completed
 */
type GetCharactersCharacterIdIndustryJobsCompletedDate = string;
/**
 * The sume of job installation fee and industry facility tax
 */
type GetCharactersCharacterIdIndustryJobsCost = number;
/**
 * Job duration in seconds
 */
type GetCharactersCharacterIdIndustryJobsDuration = number;
/**
 * Date and time when this job finished
 */
type GetCharactersCharacterIdIndustryJobsEndDate = string;
/**
 * ID of the facility where this job is running
 */
type GetCharactersCharacterIdIndustryJobsFacilityId = number;
/**
 * ID of the character which installed this job
 */
type GetCharactersCharacterIdIndustryJobsInstallerId = number;
/**
 * Unique job ID
 */
type GetCharactersCharacterIdIndustryJobsJobId = number;
/**
 * Number of runs blueprint is licensed for
 */
type GetCharactersCharacterIdIndustryJobsLicensedRuns = number;
/**
 * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
 */
type GetCharactersCharacterIdIndustryJobsOutputLocationId = number;
/**
 * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
 */
type GetCharactersCharacterIdIndustryJobsPauseDate = string;
/**
 * Chance of success for invention
 */
type GetCharactersCharacterIdIndustryJobsProbability = number;
/**
 * Type ID of product (manufactured, copied or invented)
 */
type GetCharactersCharacterIdIndustryJobsProductTypeId = number;
/**
 * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
 */
type GetCharactersCharacterIdIndustryJobsRuns = number;
/**
 * Date and time when this job started
 */
type GetCharactersCharacterIdIndustryJobsStartDate = string;
/**
 * ID of the station where industry facility is located
 */
type GetCharactersCharacterIdIndustryJobsStationId = number;
/**
 * status string
 */
type GetCharactersCharacterIdIndustryJobsStatus =
  | "active"
  | "cancelled"
  | "delivered"
  | "paused"
  | "ready"
  | "reverted";
/**
 * Number of successful runs for this job. Equal to runs unless this is an invention job
 */
type GetCharactersCharacterIdIndustryJobsSuccessfulRuns = number;
/**
 * 200 ok array
 *
 * @maxItems 2000
 */
type GetCharactersCharacterIdIndustryJobsOk = GetCharactersCharacterIdIndustryJobs_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdIndustryJobs_200Ok {
  activity_id: GetCharactersCharacterIdIndustryJobsActivityId;
  blueprint_id: GetCharactersCharacterIdIndustryJobsBlueprintId;
  blueprint_location_id: GetCharactersCharacterIdIndustryJobsBlueprintLocationId;
  blueprint_type_id: GetCharactersCharacterIdIndustryJobsBlueprintTypeId;
  completed_character_id?: GetCharactersCharacterIdIndustryJobsCompletedCharacterId;
  completed_date?: GetCharactersCharacterIdIndustryJobsCompletedDate;
  cost?: GetCharactersCharacterIdIndustryJobsCost;
  duration: GetCharactersCharacterIdIndustryJobsDuration;
  end_date: GetCharactersCharacterIdIndustryJobsEndDate;
  facility_id: GetCharactersCharacterIdIndustryJobsFacilityId;
  installer_id: GetCharactersCharacterIdIndustryJobsInstallerId;
  job_id: GetCharactersCharacterIdIndustryJobsJobId;
  licensed_runs?: GetCharactersCharacterIdIndustryJobsLicensedRuns;
  output_location_id: GetCharactersCharacterIdIndustryJobsOutputLocationId;
  pause_date?: GetCharactersCharacterIdIndustryJobsPauseDate;
  probability?: GetCharactersCharacterIdIndustryJobsProbability;
  product_type_id?: GetCharactersCharacterIdIndustryJobsProductTypeId;
  runs: GetCharactersCharacterIdIndustryJobsRuns;
  start_date: GetCharactersCharacterIdIndustryJobsStartDate;
  station_id: GetCharactersCharacterIdIndustryJobsStationId;
  status: GetCharactersCharacterIdIndustryJobsStatus;
  successful_runs?: GetCharactersCharacterIdIndustryJobsSuccessfulRuns;
  [k: string]: unknown | undefined;
}
