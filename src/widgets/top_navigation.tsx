import React from 'react';
import styled from "styled-components";

const Navbar = styled.div``;
const NavbarBrand = styled.div``;
const NavbarToggler = styled.div``;
// const NavBar = styled.div``;

interface TopNavigationProps {
    toggleShowSideNav: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({toggleShowSideNav}) => {
    return (
        <Navbar>
            <NavbarBrand>
                <span/>
            </NavbarBrand>
            <NavbarToggler onClick={toggleShowSideNav}/>
        </Navbar>
    );
}
