/*!
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
  /**
   * division integer
   */
  division?: number;
  /**
   * name string
   */
  name?: string;
  [k: string]: unknown | undefined;
}
/**
 * wallet object
 */
interface GetCorporationsCorporationIdDivisionsWalletWallet {
  /**
   * division integer
   */
  division?: number;
  /**
   * name string
   */
  name?: string;
  [k: string]: unknown | undefined;
}
