/*!
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
  Released under the MIT license
  https://opensource.org/licenses/mit-license.php
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
import { type ESIRequestOptions } from "./lib/rq-util.mjs";
/**
 * @returns Get The Current ESI request pending count.
 */
export declare const getRequestPending: () => number;
/**
 * fire ESI request ESIRequestOptions
 *
 * @type {TESIRequestFunctionSignature2<ESIRequestOptions>}
 * @throws {ESIRequestError}
 * @async
 */
export declare const fire: TESIRequestFunctionSignature2<ESIRequestOptions>;
