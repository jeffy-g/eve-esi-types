/*!
 * ESI endpoint: /sovereignty/campaigns/
 */
/**
 * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as "Defense Events", station_freeport as "Freeport Events".
 *
 */
type GetSovereigntyCampaignsEventType = "tcu_defense" | "ihub_defense" | "station_defense" | "station_freeport";
/**
 * Alliance participating and their respective scores, only present in Freeport Events.
 *
 *
 * @maxItems 5000
 */
type GetSovereigntyCampaignsParticipants = GetSovereigntyCampaignsParticipant[];
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
  /**
   * Score for all attacking parties, only present in Defense Events.
   *
   */
  attackers_score?: number;
  /**
   * Unique ID for this campaign.
   */
  campaign_id: number;
  /**
   * The constellation in which the campaign will take place.
   *
   */
  constellation_id: number;
  /**
   * Defending alliance, only present in Defense Events
   *
   */
  defender_id?: number;
  /**
   * Score for the defending alliance, only present in Defense Events.
   *
   */
  defender_score?: number;
  event_type: GetSovereigntyCampaignsEventType;
  participants?: GetSovereigntyCampaignsParticipants;
  /**
   * The solar system the structure is located in.
   *
   */
  solar_system_id: number;
  /**
   * Time the event is scheduled to start.
   *
   */
  start_time: string;
  /**
   * The structure item ID that is related to this campaign.
   *
   */
  structure_id: number;
  [k: string]: unknown | undefined;
}
/**
 * participant object
 */
interface GetSovereigntyCampaignsParticipant {
  /**
   * alliance_id integer
   */
  alliance_id: number;
  /**
   * score number
   */
  score: number;
  [k: string]: unknown | undefined;
}
