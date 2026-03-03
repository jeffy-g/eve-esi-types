/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2026 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file publish/lib/sde-util.mts
 * @command node publish/lib/sde-util.mts
 */
/// <reference path="../scripts/lib/eve-sde-types.d.ts" preserve="true" />
/**
 * @param {NsEVESDETypes.TSDEJsonLatestInfo?=} info
 * @param {boolean=} logJson
 * @returns {Promise<string>}
 * @version 3.1
 * @date 2026/03/03 13:53:04
 */
export declare function getSDEVersion(info?: NsEVESDETypes.TSDEJsonLatestInfo | null, logJson?: boolean): Promise<string>;
