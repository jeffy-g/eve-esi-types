/*!
 * ESI endpoint: /corporations/{corporation_id}/wallets/{division}/journal/
 */
/**
 * The type of the given context_id if present
 */
type GetCorporationsCorporationIdWalletsDivisionJournalContextIdType =
  | "structure_id"
  | "station_id"
  | "market_transaction_id"
  | "character_id"
  | "corporation_id"
  | "alliance_id"
  | "eve_system"
  | "industry_job_id"
  | "contract_id"
  | "planet_id"
  | "system_id"
  | "type_id";
/**
 * "The transaction type for the given. transaction. Different transaction types will populate different attributes. Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can look at the following file to see string->int mappings: https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py"
 */
type GetCorporationsCorporationIdWalletsDivisionJournalRefType =
  | "acceleration_gate_fee"
  | "advertisement_listing_fee"
  | "agent_donation"
  | "agent_location_services"
  | "agent_miscellaneous"
  | "agent_mission_collateral_paid"
  | "agent_mission_collateral_refunded"
  | "agent_mission_reward"
  | "agent_mission_reward_corporation_tax"
  | "agent_mission_time_bonus_reward"
  | "agent_mission_time_bonus_reward_corporation_tax"
  | "agent_security_services"
  | "agent_services_rendered"
  | "agents_preward"
  | "alliance_maintainance_fee"
  | "alliance_registration_fee"
  | "allignment_based_gate_toll"
  | "asset_safety_recovery_tax"
  | "bounty"
  | "bounty_prize"
  | "bounty_prize_corporation_tax"
  | "bounty_prizes"
  | "bounty_reimbursement"
  | "bounty_surcharge"
  | "brokers_fee"
  | "clone_activation"
  | "clone_transfer"
  | "contraband_fine"
  | "contract_auction_bid"
  | "contract_auction_bid_corp"
  | "contract_auction_bid_refund"
  | "contract_auction_sold"
  | "contract_brokers_fee"
  | "contract_brokers_fee_corp"
  | "contract_collateral"
  | "contract_collateral_deposited_corp"
  | "contract_collateral_payout"
  | "contract_collateral_refund"
  | "contract_deposit"
  | "contract_deposit_corp"
  | "contract_deposit_refund"
  | "contract_deposit_sales_tax"
  | "contract_price"
  | "contract_price_payment_corp"
  | "contract_reversal"
  | "contract_reward"
  | "contract_reward_deposited"
  | "contract_reward_deposited_corp"
  | "contract_reward_refund"
  | "contract_sales_tax"
  | "copying"
  | "corporate_reward_payout"
  | "corporate_reward_tax"
  | "corporation_account_withdrawal"
  | "corporation_bulk_payment"
  | "corporation_dividend_payment"
  | "corporation_liquidation"
  | "corporation_logo_change_cost"
  | "corporation_payment"
  | "corporation_registration_fee"
  | "cosmetic_market_component_item_purchase"
  | "cosmetic_market_skin_purchase"
  | "cosmetic_market_skin_sale"
  | "cosmetic_market_skin_sale_broker_fee"
  | "cosmetic_market_skin_sale_tax"
  | "cosmetic_market_skin_transaction"
  | "courier_mission_escrow"
  | "cspa"
  | "cspaofflinerefund"
  | "daily_challenge_reward"
  | "daily_goal_payouts"
  | "daily_goal_payouts_tax"
  | "datacore_fee"
  | "dna_modification_fee"
  | "docking_fee"
  | "duel_wager_escrow"
  | "duel_wager_payment"
  | "duel_wager_refund"
  | "ess_escrow_transfer"
  | "external_trade_delivery"
  | "external_trade_freeze"
  | "external_trade_thaw"
  | "factory_slot_rental_fee"
  | "flux_payout"
  | "flux_tax"
  | "flux_ticket_repayment"
  | "flux_ticket_sale"
  | "gm_cash_transfer"
  | "industry_job_tax"
  | "infrastructure_hub_maintenance"
  | "inheritance"
  | "insurance"
  | "insurgency_corruption_contribution_reward"
  | "insurgency_suppression_contribution_reward"
  | "item_trader_payment"
  | "jump_clone_activation_fee"
  | "jump_clone_installation_fee"
  | "kill_right_fee"
  | "lp_store"
  | "manufacturing"
  | "market_escrow"
  | "market_fine_paid"
  | "market_provider_tax"
  | "market_transaction"
  | "medal_creation"
  | "medal_issued"
  | "milestone_reward_payment"
  | "mission_completion"
  | "mission_cost"
  | "mission_expiration"
  | "mission_reward"
  | "office_rental_fee"
  | "operation_bonus"
  | "opportunity_reward"
  | "planetary_construction"
  | "planetary_export_tax"
  | "planetary_import_tax"
  | "player_donation"
  | "player_trading"
  | "project_discovery_reward"
  | "project_discovery_tax"
  | "project_payouts"
  | "reaction"
  | "redeemed_isk_token"
  | "release_of_impounded_property"
  | "repair_bill"
  | "reprocessing_tax"
  | "researching_material_productivity"
  | "researching_technology"
  | "researching_time_productivity"
  | "resource_wars_reward"
  | "reverse_engineering"
  | "season_challenge_reward"
  | "security_processing_fee"
  | "shares"
  | "skill_purchase"
  | "sovereignity_bill"
  | "store_purchase"
  | "store_purchase_refund"
  | "structure_gate_jump"
  | "transaction_tax"
  | "under_construction"
  | "upkeep_adjustment_fee"
  | "war_ally_contract"
  | "war_fee"
  | "war_fee_surrender";
/**
 * Journal entries
 *
 * @maxItems 2500
 */
type GetCorporationsCorporationIdWalletsDivisionJournalOk =
  GetCorporationsCorporationIdWalletsDivisionJournal_200Ok[];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdWalletsDivisionJournal_200Ok {
  /**
   * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
   */
  amount?: number;
  /**
   * Wallet balance after transaction occurred
   */
  balance?: number;
  /**
   * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
   */
  context_id?: number;
  context_id_type?: GetCorporationsCorporationIdWalletsDivisionJournalContextIdType;
  /**
   * Date and time of transaction
   */
  date: string;
  /**
   * The reason for the transaction, mirrors what is seen in the client
   */
  description: string;
  /**
   * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
   */
  first_party_id?: number;
  /**
   * Unique journal reference ID
   */
  id: number;
  /**
   * The user stated reason for the transaction. Only applies to some ref_types
   */
  reason?: string;
  ref_type: GetCorporationsCorporationIdWalletsDivisionJournalRefType;
  /**
   * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
   */
  second_party_id?: number;
  /**
   * Tax amount received. Only applies to tax related transactions
   */
  tax?: number;
  /**
   * The corporation ID receiving any tax paid. Only applies to tax related transactions
   */
  tax_receiver_id?: number;
  [k: string]: unknown | undefined;
}
