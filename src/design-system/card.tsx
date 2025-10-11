import styled from "styled-components";
import {COLORS, RADIUS, SHADOW} from "./theme.constants";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = styled.div<CardProps>`
    background-color: ${COLORS.card_background};
    padding: 10px;
    border-radius: ${RADIUS.medium};
    box-shadow: ${SHADOW.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    box-sizing: border-box;
`;
