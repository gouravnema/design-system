import React from 'react';
import styled from "styled-components";
import {Card} from "../../components/cards/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { COLORS, SHADOW } from '../../theme.constants';
import {VIEWPORT } from '../../theme';

const ModalWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);

    .modal-card {
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        @media (max-width: ${VIEWPORT.mobile}) {
            max-width: 100vw;
            height: 100vh;
            border-radius: 0;
        }

        .close {
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 50%;
            align-self: flex-end;
            background: ${COLORS.base};
            color: ${COLORS.text_dark};
            transition: all 0.3s ease;

            &:hover {
                box-shadow: ${SHADOW.medium};
            }

            &:active {
                box-shadow: ${SHADOW.insetLight};
            }
        }

        .content {
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
            <div className={'close'} role={'button'} onClick={onClose}>
                <FontAwesomeIcon icon={faClose}/>
            </div>
            <div className={'content'}>
                {children}
            </div>
        </Card>
    </ModalWrapper>):null;
}
