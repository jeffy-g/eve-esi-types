/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="./dist/v2"/>
/**
 * @file tagged-rq.mts
 * @command node tagged-rq.mjs -x -debug
 */
import { esi } from "./lib/tagged-request-api.mjs";
import * as util from "./lib/rq-util.mjs";
const ID_CCP_Zoetrope = 2112625428;
// Furthermore, the endpoint selected is narrowed down by "tags" and "method".
esi.alliance.get("/alliances/").then(aIds => {
    console.log(`get:alliances, id size=${aIds.length}`);
    // for (const aid of aIds.slice(0, 20)) {
    //     esi.alliance.get(`/alliances/${aid}/`).then(console.log);
    // }
});
esi.character.get("/characters/{character_id}/", { pathParams: ID_CCP_Zoetrope }).then(console.log);
esi.universe.post("/universe/ids/", {
    body: ["the forge", "plex"]
}).then(console.log);
esi.universe.post("/universe/names/", {
    body: [44992, 434243723, 109299958, 10000002]
}).then(console.log);
esi.universe.get("/universe/structures/", { query: { filter: "market" } }).then(console.log);
esi.wars.get("/wars/", { query: { max_war_id: 20 } }).then(warIds => {
    console.log(`get:alliances, id size=${warIds.length}`);
    // for (const wid of warIds) {
    //     esi.wars.get(`/wars/${wid}/`).then(console.log);
    // }
});
esi.character.post("/characters/affiliation/", {
    body: [ID_CCP_Zoetrope]
}).then(console.log);
// node tagged-rq.mjs -x -debug -withError
if (util.is("withError")) {
    esi.assets.get(`/characters/${ID_CCP_Zoetrope}/assets/`, {
        auth: true
    }).then(console.log).catch(console.log);
    esi.mail.post("/characters/{character_id}/mail/", ({
        auth: true,
        pathParams: ID_CCP_Zoetrope, // ✅ At this point, the expected semantic error is successfully triggered as intended.
        body: {
            subject: "test!!",
            body: "",
            recipients: [{
                    recipient_id: ID_CCP_Zoetrope, recipient_type: "character"
                }]
        },
        // token: "s.s.s"
    }) /*  satisfies Pick<TESIResponsePostEntry<"/characters/{character_id}/mail/">, "auth" | "body"> & { pathParams: number } */).then(console.log).catch(console.log);
    esi.fittings.delete("/characters/1234/fittings/56789/", {
        // pathParams: [1234, 56789], // ✅ At this point, the expected semantic error is successfully triggered as intended.
        auth: true
    });
    esi.character.post("/characters/affiliation/", {
        body: [12345]
    }).catch(console.log);
}
