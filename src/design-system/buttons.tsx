import React from "react";
import styled from "styled-components";
import {COLORS, RADIUS} from "./theme.constants";
import {faPause, faPlay, faStop} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Buttons = styled.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${RADIUS.small};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`;

export const RedOutlineButton = styled(Buttons)`
    border: 1px solid red;
    background: white;
    color:red;
`;


export const BlueOutlineButton = styled(Buttons)`
    border: 1px solid blue;
    background: white;
    color:blue;
`;

export const PrimaryButton = styled(Buttons)`
    background-color: ${COLORS.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`
export const SecondaryButton = styled(Buttons)`
    background-color: ${COLORS.light_gray};
    color: ${COLORS.text_dark};
    border: 1px solid ${COLORS.medium_gray};
    &:hover {
        background-color: ${COLORS.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`;


 const PlayButton = styled(RoundButton)`
     background: ${COLORS.green};
     &:hover {
            background: ${COLORS.dark_green};
     }
 `

const PauseButton =  styled(RoundButton)`
    background: ${COLORS.orange};
    &:hover {
        background: ${COLORS.dark_orange};
    }
`
const DoneButton =  styled(RoundButton)`
    background: ${COLORS.red};
    &:hover {
        background: ${COLORS.dark_red};
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
