import React from 'react';
import styled from "styled-components";
import {COLORS, RADIUS} from "../../theme.constants";

const Base = styled.span`
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
    color: ${COLORS.text_light};
    border: 1px solid ${COLORS.light_gray};
`
