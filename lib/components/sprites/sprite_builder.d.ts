import React from 'react';
export interface SpriteProps extends React.HTMLAttributes<HTMLDivElement> {
    width: number;
    height: number;
    positionX: number;
    positionY: number;
    src: string;
    rounded?: boolean;
    size?: number;
    maxSize?: string;
}
export declare const Sprite: React.FC<SpriteProps>;
