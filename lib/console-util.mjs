/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2025 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file eve-esi-types/lib/console-util.mts
 */
import { isNode } from "./constants.mjs";
let colorsDefined = false;
/**
 * @param {boolean} enable
 */
export function defineColors(enable) {
    if (isNode)
        return;
    if (!colorsDefined) {
        colorsDefined = true;
        Object.defineProperties(String.prototype, {
            red: {
                get() { return enable ? `<span style="color: red">${this}</span>` : this; }
            },
            green: {
                get() { return enable ? `<span style="color: green">${this}</span>` : this; }
            },
            yellow: {
                get() { return enable ? `<span style="color: yellow">${this}</span>` : this; }
            },
            blue: {
                get() { return enable ? `<span style="color: blue">${this}</span>` : this; }
            },
            magenta: {
                get() { return enable ? `<span style="color: #FF00FF">${this}</span>` : this; }
            },
            cyan: {
                get() { return enable ? `<span style="color: #00FFFF">${this}</span>` : this; }
            },
        });
    }
}
/**
 * @param {string} jsonString
 */
const jsonBeautify = (jsonString) => {
    const re = /("(?:[^"\\]|\\.)*"(?:\s*:)?)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|\b(true|false)\b|\b(null)\b/gm;
    return jsonString.replace(re, (m, key_or_str, num, bool, nul) => {
        if (key_or_str) { // key
            let clz;
            const last = m.length - 1;
            if (m[last] === ":") {
                m = m.substring(0, last);
                clz = "key";
            }
            else {
                clz = "string";
            }
            let tag = `<span class="${clz}">${m}</span>`;
            clz === "key" && (tag += ":");
            return tag;
        }
        if (num) { // number
            return `<span class="number">${m}</span>`;
        }
        if (bool) { // boolean
            return `<span class="bool">${m}</span>`;
        }
        if (nul) { // null
            return `<span class="nul">${m}</span>`;
        }
        return m;
    });
};
export function getLogger(banner, logSelector = ".log-frame") {
    /** @type {Element=} */
    const logElement = isNode ? void 0 : document.querySelector(logSelector) || void 0;
    defineColors(!!logElement);
    if (!logElement) {
        return console.log.bind(console, banner);
    }
    else {
        /** @type {function(...any): void} */
        const log = (...data) => {
            let text = banner;
            for (const d of data) {
                if (typeof d === "object") {
                    const json = JSON.stringify(d, null, 2);
                    text += jsonBeautify(json);
                }
                else {
                    text += " " + d;
                }
            }
            requestAnimationFrame(() => {
                logElement.innerHTML += text + "\n";
                logElement.scrollTop = 999999;
            });
        };
        return log;
    }
}
