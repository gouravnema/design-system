import styled from "styled-components";
import { COLORS, SHADOW } from '../../theme';
import React from "react";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string;
    shadow?: string;
    progress?: string;
    color?: string;
    progress2?: string;
    color2?: string;
}

export const ProgressBar = styled.div<ProgressBarProps>`
    width: 100%;
    height: 10px;
    background-color: ${props => props.backgroundColor || COLORS.base};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: ${props => props.shadow || SHADOW.insetLight};
    margin: 10px 0;
    transition: width 0.3s ease-in-out;

    &::after {
        content: '';
        display: block;
        width: ${props => props.progress || '0%'};
        height: 100%;
        background-color: ${props => props.color || COLORS.green};
        transition: width 0.3s ease-in-out;
        z-index: 1; /* Ensure this is on top */
        position: absolute;
        top: 0;
        left: 0;
    }

    &::before {
        content: '';
        display: block;
        width: ${props => props.progress2 || '0%'};
        height: 100%;
        background-color: ${props => props.color2 || COLORS.orange};
        transition: width 0.3s ease-in-out;
        z-index: 2; /* Ensure this is on top of the first bar */
        position: absolute;
        top: 0;
        left: ${props => props.progress || '0%'}; /* Position next to the first progress bar */
    }
`;
