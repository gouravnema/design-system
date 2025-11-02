import styled from 'styled-components';
import React from 'react';
import ClassName from 'classnames';

export interface SpriteProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number; // width of the sprite
  height: number; // height of the sprite
  positionX: number; // x position of the sprite in the sprite sheet
  positionY: number; // y position of the sprite in the sprite sheet
  src: string; // source of the sprite sheet image
  rounded?: boolean; // whether the sprite should be rounded
  size?: number; // size of the sprite sheet image
  maxSize?: string; // max height of the sprite
}


const SpriteContainer = styled.div<SpriteProps>`
    width: ${(props) => props.width}vw;
    height: ${(props) => props.height}vw;
    background-image: url(${props => props.src});
    background-position: ${(props) => `-${props.positionX}vw -${props.positionY}vw`};
    background-size: ${(props) => props.size + 'vw' || 'auto'};
    background-repeat: no-repeat;
    &.rounded {
        border-radius: 50%;
    }
    max-height: ${p=>p.maxSize};
    max-width: ${p=>p.maxSize};
`;


export const Sprite: React.FC<SpriteProps> = ({ rounded=false, width, height, positionX, positionY, ...rest }) => {
  return <SpriteContainer className={ClassName({rounded})} width={width} height={height} positionX={positionX} positionY={positionY} {...rest} />;
};