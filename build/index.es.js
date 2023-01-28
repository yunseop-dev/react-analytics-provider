import React__default, { createContext, useEffect, useMemo, useContext, useCallback } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var gtag = function () {
    var _arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _arg[_i] = arguments[_i];
    }
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments); // gtag.js validates only arguments
};
/**
 * Initialize Google Analytics(GA4)
 */
var initialize = function (
/** Tracking id (e.g. G-YNXXXXX) */
trackingId, 
/** To set values that will be sent with every event for a web page */
persistentValues) { return __awaiter(void 0, void 0, void 0, function () {
    var scriptId;
    return __generator(this, function (_a) {
        scriptId = 'ga-gtag';
        if (document.getElementById(scriptId)) {
            return [2 /*return*/, true];
        }
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var _a;
                var head = document.head;
                var script = document.createElement('script');
                script.id = scriptId;
                script.type = 'text/javascript';
                script.async = true;
                script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingId;
                head.insertBefore(script, head.firstChild);
                window.dataLayer = (_a = window.dataLayer) !== null && _a !== void 0 ? _a : [];
                gtag('js', new Date());
                gtag('config', trackingId, persistentValues);
                script.addEventListener('load', function () {
                    console.info("\uD83D\uDCCAInitialized Google Analytics (" + trackingId + ").");
                    resolve(true);
                });
                script.addEventListener('error', function () {
                    console.warn("\u26A0\uFE0FFailed to initialize Google Analytics (" + trackingId + ").");
                    reject(false);
                });
            })];
    });
}); };

function event(name, params) {
    console.info("\u2705GA: event " + name, params);
    gtag('event', name, params);
}

/**
 * Send an exception event to Google Analytics.
 * {@link https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions API Reference}
 * @param params
 */
var exception = function (params) {
    console.info("\u26A0\uFE0FGA: exception", params);
    gtag('event', 'exception', params);
};

function click(name, params) {
    var updatedParams = __assign({ action_type: 'click' }, params);
    console.info("\u2705GA: click " + name, updatedParams);
    gtag('event', name, updatedParams);
}

function pageView(trackingId, pathname) {
    console.info("\u2705GA: pageView " + pathname);
    gtag('config', trackingId, {
        page_path: pathname,
    });
}

function set() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var params = args.pop();
    var name = args.pop();
    if (name === undefined) {
        console.info("\u2705GA: set", params);
        gtag('set', params);
    }
    else {
        console.info("\u2705GA: set " + name, params);
        gtag('set', name, params);
    }
}

function setUserProperty(params) {
    return set('user_properties', params);
}

var googleAnalyticsHelper = {
    initialize: initialize,
    pageView: pageView,
    event: event,
    exception: exception,
    click: click,
    set: set,
    setUserProperty: setUserProperty,
};

var isClientSide = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
var canUseEventListeners = isClientSide && Boolean(window.addEventListener);
var executionEnv = {
    isClientSide: isClientSide,
    canUseEventListeners: canUseEventListeners,
};

var AnalyticsClient = /** @class */ (function () {
    function AnalyticsClient() {
    }
    return AnalyticsClient;
}());
var Analytics = /** @class */ (function () {
    function Analytics() {
    }
    Analytics.clear = function () {
        this.isInitialized = false;
        this.client = null;
    };
    Analytics.init = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var preset, googleAnalytics;
            var _this = this;
            return __generator(this, function (_a) {
                this.clear();
                preset = params.preset;
                googleAnalytics = preset === null || preset === void 0 ? void 0 : preset.googleAnalytics;
                this.client = Object.freeze({
                    init: function () {
                        var _a;
                        if (googleAnalytics) {
                            _this.googleAnalytics.initialize(googleAnalytics.trackingId, googleAnalytics.persistentValues);
                        }
                        (_a = params.onInit) === null || _a === void 0 ? void 0 : _a.call(params);
                    },
                    event: function (name, data) {
                        var _a;
                        if (googleAnalytics) {
                            _this.googleAnalytics.event(name, data);
                        }
                        (_a = params.onEvent) === null || _a === void 0 ? void 0 : _a.call(params, name, data);
                    },
                    pageView: function (record) {
                        var _a;
                        var pathname = location.pathname + location.search;
                        if (googleAnalytics) {
                            _this.googleAnalytics.pageView(googleAnalytics.trackingId, pathname);
                        }
                        (_a = params.onPageView) === null || _a === void 0 ? void 0 : _a.call(params, record);
                    },
                });
                this.client.init();
                this.isInitialized = true;
                return [2 /*return*/];
            });
        });
    };
    Analytics.getClient = function () {
        if (!this.client) {
            console.warn('preset이 실행되지 않았습니다.');
            return;
        }
        return this.client;
    };
    Analytics.event = function (name, data) {
        var client = this.getClient();
        if (!client) {
            return;
        }
        client.event(name, data);
    };
    Analytics.pageView = function (params) {
        var _a;
        var client = this.getClient();
        if (!client) {
            return;
        }
        (_a = client.pageView) === null || _a === void 0 ? void 0 : _a.call(client, params);
    };
    Analytics.setUserProperties = function (data) {
        var _a;
        var client = this.getClient();
        if (!client) {
            return;
        }
        (_a = client.setUserProperties) === null || _a === void 0 ? void 0 : _a.call(client, data);
    };
    Analytics.googleAnalytics = googleAnalyticsHelper;
    Analytics.isInitialized = false;
    return Analytics;
}());

var AnalyticsProviderContext = createContext(Analytics);

function AnalyticsProvider(props) {
    useEffect(function () {
        var _a, _b;
        (_a = Analytics.init) === null || _a === void 0 ? void 0 : _a.call(Analytics, props);
        (_b = props.onInit) === null || _b === void 0 ? void 0 : _b.call(props);
    }, [props]);
    return useMemo(function () { return React__default.createElement(AnalyticsProviderContext.Provider, { value: Analytics }, props.children); }, [props.children]);
}

function useAnalyticsContext() {
    return useContext(AnalyticsProviderContext);
}

var AnalyticsPageView = function (_a) {
    var children = _a.children, params = _a.params;
    var analytics = useAnalyticsContext();
    useEffect(function () {
        analytics.pageView(params);
    }, [analytics, params]);
    return React__default.createElement(React__default.Fragment, null, children);
};

var AnalyticsClick = function (_a) {
    var children = _a.children, name = _a.name, params = _a.params;
    var analytics = useAnalyticsContext();
    var child = React__default.Children.only(children);
    var handleChildClick = useCallback(function () {
        analytics.event(name, __assign({ action_type: 'click' }, params));
    }, [name, params, analytics]);
    return React__default.cloneElement(child, {
        onClick: handleChildClick,
    });
};

function useAnalyticsPageView(paramsOrCallback) {
    var analytics = useAnalyticsContext();
    useEffect(function () {
        function pageView() {
            return __awaiter(this, void 0, void 0, function () {
                var params, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(typeof paramsOrCallback === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, paramsOrCallback()];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = paramsOrCallback;
                            _b.label = 3;
                        case 3:
                            params = _a;
                            analytics.pageView(params);
                            return [2 /*return*/];
                    }
                });
            });
        }
        pageView();
    }, [analytics, paramsOrCallback]);
}

export { Analytics, AnalyticsClick, AnalyticsClient, AnalyticsPageView, AnalyticsProvider, canUseEventListeners, executionEnv, googleAnalyticsHelper, isClientSide, useAnalyticsContext, useAnalyticsPageView };
