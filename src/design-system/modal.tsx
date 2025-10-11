import React from 'react';
import styled from "styled-components";
import {Card} from "./card";
import {COLORS, ZINDEX} from "./theme.constants";

interface ModalWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalWrapper = styled.div<ModalWrapperProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: ${COLORS.background};
    overflow: auto;
    z-index: ${ZINDEX.modal};
    top: 0;
    left: 0;
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



interface ModalProps {
    children: React.ReactNode;
    shouldShow: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({children, shouldShow, onClose}) => {
    return shouldShow ? (<ModalWrapper data-qa={"ModalWrapper Cer"}>
        <Card className={'modal-card'}>
            <div className={'btn-close'} role={'button'} onClick={onClose}>X</div>
            <div className={'content'}>
                {children}
            </div>
        </Card>
    </ModalWrapper>):null;
}
