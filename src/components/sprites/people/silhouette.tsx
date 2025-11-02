//generate sprites from heads_sprite.webp file and export them as React components
import React from 'react';
import headsSprite from './heads_sprite.webp';
import { Sprite } from '../sprite_builder';

export interface PeopleProps {
  rounded?: boolean;
  size?: number;
  code: string;
}

// generate a map of all heads with their coordinates
const cordX = [9, 82, 155, 226];
const cordY = [8, 79, 151, 223];
const map = cordX.reduce((acc, x, i) => {
  cordY.forEach((y, j) => {
    acc[`head_${i + 1}_${j + 1}`] = { x, y };
  });
  return acc;
}, {});

export const Silhouette = ({ code, rounded, size = 10 }: PeopleProps) => {
  const coords = map[code];
  const factor = (size / 64);
  if (!coords) return null;
  return (
    <Sprite rounded={rounded}
            width={size}
            height={size}
            positionX={coords.x * factor}
            positionY={coords.y * factor}
            src={headsSprite}
            size={300 * factor}
    />);
};