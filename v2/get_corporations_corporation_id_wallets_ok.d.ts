/**
 * ESI endpoint: /corporations/{corporation_id}/wallets/
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
 * balance number
 */
type GetCorporationsCorporationIdWalletsBalance = number;
/**
 * division integer
 */
type GetCorporationsCorporationIdWalletsDivision = number;

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdWallets_200Ok {
  balance: GetCorporationsCorporationIdWalletsBalance;
  division: GetCorporationsCorporationIdWalletsDivision;
  [k: string]: unknown | undefined;
}
