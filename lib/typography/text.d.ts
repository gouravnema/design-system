import React from 'react';
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: string;
    color?: string;
    margin?: string;
    padding?: string;
    align?: string;
}
export declare const Text: React.FC<TextProps>;
