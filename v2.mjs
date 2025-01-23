// import type { TESIResponseOKMap } from "eve-esi-types";
// - - - - - - - - - - - - - - - - - - - -
//           constants, types
// - - - - - - - - - - - - - - - - - - - -
// shorthands
const log = console.log;
const isArray = Array.isArray;
/**
 * enable/disable console.log
 */
let LOG = false;
/**
 * this always `https://esi.evetech.net`
 */
const BASE = "https://esi.evetech.net";
/**
 * @typedef {import("./v2").TESIResponseOKMap} TESIResponseOKMap
 */
/**
 * @typedef ESIRequestOptions
 * @prop {Record<string, any>} [queries] query params for ESI request.
 * @prop {any} [body] will need it for `POST` request etc.
 * @prop {boolean} [ignoreError]  if want response data with ignore error then can be set to `true`.
 * @prop {AbortController} [cancelable] cancel request immediately
 * @prop {string} [token] Can be an empty object if no authentication is required.description
 * @prop {true=} [auth] Can be an empty object if no authentication is required.description
 */
// - - - - - - - - - - - - - - - - - - - -
//        module vars, functions
// - - - - - - - - - - - - - - - - - - - -
/**
 * Get the number of currently executing ESI requests
 */
let ax = 0;
/**
 * simple named error class.
 */
class ESIRequesError extends Error {
}
/**
 * throws when x-esi-error-limit-remain header value is "0". (http status: 420)
 */
class ESIErrorLimitReachedError extends Error {
    constructor() {
        super("Cannot continue ESI request because 'x-esi-error-limit-remain' is zero!");
    }
    valueOf() {
        return 420;
    }
}
/**
 * fetch the extra pages
 *
 *   + if the `x-pages` header property ware more than 1
 *
 * @param {string} endpointUrl
 * @param {RequestInit} rqopt request options
 * @param {Record<string, any>} qs queries
 * @param {number} pc pageCount
 */
const fetchP = async (endpointUrl, rqopt, qs, pc) => {
    const rqs = [];
    const rqp = new URLSearchParams(qs);
    for (let i = 2; i <= pc;) {
        rqp.set("page", (i++) + "");
        ax++;
        rqs.push(fetch(`${endpointUrl}?${rqp + ""}`, rqopt).then(res => res.json()).catch(reason => {
            console.warn(reason);
            return [];
        }).finally(() => {
            ax--;
        }));
    }
    return Promise.all(rqs).then(jsons => {
        // DEVNOTE: let check the page 2, type is array?
        if (isArray(jsons[0])) {
            let combined = [];
            for (let i = 0, end = jsons.length; i < end;) {
                combined = combined.concat(jsons[i++]);
            }
            return combined;
        }
        LOG && log("> > > pages result are object < < < --", jsons);
        return null;
    });
};
/** ### replace (C)urly (B)races (T)oken
 *
 * @example
 * "/characters/{character_id}/skills"
 * // ->
 * "/characters/<char.character_id>/skills"
 *
 * @param {string} endpoint e.g - "/characters/{character_id}/"
 * @param {number[]} ids
 * @returns fragment of qualified endpoint uri or null.
 */
const replaceCbt = (endpoint, ids) => {
    const re = /{([\w]+)}/g;
    /** @type {RegExpExecArray?} */
    let m;
    let idx = 0;
    while (m = re.exec(endpoint)) {
        endpoint = endpoint.replace(m[0], ids[idx++] + "");
    }
    return endpoint;
};
/**
 *
 * @param {string} endp this means endpoint url fragment like `/characters/{character_id}/` or `/characters/{character_id}/agents_research/`
 *   + The version parameter can be omitted by using `<version>/<endpoint>`
 */
