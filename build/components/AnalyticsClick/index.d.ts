import React from 'react';
import { UnknownRecord } from '../../types/common';
export interface AnalyticsClickProps {
    children: React.ReactNode;
    name: string;
    params?: UnknownRecord;
}
export declare const AnalyticsClick: ({ children, name, params }: AnalyticsClickProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
