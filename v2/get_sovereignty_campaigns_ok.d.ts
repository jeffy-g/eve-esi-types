/**
 * ESI endpoint: /sovereignty/campaigns/
 */

/**
 * Score for all attacking parties, only present in Defense Events.
 *
 */
type GetSovereigntyCampaignsAttackersScore = number;
/**
 * Unique ID for this campaign.
 */
type GetSovereigntyCampaignsCampaignId = number;
/**
 * The constellation in which the campaign will take place.
 *
 */
type GetSovereigntyCampaignsConstellationId = number;
/**
 * Defending alliance, only present in Defense Events
 *
 */
type GetSovereigntyCampaignsDefenderId = number;
/**
 * Score for the defending alliance, only present in Defense Events.
 *
 */
type GetSovereigntyCampaignsDefenderScore = number;
/**
 * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as "Defense Events", station_freeport as "Freeport Events".
 *
 */
type GetSovereigntyCampaignsEventType = "tcu_defense" | "ihub_defense" | "station_defense" | "station_freeport";
/**
 * alliance_id integer
 */
type GetSovereigntyCampaignsAllianceId = number;
/**
 * score number
 */
type GetSovereigntyCampaignsScore = number;
/**
 * Alliance participating and their respective scores, only present in Freeport Events.
 *
 *
 * @maxItems 5000
 */
type GetSovereigntyCampaignsParticipants = GetSovereigntyCampaignsParticipant[];
/**
 * The solar system the structure is located in.
 *
 */
type GetSovereigntyCampaignsSolarSystemId = number;
/**
 * Time the event is scheduled to start.
 *
 */
type GetSovereigntyCampaignsStartTime = string;
/**
 * The structure item ID that is related to this campaign.
 *
 */
type GetSovereigntyCampaignsStructureId = number;
/**
 * 200 ok array
 *
 * @maxItems 10000
 */
type GetSovereigntyCampaignsOk = GetSovereigntyCampaigns_200Ok[];

/**
 * 200 ok object
 */
interface GetSovereigntyCampaigns_200Ok {
  attackers_score?: GetSovereigntyCampaignsAttackersScore;
  campaign_id: GetSovereigntyCampaignsCampaignId;
  constellation_id: GetSovereigntyCampaignsConstellationId;
  defender_id?: GetSovereigntyCampaignsDefenderId;
  defender_score?: GetSovereigntyCampaignsDefenderScore;
  event_type: GetSovereigntyCampaignsEventType;
  participants?: GetSovereigntyCampaignsParticipants;
  solar_system_id: GetSovereigntyCampaignsSolarSystemId;
  start_time: GetSovereigntyCampaignsStartTime;
  structure_id: GetSovereigntyCampaignsStructureId;
  [k: string]: unknown | undefined;
}
/**
 * participant object
 */
interface GetSovereigntyCampaignsParticipant {
  alliance_id: GetSovereigntyCampaignsAllianceId;
  score: GetSovereigntyCampaignsScore;
  [k: string]: unknown | undefined;
}
