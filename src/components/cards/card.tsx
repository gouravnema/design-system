import styled from "styled-components";
import {COLORS, RADIUS, SHADOW, SIZES} from "../../theme";

export const Card = styled.div`
    background-color: ${COLORS.base};
    padding: ${SIZES.lg};
    border-radius: ${RADIUS.medium};
    box-shadow: ${SHADOW.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${SHADOW.large};
    }
`;
