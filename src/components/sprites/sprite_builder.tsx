import styled from 'styled-components';
import React from 'react';
import { SpriteProps } from './people';

export interface SpriteProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number; // width of the sprite
  height: number; // height of the sprite
  positionX: number; // x position of the sprite in the sprite sheet
  positionY: number; // y position of the sprite in the sprite sheet
  src: string; // source of the sprite sheet image
}


const SpriteContainer = styled.div<SpriteProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-image: url(${props => props.src});
    background-position: ${(props) => `-${props.positionX}px -${props.positionY}px`};
    background-size: auto;
    //border: 1px solid green;
    //padding: 1px;
`;


export const Sprite: React.FC<SpriteProps> = ({ width, height, positionX, positionY, ...rest }) => {
  return <SpriteContainer width={width} height={height} positionX={positionX} positionY={positionY} {...rest} />;
};