import styled from "styled-components";
import {COLORS, RADIUS} from "../../theme.constants";

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
`;


export const BlueOutlineButton = styled(Buttons)`
    border: 1px solid blue;
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
