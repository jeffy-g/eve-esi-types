import type { ESIRequestOptions } from "./lib/rq-util.mjs";
/**
 * @returns Get The Current ESI request pending count.
 */
export declare const getRequestPending: () => number;
/**
 * fire ESI request ESIRequestOptions
 *
 * @throws {ESIRequestError}
 * @async
 */
export declare const fire: TESIRequestFunctionSignature2<ESIRequestOptions>;
