/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/// <reference types="./v2"/>
/**
 * @file tagged-rq.mts
 * @command node tagged-rq.mjs -x -debug
 */
import { esi } from "./lib/tagged-request-api.mjs";
import * as util from "./lib/rq-util.mjs";
// Furthermore, the endpoint selected is narrowed down by "tags" and "method".
esi.alliance.get("/alliances/").then(aIds => {
    console.log(`get:alliances, id size=${aIds.length}`);
    // for (const aid of aIds.slice(0, 20)) {
    //     esi.alliance.get(`/alliances/${aid}/`).then(console.log);
    // }
});
esi.character.get("/characters/{character_id}/", { pathParams: 2112625428 }).then(console.log);
esi.universe.post("/universe/ids/", {
    body: ["the forge", "plex"]
}).then(console.log);
esi.universe.post("/universe/names/", {
    body: [44992, 434243723, 109299958, 10000002]
}).then(console.log);
esi.universe.get("/universe/structures/", { query: { filter: "market" } }).then(console.log);
// node tagged-rq.mjs -x -debug -withError
if (util.is("withError")) {
    esi.assets.get("/characters/2112625428/assets/", {
        auth: true
    }).then(console.log).catch(console.log);
    esi.mail.post("/characters/2112625428/mail/", /** @satisfies {Pick<TESIResponsePostEntry<"/characters/{character_id}/mail/">, "auth" | "body">} */ ({
        auth: true,
        body: {
            subject: "test!!",
            body: "",
            recipients: [{
                    recipient_id: 2112625428, recipient_type: "character"
                }]
        },
        // token: "s.s.s"
    })).then(console.log).catch(console.log);
    esi.fittings.delete("/characters/1234/fittings/56789/", {
        // pathParams: [1234, 56789], // ✅ At this point, the expected semantic error is successfully triggered as intended.
        auth: true
    });
    esi.character.post("/characters/affiliation/", {
        body: [12345]
    }).catch(console.log);
}
