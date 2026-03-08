/**
 * Dummy import
 * @import * as cc from "colors.ts";
 */
/**
 * will almost certainly be able to detect if you are in a nodejs environment
 *
 * @date 2020/5/9
 */
export const isNode = (() => {
    let returnValue;
    if (typeof process === "object") {
        returnValue = typeof process.versions === "object" && /\d+\.\d+\.\d+/.test(process.versions.node);
        if (returnValue) {
            import(/* webpackIgnore: true */ "colors.ts");
        }
    }
    else {
        returnValue = false;
    }
    return returnValue;
})();