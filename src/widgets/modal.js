import React from 'react';
import styled from "styled-components";
import {Card} from "../components/cards/card.js";

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
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`



export const Modal = function ({children, shouldShow, onClose}){
    return shouldShow ? (<ModalWrapper>
        <Card className={'modal-card'}>
            <div className={'btn-close'} role={'button'} onClick={onClose}>X</div>
            <div className={'content'}>
                {children}
            </div>
        </Card>
    </ModalWrapper>):null;
}