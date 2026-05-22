import React from "react";
import styled from "styled-components";
import {COLORS, RADIUS, SHADOW} from "../../theme";
import {faPause, faPlay, faStop} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Buttons = styled.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${COLORS.text_dark};
    background-color: ${COLORS.base};
    border: none;
    border-radius: ${RADIUS.medium};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${SHADOW.medium};
    
    &:hover {
        box-shadow: ${SHADOW.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${SHADOW.insetMedium};
        transform: translateY(0);
    }
`;

export const RedOutlineButton = styled(Buttons)`
    background-color: ${COLORS.baseLight};
    color: ${COLORS.red};
    box-shadow: ${SHADOW.light};
    
    &:hover {
        box-shadow: ${SHADOW.medium};
        color: ${COLORS.dark_red};
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }
`;


export const BlueOutlineButton = styled(Buttons)`
    background-color: ${COLORS.baseLight};
    color: ${COLORS.blue};
    box-shadow: ${SHADOW.light};
    
    &:hover {
        box-shadow: ${SHADOW.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }
`;

export const PrimaryButton = styled(Buttons)`
    background-color: ${COLORS.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${SHADOW.large};
    }

    &:active {
        box-shadow: ${SHADOW.insetMedium};
    }
`
export const SecondaryButton = styled(Buttons)`
    background-color: ${COLORS.light_gray};
    color: ${COLORS.text_dark};
    box-shadow: ${SHADOW.light};
    
    &:hover {
        background-color: ${COLORS.baseLight};
        box-shadow: ${SHADOW.medium};
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }
`


const RoundButton = styled(Buttons)`
    color: white;
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
    }
`;


const PlayButton = styled(RoundButton)`
     background: ${COLORS.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${SHADOW.large};
     }

     &:active {
            box-shadow: ${SHADOW.insetDark};
     }
 `

const PauseButton =  styled(RoundButton)`
    background: ${COLORS.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${SHADOW.large};
    }

    &:active {
        box-shadow: ${SHADOW.insetDark};
    }
`
const DoneButton =  styled(RoundButton)`
    background: ${COLORS.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${SHADOW.large};
    }

    &:active {
        box-shadow: ${SHADOW.insetDark};
    }
`


export const TimerDoneButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <DoneButton {...props}>
    <FontAwesomeIcon icon={faStop}/>
  </DoneButton>
}


export const TimerPauseButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <PauseButton {...props}>
    <FontAwesomeIcon icon={faPause}/>
  </PauseButton>
}

export const TimerPlayButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <PlayButton {...props}>
    <FontAwesomeIcon icon={faPlay}/>
  </PlayButton>
}
