import { event } from './event';
import { click } from './click';
import { pageView } from './pageView';
import { set } from './set';
import { setUserProperty } from './setUserProperty';
export declare const googleAnalyticsHelper: {
    initialize: (trackingId: string, persistentValues?: import("../..").UnknownRecord) => Promise<boolean>;
    pageView: typeof pageView;
    event: typeof event;
    exception: (params?: import("./exception").ExceptionParameters) => void;
    click: typeof click;
    set: typeof set;
    setUserProperty: typeof setUserProperty;
};
