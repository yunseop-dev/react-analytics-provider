import { UnknownRecord } from '../types';
export declare type GoogleAnalyticsInitParams = {
    trackingId: string;
    persistentValues?: Record<string, unknown>;
};
export declare type InitParams = {
    googleAnalytics?: GoogleAnalyticsInitParams;
};
export interface AnalyticsPreset {
    preset?: InitParams;
    onInit?: () => void | Promise<void>;
    onEvent?: (name: string, data?: UnknownRecord, callback?: (...args: unknown[]) => void) => void;
    onPageView?: (params: UnknownRecord) => void;
    setUserProperties?: (data: UnknownRecord) => void;
}
export declare class AnalyticsClient {
    init: () => void;
    event: (name: string, data?: UnknownRecord) => void;
    pageView: (params?: UnknownRecord) => void;
    setUserProperties?: (data: UnknownRecord) => void;
}
export declare class Analytics {
    static googleAnalytics: {
        initialize: (trackingId: string, persistentValues?: UnknownRecord) => Promise<boolean>;
        pageView: typeof import("../utils/googleAnalytics/pageView").pageView;
        event: typeof import("../utils/googleAnalytics/event").event;
        exception: (params?: import("../utils/googleAnalytics/exception").ExceptionParameters) => void;
        click: typeof import("../utils/googleAnalytics/click").click;
        set: typeof import("../utils/googleAnalytics/set").set;
        setUserProperty: typeof import("../utils/googleAnalytics/setUserProperty").setUserProperty;
    };
    static isInitialized: boolean;
    static client: AnalyticsClient;
    static clear(): void;
    static init(params: AnalyticsPreset): Promise<void>;
    static getClient(): AnalyticsClient | void;
    static event(name: string, data?: UnknownRecord): void;
    static pageView(params?: UnknownRecord): void;
    static setUserProperties(data: UnknownRecord): void;
}
