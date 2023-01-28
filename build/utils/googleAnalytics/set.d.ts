import { UnknownRecord } from '../../types/common';
/** Allows you to set values that persist across all the subsequent gtag() calls on the page.
 * {@link https://developers.google.com/gtagjs/reference/api#set API Reference}
 * @param params key-value pairs that are to persist across gtag() calls. */
export declare function set(params: UnknownRecord): void;
/** Allows you to set values that persist across all the subsequent gtag() calls on the page.
 * {@link https://developers.google.com/gtagjs/reference/api#set API Reference}
 * @param name the fieldName of given params
 * @param params key-value pairs that are to persist across gtag() calls. */
export declare function set(name: string, params: UnknownRecord): void;
