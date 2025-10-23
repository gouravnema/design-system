import styled from "styled-components";

export interface CenteredProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Centered =  styled.div<CenteredProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
