import React from 'react';
import styled from "styled-components";
import {Card} from "../components/cards/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ModalWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-card{
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        .btn-close{
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 68%;
            align-self: flex-end;
            &:hover{
                box-shadow: 0 1px 5px rgba(0,0,0,0.2);
            }
            &:active {
                box-shadow: inset 0 1px 5px rgba(2, 0, 255, 0.5);
            }
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`



interface ModalProps {
    children: React.ReactNode;
    shouldShow: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({children, shouldShow, onClose}) => {
    return shouldShow ? (<ModalWrapper>
        <Card className={'modal-card'}>
            <div className={'btn-close'} role={'button'} onClick={onClose}>
                <FontAwesomeIcon icon={faClose}/>
            </div>
            <div className={'content'}>
                {children}
            </div>
        </Card>
    </ModalWrapper>):null;
}
