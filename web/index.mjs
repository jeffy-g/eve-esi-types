/*!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  Copyright (C) 2026 jeffy-g <hirotom1107@gmail.com>
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
/**
 * @file publish/web/index.mjs
 * @command node publish/web/index.mjs
 */

import { log } from "../minimal-rq.mjs";
import { esi } from "../lib/tagged-request-api.mjs";


globalThis.esi = esi;
// DEVNOTE: 2022/02/22 - MUST create "jsconfig.json" and configure "strict: true"!
//   CAVEAT: Template types will not work if not configured correctly
/**
 * @type {<
 *  B extends true | undefined, // Pass `true` or explicitly specify that it is optional (undefined
 *  R extends undefined extends B? HTMLElement: NodeListOf<HTMLElement>
 * >(selector: string, all?: B) => R
 * }
 * @param [all] Can't specify type annotation here, explicitly like `{true | undefined}` will break type template.  
 *   + However, it must be enclosed in "[" and "]" to indicate that it is optional.
 */
const $query = (selector, all) => {
  /** @type {"querySelector" | "querySelectorAll"} */
  const method = `querySelector${all ? "All" : ""}`;
  // @ts-ignore TODO:
  return document[method](selector);
};
// $query(".footer"); // OK, HTMLElement
// $query(".footer", true); // OK, NodeListOf<HTMLElement>


/** @type {(s: string, rep: string, regex?: RegExp) => void} */
function copy(selector, replacement, regex = /<[^>]+>/) {
  /** @type {HTMLInputElement} */
  const text = $query(selector);
  const shellscript = text.value.replace(regex, replacement);
  navigator.clipboard.writeText(shellscript).then(() => alert("Copied the text: " + shellscript));
}
globalThis.copy = copy;

/** @type {HTMLDivElement} */
const scriptInput = $query(".cli-input");
/** @type {HTMLDivElement} */
const logOutput = $query(".log-output");
if (scriptInput && logOutput) {

  /** @type {string[]} */
  const cmdHistories = [];
  let historyIndex = 0;
  let draftLine = "";

  //
  // Utilities
  //
  /** @type {(element: HTMLElement) => void} */
  const moveCaretToEnd = (element) => {
    const selection = globalThis.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };
  /** @type {(line?: string) => void} */
  const setCommandLine = (line = "") => {
    scriptInput.textContent = line;
    moveCaretToEnd(scriptInput);
  };
  /** @type {() => void} */
  const resetHistoryCursor = () => {
    historyIndex = cmdHistories.length;
    draftLine = "";
  };
  /** @type {(line?: string) => void} */
  const updateHistory = (line) => {
    const cmd = line?.trim();
    if (!cmd) return;
    if (cmdHistories[cmdHistories.length - 1] !== cmd) {
      cmdHistories.push(cmd);
    }
    resetHistoryCursor();
  };
  /** @type {(step: -1 | 1) => void} */
  const recallHistory = (step) => {
    if (!cmdHistories.length) return;
    if (step < 0) {
      if (historyIndex === cmdHistories.length) {
        draftLine = scriptInput.textContent.trim();
      }
      historyIndex = Math.max(0, historyIndex - 1);
    } else {
      if (historyIndex === cmdHistories.length) return;
      historyIndex = Math.min(cmdHistories.length, historyIndex + 1);
    }
    setCommandLine(historyIndex === cmdHistories.length ? draftLine : cmdHistories[historyIndex]);
  };

  resetHistoryCursor();
  scriptInput.focus();
  scriptInput.addEventListener("input", function (e) {
    const text = this.textContent || "";
    if (!text.includes("\n")) return;
    this.textContent = text.replace(/\n+/g, " ");
    moveCaretToEnd(this);
  });
  scriptInput.addEventListener("keydown", function (e) {
    if (e.isComposing) return;
    if (e.ctrlKey) {
      if (e.code === "KeyL") {
        e.preventDefault();
        logOutput.innerHTML = "";
        setCommandLine("");
        resetHistoryCursor();
      }
    } else {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          recallHistory(-1);
          break;
        case "ArrowDown":
          e.preventDefault();
          recallHistory(1);
          break;
        case "Enter": {
          e.preventDefault();
          const cmd = (this.textContent || "").trim();
          if (!cmd) {
            setCommandLine("");
            resetHistoryCursor();
            return;
          }
          console.log(`Run script: "${cmd}"`);
          // WIP: eval command result
          Promise.resolve()
            .then(() => globalThis.eval(cmd))
            .then(() => {
              updateHistory(cmd);
              setCommandLine("");
            })
            .catch(console.error);
          break;
        }
      }
    }
  });
}
