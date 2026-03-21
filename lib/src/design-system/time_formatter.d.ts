import React from 'react';
interface TimeFormatterProps {
    timeInSeconds: number;
    color?: string;
    humanize?: boolean;
}
export declare const TimeFormatter: React.FC<TimeFormatterProps>;
export {};
