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
export function defineColors() {
    Object.defineProperties(String.prototype, {
        red: {
            get() { return `<span style="color: red">${this}</span>`; }
        },
        green: {
            get() { return `<span style="color: green">${this}</span>`; }
        },
        yellow: {
            get() { return `<span style="color: yellow">${this}</span>`; }
        },
        blue: {
            get() { return `<span style="color: blue">${this}</span>`; }
        },
        magenta: {
            get() { return `<span style="color: #FF00FF">${this}</span>`; }
        },
        cyan: {
            get() { return `<span style="color: #00FFFF">${this}</span>`; }
        },
    });
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
export function getLogger(banner, isNode) {
    if (isNode) {
        return console.log.bind(console, banner);
    }
    else {
        const logElement = document.querySelector(".log-frame");
        const log = (...data) => {
            if (logElement) {
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
            }
        };
        return log;
    }
}