const curl = (endp) => {
    endp = endp.replace(/^\/+|\/+$/g, "");
    return `${BASE}/latest/${endp}/`;
};
// - - - - - - - - - - - - - - - - - - - -
//            main functions
// - - - - - - - - - - - - - - - - - - - -
// It should complete correctly.
async function getEVEStatus() {
    try {
        const ok = await fire("get", "/characters/{character_id}/ship/", 94892443, { auth: true, token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IkpXVC1TaWduYXR1cmUtS2V5IiwidHlwIjoiSldUIn0.eyJzY3AiOlsiZXNpLWxvY2F0aW9uLnJlYWRfbG9jYXRpb24udjEiLCJlc2ktbG9jYXRpb24ucmVhZF9zaGlwX3R5cGUudjEiLCJlc2ktbWFpbC5vcmdhbml6ZV9tYWlsLnYxIiwiZXNpLW1haWwucmVhZF9tYWlsLnYxIiwiZXNpLW1haWwuc2VuZF9tYWlsLnYxIiwiZXNpLXNraWxscy5yZWFkX3NraWxscy52MSIsImVzaS1za2lsbHMucmVhZF9za2lsbHF1ZXVlLnYxIiwiZXNpLXdhbGxldC5yZWFkX2NoYXJhY3Rlcl93YWxsZXQudjEiLCJlc2ktc2VhcmNoLnNlYXJjaF9zdHJ1Y3R1cmVzLnYxIiwiZXNpLWNsb25lcy5yZWFkX2Nsb25lcy52MSIsImVzaS1jaGFyYWN0ZXJzLnJlYWRfY29udGFjdHMudjEiLCJlc2ktdW5pdmVyc2UucmVhZF9zdHJ1Y3R1cmVzLnYxIiwiZXNpLWFzc2V0cy5yZWFkX2Fzc2V0cy52MSIsImVzaS11aS53cml0ZV93YXlwb2ludC52MSIsImVzaS1maXR0aW5ncy5yZWFkX2ZpdHRpbmdzLnYxIiwiZXNpLWZpdHRpbmdzLndyaXRlX2ZpdHRpbmdzLnYxIiwiZXNpLW1hcmtldHMuc3RydWN0dXJlX21hcmtldHMudjEiLCJlc2ktY2hhcmFjdGVycy5yZWFkX2xveWFsdHkudjEiLCJlc2ktY2hhcmFjdGVycy5yZWFkX2FnZW50c19yZXNlYXJjaC52MSIsImVzaS1pbmR1c3RyeS5yZWFkX2NoYXJhY3Rlcl9qb2JzLnYxIiwiZXNpLW1hcmtldHMucmVhZF9jaGFyYWN0ZXJfb3JkZXJzLnYxIiwiZXNpLWxvY2F0aW9uLnJlYWRfb25saW5lLnYxIiwiZXNpLWNvbnRyYWN0cy5yZWFkX2NoYXJhY3Rlcl9jb250cmFjdHMudjEiLCJlc2ktY2xvbmVzLnJlYWRfaW1wbGFudHMudjEiLCJlc2ktY2hhcmFjdGVycy5yZWFkX2ZhdGlndWUudjEiLCJlc2ktYXNzZXRzLnJlYWRfY29ycG9yYXRpb25fYXNzZXRzLnYxIl0sImp0aSI6IjlmN2I2MDYwLWQ2N2EtNDZlNi1iOTZmLWJlYzJlYzM3MjU2MSIsImtpZCI6IkpXVC1TaWduYXR1cmUtS2V5Iiwic3ViIjoiQ0hBUkFDVEVSOkVWRTo5NDg5MjQ0MyIsImF6cCI6IjQyMDdlZjU1ODVjMjRjNDQ4MTU4Y2JhYTA1MmIzNjJiIiwidGVuYW50IjoidHJhbnF1aWxpdHkiLCJ0aWVyIjoibGl2ZSIsInJlZ2lvbiI6IndvcmxkIiwiYXVkIjpbIjQyMDdlZjU1ODVjMjRjNDQ4MTU4Y2JhYTA1MmIzNjJiIiwiRVZFIE9ubGluZSJdLCJuYW1lIjoiSmVmZiBHYWxsZXQiLCJvd25lciI6Im1vaDB4NjU5T0hLcytTcXBlWHFQTHIzYjdTcz0iLCJleHAiOjE3Mzc2NjI1NDksImlhdCI6MTczNzY2MTM0OSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5ldmVvbmxpbmUuY29tIn0.l4VBLlNxozB9c4AZf__fea_le_3eAoYG3XNKhUyaRzR0IJzQ1R5kyKHz5-ACH5Hz9H9JzQPq1cdVbI0mCdqVbnfHMYVp13p76H-yCwcG9lhO1x_Y2K5QkzkvtH_e0FkTu8rUjPNFc-8yv3BY7vsWWskVvxJoUnyEOvVpD192-L8xjG4FRZ5AYWMhG2XmbP1-6-OSY2ok1jHan6-CJDbKha2L3YjHRGV33VpdLHVXRFxDtW2iMpTRfx8l9VEvJKwgYtex1zB-0RprcafKRoBG_vA3nOBUCqoptWw08_N8vsnOsyPhHJ_VD5qOSfWnBgDEXk1RmvzRqETSXL1yN7zq-Q" });
        console.log(ok);
    }
    catch (error) {
        console.error("Failed to get character ship -", error);
    }
    return fire("get", "/status/");
}
/**
 * fire ESI request
 * @template {TESIEntryMethod} M
 * @template {keyof TESIResponseOKMap[M]} EP
 * @template {IdentifyParameters<TESIResponseOKMap[M][EP], ESIRequestOptions>} Opt
 * @template {InferESIResponseResult<M, EP>} R
 *
 * @param {M} mthd
 * @param {EP} endp - The endpoint to request.
 * @param {number | number[] | Opt} [pathParams] - Optional path parameters.
 * @param {Opt} [opt] - default is empty object {}. `body` is json string
 * @returns {Promise<R>} - The response from the endpoint.
 * @throws
 * @async
 */
export async function fire(mthd, endp, pathParams, opt) {
    if (typeof pathParams === "number") {
        pathParams = /** @type {number[]} */ ([pathParams]);
    }
    if (isArray(pathParams)) {
        // @ts-ignore actualy endp is string
        endp = replaceCbt(endp, pathParams);
    }
    if (!opt) {
        // When only options are provided
        opt = /** @type {Opt} */ (pathParams) || opt || {};
    }
    /** @type {RequestInit} */
    const rqopt = {
        method: mthd,
        mode: "cors",
        cache: "no-cache",
        signal: opt.cancelable?.signal,
        headers: {}
    };
    const qss = {
    // language: "en",
    };
    if (opt.queries) {
        // Object.assign(queries, options.queries); Object.assign is too slow
        const oqs = opt.queries;
        for (const k of Object.keys(oqs)) {
            qss[k] = oqs[k];
        }
    }
    // DEVNOTE: when datasource is not empty string. (e.g - "singularity"
    // in this case must specify datasource.
    // disabled since `REMOVING DATASOURCE SINGULARITY`
    // if (opt.datasource === "singularity") {
    //     opt.datasource = "tranquility";
    // }
    if (opt.auth) {
        // @ts-ignore The header is indeed an object
        rqopt.headers.authorization = `Bearer ${opt.token}`;
    }
    if (opt.body) { // means "POST" method etc
        // @ts-ignore The header is indeed an object
        rqopt.headers["content-type"] = "application/json";
        rqopt.body = JSON.stringify(opt.body);
    }
    // @ts-ignore actualy endp is string
    const endpointUrl = curl(endp);
    ax++;
    try {
        // @ts-ignore A silly type error will appear, but ignore it.
        const res = await fetch(`${endpointUrl}?${new URLSearchParams(qss) + ""}`, rqopt).finally(() => {
            ax--;
        });
        const stat = res.status;
        if (!res.ok && !opt.ignoreError) {
            if (stat === 420) {
                opt.cancelable && opt.cancelable.abort();
                throw new ESIErrorLimitReachedError();
            }
            else {
                // console.log(res);
                throw new ESIRequesError(`${res.statusText} (status=${stat})`);
            }
        }
        else {
            // DEVNOTE: - 204 No Content
            if (stat === 204) {
                // this result is empty, decided to return status code.
                return /** @type {R} */ ({ status: stat });
            }
            /** @type {R} */
            const data = await res.json();
            if (opt.ignoreError) {
                // meaning `forceJson`?
                return data;
            }
            // - - - - x-pages response.
            // +undefined is NaN
            // @ts-ignore becouse +null is 0
            const pc = +res.headers.get("x-pages");
            // has remaining pages? NaN > 1 === false !isNaN(pageCount)
            if (pc > 1) {
                LOG && log('found "x-pages" header, pages: %d', pc);
                const remData = await fetchP(endpointUrl, rqopt, qss, pc);
                // finally, decide product data.
                if (isArray(data) && isArray(remData)) {
                    // DEVNOTE: 2019/7/23 15:01:48 - types
                    return /** @type {R} */ (data.concat(remData));
                }
                else {
                    // @ts-ignore TODO: fix type
                    remData && Object.assign(data, remData);
                }
            }
            return data;
        }
    }
    catch (e) {
        // @ts-ignore actualy endp is string
        throw new ESIRequesError(`message: ${e.message}, endpoint=${endp}`);
    }
}
// type following and run
// node v2.mjs
// or yarn test:v2
getEVEStatus().then(eveStatus => console.log(eveStatus));
// {
//     "players": 16503,
//     "server_version": "2794925",
//     "start_time": "2025-01-21T11:02:34Z"
// }
