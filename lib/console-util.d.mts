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
declare global {
    interface String {
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
    }
}
export declare function defineColors(): void;
export declare function getLogger(banner: string, isNode: boolean): (...args: any[]) => void;
