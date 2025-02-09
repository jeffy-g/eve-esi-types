/*!
 * ESI endpoint: get:/corporations/{corporation_id}/wallets/
 */
/**
 * 200 ok array
 *
 * @maxItems 7
 */
type GetCorporationsCorporationIdWalletsOk =
  | []
  | [GetCorporationsCorporationIdWallets_200Ok]
  | [GetCorporationsCorporationIdWallets_200Ok, GetCorporationsCorporationIdWallets_200Ok]
  | [
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok
    ]
  | [
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok
    ]
  | [
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok
    ]
  | [
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok
    ]
  | [
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok,
      GetCorporationsCorporationIdWallets_200Ok
    ];

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdWallets_200Ok {
  /**
   * balance number
   */
  balance: number;
  /**
   * division integer
   */
  division: number;
  [k: string]: unknown | undefined;
}
