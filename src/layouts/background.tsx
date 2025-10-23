import styled from 'styled-components';
import {COLORS, TYPOGRAPHGY} from "../theme.constants";

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Background = styled.div<BackgroundProps>`
    background: ${COLORS.background};
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: ${TYPOGRAPHGY.font_family};
    font-weight: ${TYPOGRAPHGY.font_weight};
`;
