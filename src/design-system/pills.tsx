import React from 'react';
import styled from "styled-components";
import {COLORS, RADIUS} from "./theme.constants";

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Base = styled.span<BaseProps>`
    padding: 5px;
    border-radius: ${RADIUS.small};
`;
interface PillsProps extends React.HTMLAttributes<HTMLSpanElement> {
    label: string;
    children: React.ReactNode;
}

const Pills: React.FC<PillsProps> = ({label, children, ...rest}) => {
    return <Base {...rest} > {label} :  <em>{children}</em></Base>;
}

export const PrimaryPill = styled(Pills)`
    background: ${COLORS.blue};
    color: white;
`

export const SecondaryPill = styled(Pills)`
    background: ${COLORS.medium_gray};
    color: ${COLORS.text_dark};
`
export const TransparentPill = styled(Pills)`
    color: ${props=> (props.color || COLORS.text_dark)};
    border: 1px solid ${props=> (props.color || COLORS.light_gray)};
`
