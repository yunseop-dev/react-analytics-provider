import { ReactNode } from 'react';
import { AnalyticsPreset } from '../../mixin/analytics';
interface Props extends AnalyticsPreset {
    children: ReactNode;
}
export declare function AnalyticsProvider(props: Props): JSX.Element;
export {};
