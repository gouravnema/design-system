import React from 'react';
export interface PeopleProps {
    rounded?: boolean;
    size?: number;
    code: string;
}
export declare const Silhouette: ({ code, rounded, size }: PeopleProps) => React.JSX.Element | null;
