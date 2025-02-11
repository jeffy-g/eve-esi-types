/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * __{Header}.{Payload}.{Signature}__
 */
type TAcccessToken = `${string}.${string}.${string}`;
type ESIRequestOptions = {
    /**
     * query params for ESI request.
     */
    query?: Record<string, any>;
    /**
     * will need it for `POST` request etc.
     */
    body?: any;
    /**
     * if want response data with ignore error then can be set to `true`.
     */
    ignoreError?: boolean;
    /**
     * cancel request immediately
     */
    cancelable?: AbortController;
    /**
     * Can be an empty object if no authentication is required.description
     */
    token?: TAcccessToken;
};
/**
 * fire ESI request
 * @type {TESIRequestFunctionSignatureV1<ESIRequestOptions>}
 *
 * @param method
 * @param endpoint - The endpoint to request.
 * @param [pathParams] - Optional path parameters.
 * @param {ESIRequestOptions} [opt] - default is empty object {}. `body` is json string
 * @returns - The response from the endpoint.
 * @throws
 * @async
 */
export declare const fire: TESIRequestFunctionSignatureV1<ESIRequestOptions>;
export {};
