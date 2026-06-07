import React from 'react';
export interface TimeFormatterProps {
    timeInSeconds: number;
    color?: string;
    humanize?: boolean;
}
export declare const TimeFormatter: React.FC<TimeFormatterProps>;
