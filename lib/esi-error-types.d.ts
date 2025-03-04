
type TEVEErrorBase = {
  /**
   * error message
   */
  error: string;
};
/**
 * There are endpoints with status 200 only that contain the "X-Pages" header.
 */
export type TSuccessStats = 200 | 201 | 204;
export type TRedirectStats = 304;
export type TClientErrorStats = 400 | 401 | 403 | 404 | 420 | 422;
export type TServerErrorStats = 500 | 503 | 504 | 520;
export type TESIErrorStats = TClientErrorStats | TServerErrorStats;
export type TStatsAll = TSuccessStats | TRedirectStats | TClientErrorStats | TServerErrorStats;
export type TESIErrorStatMap = {
  // status 400
  400: BadRequest;
  401: Unauthorized;
  403: Forbidden;
  404: NotFound;
  420: ErrorLimited;
  422: Unprocessable;

  // status 500
  500: InternalServerError;
  503: ServiceUnavailable;
  504: GatewayTimeout;
  520: EVEServerError;
};
/**
 * ```ts
 * const res = await fetch("<URL with ESI endpoint>");
 * const status = res.status;
 * if (status >= 400) {
 *   const errorType: TESIErrorWithStat<typeof status> = {
 *     status, ...res.json() 
 *   };
 *   console.log(errorType);
 *   throw new Error(`message="${res.statusText}", status=${status}`);
 * }
 * ```
 * 
 * @date 2025/3/3
 * @since 2.4.0
 */
export type TESIErrorWithStat<Stat extends TClientErrorStats | TServerErrorStats> = {
  status: Stat;
} & TESIErrorStatMap[Stat];
// declare const bad: TESIErrorWithStat<400>;

/**
 * Bad request model 400
 */
export interface BadRequest extends TEVEErrorBase {}
/**
 * Not Found model 404
 */
export interface NotFound extends TEVEErrorBase {}
/**
 * Unprocessable model 422[Unprocessable entity]
 */
export interface Unprocessable extends TEVEErrorBase {}
/**
 * Unauthorized model 401
 */
export interface Unauthorized extends TEVEErrorBase {}
/**
 * Forbidden model 403
 */
export interface Forbidden extends TEVEErrorBase {
  /**
   * status code received from SSO
   */
  sso_status?: number;
}

/**
 * Error limited model 420
 */
export interface ErrorLimited extends TEVEErrorBase {}

/**
 * Internal server error model 500
 */
export interface InternalServerError extends TEVEErrorBase {}
/**
 * Service unavailable model 503
 */
export interface ServiceUnavailable extends TEVEErrorBase {}
/**
 * Gateway timeout model 504
 */
export interface GatewayTimeout extends TEVEErrorBase {
  /**
   * number of seconds the request was given
   */
  timeout?: number;
}
/**
 * EVE server error model 520
 */
export interface EVEServerError extends InternalServerError {}
