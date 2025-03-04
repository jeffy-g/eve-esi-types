/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file tagged-rq.mts
 * @command node tagged-rq.mjs -x
 */
import { esi as esiRq } from "./lib/tagged-request-api.mjs";
// console.log(esiRq);
// Furthermore, the endpoint selected is narrowed down by "tags" and "method".
esiRq.character.get("/characters/{character_id}/", 2112625428).then(console.log);
esiRq.universe.get("/universe/structures/", { query: { filter: "market" } }).then(console.log);
esiRq.universe.post("/universe/ids/", {
    body: ["the forge", "plex"]
}).then(console.log);
esiRq.fittings.delete("/characters/{character_id}/fittings/{fitting_id}/", [1234, 56789]);
esiRq.assets.get("/characters/{character_id}/assets/", 1234, {
    auth: true
}).then(console.log).catch(console.log);
