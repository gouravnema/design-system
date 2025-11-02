import styled from 'styled-components';
import { COLORS } from '../../theme.constants';

type NavbarBrandProps = {
    logo: string;
    title?: string;
}

export const NavbarBrand = styled.div<NavbarBrandProps>`
    position: relative;
    padding: 5px 10px;
    margin: 5px 10px;
    &::before{
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        background-image: url(${p=>p.logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        margin-right: 10px;
    }

    &::after {
        content: "${p=>p.title}";
        font-size: 1.5rem;
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
        color: ${COLORS.blue};
    }
`;