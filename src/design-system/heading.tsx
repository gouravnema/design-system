import styled from "styled-components";
import {COLORS} from "./theme.constants";

import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H1 = styled.h1<HeadingProps>`
    color: ${COLORS.blue};
`

export const H4 = styled.h4<HeadingProps>`
    color: ${COLORS.blue};
    text-align: left;
`
