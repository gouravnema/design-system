import styled from "styled-components";
import {COLORS, RADIUS, SHADOW} from "../../theme.constants.js";

export const Card = styled.div`
    background-color: ${COLORS.card_background};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: ${RADIUS.medium};
    box-shadow: ${SHADOW.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
    box-sizing: border-box;
`;