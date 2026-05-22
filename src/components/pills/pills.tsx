import React from 'react';
import styled from "styled-components";
import {COLORS, RADIUS, SHADOW} from "../../theme.constants";

const Base = styled.span`
    padding: 8px 12px;
    border-radius: ${RADIUS.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
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
    box-shadow: ${SHADOW.light};

    &:hover {
        box-shadow: ${SHADOW.medium};
    }
`

export const SecondaryPill = styled(Pills)`
    background: ${COLORS.base};
    color: ${COLORS.text_dark};
    box-shadow: ${SHADOW.light};

    &:hover {
        box-shadow: ${SHADOW.medium};
    }
`
export const TransparentPill = styled(Pills)`
    color: ${COLORS.text_light};
    background: ${COLORS.baseLight};
    box-shadow: ${SHADOW.light};

    &:hover {
        box-shadow: ${SHADOW.medium};
    }
`
