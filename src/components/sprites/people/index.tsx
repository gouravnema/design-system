//generate sprites from heads_sprite.webp file and export them as React components
import React from 'react';
import headsSprite from './heads_sprite.webp';
import { Sprite } from '../sprite_builder';


export const Head1 = () => (
  <Sprite width={64} height={64} positionX={4} positionY={2} src={headsSprite} />
);

export const Head2 = () => (
  <Sprite width={64} height={64} positionX={68} positionY={2} src={headsSprite} />
);

export const Head3 = () => (
  <Sprite width={64} height={64} positionX={132} positionY={2} src={headsSprite} />
);
export const Head4 = () => (
  <Sprite width={64} height={64} positionX={196} positionY={2} src={headsSprite} />
);

// row 2
export const Head5 = () => (
  <Sprite width={64} height={64} positionX={4} positionY={66} src={headsSprite} />
);
export const Head6 = () => (
  <Sprite width={64} height={64} positionX={68} positionY={66} src={headsSprite} />
);
export const Head7 = () => (
  <Sprite width={64} height={64} positionX={132} positionY={66} src={headsSprite} />
);
export const Head8 = () => (
  <Sprite width={64} height={64} positionX={196} positionY={66} src={headsSprite} />
);

// row 3
export const Head9 = () => (
  <Sprite width={64} height={64} positionX={4} positionY={129} src={headsSprite} />
);
export const Head10 = () => (
  <Sprite width={64} height={64} positionX={68} positionY={129} src={headsSprite} />
);
export const Head11 = () => (
  <Sprite width={64} height={64} positionX={132} positionY={129} src={headsSprite} />
);
export const Head12 = () => (
  <Sprite width={64} height={64} positionX={196} positionY={129} src={headsSprite} />
);

// row 4
export const Head13 = () => (
  <Sprite width={64} height={64} positionX={4} positionY={193} src={headsSprite} />
);
export const Head14 = () => (
  <Sprite width={64} height={64} positionX={68} positionY={193} src={headsSprite} />
);
export const Head15 = () => (
  <Sprite width={64} height={64} positionX={132} positionY={193} src={headsSprite} />
);
export const Head16 = () => (
  <Sprite width={64} height={64} positionX={196} positionY={193} src={headsSprite} />
);