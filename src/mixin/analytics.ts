import {googleAnalyticsHelper} from '../utils';
import {UnknownRecord} from '../types';

export type GoogleAnalyticsInitParams = {
  trackingId: string;
  persistentValues?: Record<string, unknown>;
};

export type InitParams = {
  googleAnalytics?: GoogleAnalyticsInitParams;
};

export interface AnalyticsPreset {
  preset?: InitParams;
  onInit?: () => void | Promise<void>;

  onEvent?: (name: string, data?: UnknownRecord, callback?: (...args: unknown[]) => void) => void;

  onPageView?: (params: UnknownRecord) => void;
  setUserProperties?: (data: UnknownRecord) => void;
}

export class AnalyticsClient {
  init: () => void;
  event: (name: string, data?: UnknownRecord) => void;
  pageView: (params?: UnknownRecord) => void;
  setUserProperties?: (data: UnknownRecord) => void;
}

export class Analytics {
  static googleAnalytics = googleAnalyticsHelper;

  static isInitialized = false;
  static client: AnalyticsClient;

  static clear() {
    this.isInitialized = false;
    this.client = null;
  }

  static async init(params: AnalyticsPreset) {
    this.clear();

    const {preset} = params;
    const googleAnalytics = preset?.googleAnalytics;

    this.client = Object.freeze({
      init: () => {
        if (googleAnalytics) {
          this.googleAnalytics.initialize(googleAnalytics.trackingId, googleAnalytics.persistentValues);
        }
        params.onInit?.();
      },
      event: (name: string, data?: UnknownRecord) => {
        if (googleAnalytics) {
          this.googleAnalytics.event(name, data);
        }
        params.onEvent?.(name, data);
      },
      pageView: (record?: UnknownRecord) => {
        const pathname = location.pathname + location.search;
        if (googleAnalytics) {
          this.googleAnalytics.pageView(googleAnalytics.trackingId, pathname);
        }
        params.onPageView?.(record);
      },
    });

    this.client.init();
    this.isInitialized = true;
  }

  static getClient(): AnalyticsClient | void {
    if (!this.client) {
      console.warn('preset이 실행되지 않았습니다.');
      return;
    }

    return this.client;
  }

  static event(name: string, data?: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.event(name, data);
  }

  static pageView(params?: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }

    client.pageView?.(params);
  }

  static setUserProperties(data: UnknownRecord) {
    const client = this.getClient();
    if (!client) {
      return;
    }
    client.setUserProperties?.(data);
  }
}
