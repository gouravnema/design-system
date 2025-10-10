import React from 'react';
import {PrimaryButton, SecondaryButton} from "./buttons";
import {Modal} from "./modal";
import styled from "styled-components";

const ModalContent = styled.div`
    padding:10px;
    display: flex;
    flex-direction: column;
    p.description{
        margin: 10px 0;
    }
    div.confirm-actions{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
    }
`;

export const ConfirmButton = ({
                                  onConfirm = () => {
                                  },
                                  onCancel = () => {
                                  },
                                  label = "",
                                  confirmText = "Are you sure?",
                                  confirmTitle = "Confirmation?",
                                  ButtonComponent = SecondaryButton,
                                  ...rest
                              }) => {
    const [toggle, setToggle] = React.useState(false);
    const ConfirmModal = <Modal
        onClose={() => setToggle(false)}
        shouldShow={toggle}
    >
        <ModalContent className="confirm-modal">
            <h3>{confirmTitle}</h3>
            <p className={'description'}>{confirmText}</p>
            <div className="confirm-actions">
                <SecondaryButton onClick={e => {
                    setToggle(false);
                    onCancel(e);
                }}>Cancel</SecondaryButton>
                <PrimaryButton onClick={e => {
                    setToggle(false);
                    onConfirm(e);
                }}>Confirm</PrimaryButton>
            </div>
        </ModalContent>
    </Modal>;

    const ConfirmButton = <ButtonComponent {...rest} onClick={e => {
        e.preventDefault();
        setToggle(true);
    }}>{label}</ButtonComponent>;

    return <>
        {toggle ? ConfirmModal : ConfirmButton}
    </>;
}