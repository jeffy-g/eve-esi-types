/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2026 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference path="./eve-sde-types.d.ts" preserve="true"/>
/**
 * @file publish/lib/sde-util.mts
 * @command node publish/lib/sde-util.mts
 */
import * as rqutil from "./rq-util.mjs";
/** `TSDEJsonLatestInfo` endpoint url */
const sdeJsonLatestEndpoint = "https://developers.eveonline.com/static-data/tranquility/latest.jsonl";
/**
 * @returns {Promise<NsEVESDETypes.TSDEJsonLatestInfo>}
 */
async function getLatestJsonHead() {
    return /** @type {Promise<NsEVESDETypes.TSDEJsonLatestInfo>} */ (fetch(sdeJsonLatestEndpoint).then(res => res.json()));
}
/**
 * @param {NsEVESDETypes.TISODateString} dateString
 */
const makeSDEVersionTag = (dateString) => {
    const YMD = new Date(dateString).toLocaleString("en-ca", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).replace(/-/g, "");
    return `sde-${YMD}-TRANQUILITY`;
};
/**
 * @param {NsEVESDETypes.TSDEJsonLatestInfo?=} info
 * @param {boolean=} logJson
 * @returns {Promise<string>}
 * @version 3.1
 * @date 2026/03/03 13:53:04
 */
export async function getSDEVersion(info, logJson) {
    if (!info) {
        try {
            info = await getLatestJsonHead();
        }
        catch (e) {
            console.error("Failed to fetch SDE version:", e);
            return "sde-2026xxxx-TRANQUILITY";
        }
    }
    if (info) {
        logJson && console.log(info);
        return makeSDEVersionTag(info.releaseDate);
    }
    else {
        console.warn("Date header is missing in the response.");
        return "sde-2026xxxx-TRANQUILITY";
    }
}
if (rqutil.is("sdeVer")) {
    getSDEVersion(null, rqutil.is("debug")).then(console.log);
}