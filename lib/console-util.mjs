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
        /** @type {(dis: string, color: string) => string} */
        const spantize = (dis, color) => `<span style="color: ${color}">${dis}</span>`;
        /** @type {PropertyDescriptorMap} */
        const descs = {};
        ["red", "green:rgb(75 182 75)", "yellow", "blue:#4343ff", "magenta:#fe2ffe", "cyan:#41f9f9"].forEach(color => {
            const [tag, c] = color.split(":");
            color = c || tag;
            descs[tag] = {
                /** @type {(this: string) => string} */
                get() { return enable ? spantize(this, color) : this; }
            };
        });
        Object.defineProperties(String.prototype, descs);
    }
}
/**
 * @param {string} jsonString
 */
const jsonBeautify = (jsonString) => {
    const re = /("(?:[^"\\]|\\.)*"(?:\s*:)?)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|\b(true|false)\b|\b(null)\b/gm;
    return jsonString.replace(re, (m, key_or_str, num, bool, nul) => {
        if (key_or_str) {
            let clz;
            const last = m.length - 1;
            if (m[last] === ":") {
                m = m.slice(0, last);
                clz = "key";
            }
            else {
                clz = "string";
            }
            let tag = `<span class="${clz}">${m}</span>`;
            clz === "key" && (tag += ":");
            return tag;
        }
        if (num)
            return `<span class="number">${m}</span>`;
        if (bool)
            return `<span class="bool">${m}</span>`;
        if (nul)
            return `<span class="nul">${m}</span>`;
        return m;
    });
};
/**
 * @param {string} banner
 */
export function getLogger(banner, logSelector = ".log-frame") {
    /** @type {Element=} */
    const logContainerRoot = isNode ? void 0 : document.querySelector(logSelector) || void 0;
    /** @type {Element=} */
    const logElement = logContainerRoot?.querySelector(".log-output") || logContainerRoot;
    defineColors(!!logElement);
    if (!logElement) {
        return console.log.bind(console, banner);
    }
    else {
        /** @type {(...data: any[]) => void} */
        const log = (...data) => {
            let text = banner;
            for (const d of data) {
                if (typeof d === "object") {
                    const json = JSON.stringify(d, null, 2);
                    text += json === "{}" ? String(d) : jsonBeautify(json);
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