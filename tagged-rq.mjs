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
 * @command node tagged-rq.mjs -x
 */
import { esi } from "./lib/tagged-request-api.mjs";
// import * as util from "./lib/rq-util.mjs";
// Furthermore, the endpoint selected is narrowed down by "tags" and "method".
esi.assets.get("/characters/2112625428/assets/", {
    auth: true
}).then(console.log).catch(console.log);
esi.character.get("/characters/{character_id}/", { pathParams: 2112625428 }).then(console.log);
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
esi.universe.get("/universe/structures/", { query: { filter: "market" } }).then(console.log);
esi.universe.post("/universe/ids/", {
    body: ["the forge", "plex"]
}).then(console.log);
esi.fittings.delete("/characters/{character_id}/fittings/{fitting_id}/", {
    pathParams: [1234, 56789],
    auth: true
});
esi.character.post("/characters/affiliation/").catch(console.log);
