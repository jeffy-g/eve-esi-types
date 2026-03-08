import type { ESIRequestOptions } from "./lib/rq-util.mjs";
/**
 * @returns Get The Current ESI request pending count.
 */
export declare const getRequestPending: () => number;
/**
 * Executes an HTTP request to the EVE ESI endpoint (OpenAPI-based).
 *
 * @throws {ESIRequestError}
 * @async
 */
export declare const fire: TESIRequestFunctionSignature2<ESIRequestOptions>;
export declare const request: TESIRequestFunctionSignature2<ESIRequestOptions>;