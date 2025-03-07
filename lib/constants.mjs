/**
 * Dummy import
 * @import * as cc from "colors.ts";
 */
/**
 * will almost certainly be able to detect if you are in a nodejs environment
 *
 * @date 2020/5/9
 */
export const isNode = await (async () => {
    let returnValue;
    if (typeof process === "object") {
        returnValue = typeof process.versions === "object" && /\d+\.\d+\.\d+/.test(process.versions.node);
        if (returnValue) {
            await import("colors.ts");
        }
    }
    else {
        // modId = "https://cdn.jsdelivr.net/npm/colors.ts@1.0.20/+esm";
        returnValue = false;
    }
    return returnValue;
})();
