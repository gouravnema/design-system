//generate sprites from heads_sprite.webp file and export them as React components
import React from 'react';
import headsSprite from './heads_sprite.webp';
import { Sprite } from '../sprite_builder';

export interface PeopleProps {
  rounded?: boolean;
  size?: number;
}

const Head = ({ rounded, x, y, size }: { rounded: boolean, x: number, y: number, size: number }) => {
  const factor = (size / 64);
  return (
    <Sprite rounded={rounded}
            width={size}
            height={size}
            positionX={x * factor}
            positionY={y * factor}
            src={headsSprite}
            size={300 * factor}
    />);
};
// row 1 8
export const Head1 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={9}   y={8} size={size} />;
export const Head2 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={82}  y={8} size={size} />;
export const Head3 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={155} y={8} size={size} />;
export const Head4 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={226} y={8} size={size} />;


// row 2 79
export const Head5 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={9}   y={79} size={size} />;
export const Head6 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={82}  y={79} size={size} />;
export const Head7 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={155} y={79} size={size} />;
export const Head8 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={226} y={79} size={size} />;


// row 3 151
export const Head9 =  ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={9}   y={151} size={size} />;
export const Head10 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={82}  y={151} size={size} />;
export const Head11 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={155} y={151} size={size} />;
export const Head12 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={226} y={151} size={size} />;

// row 4 223
export const Head13 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={9}   y={223} size={size} />;
export const Head14 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={82}  y={223} size={size} />;
export const Head15 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={155} y={223} size={size} />;
export const Head16 = ({ rounded, size = 10 }: PeopleProps) => <Head rounded={rounded} x={226} y={223} size={size} />;