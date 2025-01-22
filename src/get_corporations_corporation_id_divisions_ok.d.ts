/**
 * ESI endpoint: /corporations/{corporation_id}/divisions/
 */

/**
 * hangar array
 *
 * @maxItems 7
 */
type GetCorporationsCorporationIdDivisionsHangar =
  | []
  | [GetCorporationsCorporationIdDivisionsHangarHangar]
  | [GetCorporationsCorporationIdDivisionsHangarHangar, GetCorporationsCorporationIdDivisionsHangarHangar]
  | [
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar
    ]
  | [
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar
    ]
  | [
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar
    ]
  | [
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar
    ]
  | [
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar,
      GetCorporationsCorporationIdDivisionsHangarHangar
    ];
/**
 * division integer
 */
type GetCorporationsCorporationIdDivisionsDivision = number;
/**
 * name string
 */
type GetCorporationsCorporationIdDivisionsName = string;
/**
 * wallet array
 *
 * @maxItems 7
 */
type GetCorporationsCorporationIdDivisionsWallet =
  | []
  | [GetCorporationsCorporationIdDivisionsWalletWallet]
  | [GetCorporationsCorporationIdDivisionsWalletWallet, GetCorporationsCorporationIdDivisionsWalletWallet]
  | [
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet
    ]
  | [
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet
    ]
  | [
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet
    ]
  | [
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet
    ]
  | [
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet,
      GetCorporationsCorporationIdDivisionsWalletWallet
    ];
/**
 * division integer
 */
type GetCorporationsCorporationIdDivisionsWalletDivision = number;
/**
 * name string
 */
type GetCorporationsCorporationIdDivisionsWalletName = string;

/**
 * 200 ok object
 */
interface GetCorporationsCorporationIdDivisionsOk {
  hangar?: GetCorporationsCorporationIdDivisionsHangar;
  wallet?: GetCorporationsCorporationIdDivisionsWallet;
  [k: string]: unknown | undefined;
}
/**
 * hangar object
 */
interface GetCorporationsCorporationIdDivisionsHangarHangar {
  division?: GetCorporationsCorporationIdDivisionsDivision;
  name?: GetCorporationsCorporationIdDivisionsName;
  [k: string]: unknown | undefined;
}
/**
 * wallet object
 */
interface GetCorporationsCorporationIdDivisionsWalletWallet {
  division?: GetCorporationsCorporationIdDivisionsWalletDivision;
  name?: GetCorporationsCorporationIdDivisionsWalletName;
  [k: string]: unknown | undefined;
}
