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
/**
 * @param {boolean} enable
 */
export declare function defineColors(enable: boolean): void;
export declare function getLogger(banner: string, logSelector?: string): (...args: any[]) => void;
