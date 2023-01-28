import { UnknownRecord } from '../../types/common';
declare global {
    interface Window {
        dataLayer: unknown[];
    }
}
export declare const gtag: (..._arg: unknown[]) => void;
/**
 * Initialize Google Analytics(GA4)
 */
export declare const initialize: (trackingId: string, persistentValues?: UnknownRecord) => Promise<boolean>;
