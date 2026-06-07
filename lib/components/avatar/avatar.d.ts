import React from 'react';
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: number;
    src?: string;
    alt?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
