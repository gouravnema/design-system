import React from 'react';
import styled from "styled-components";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}
const Navbar = styled.div<NavbarProps>``;

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}
const NavbarBrand = styled.div<NavbarBrandProps>``;

interface NavbarTogglerProps extends React.HTMLAttributes<HTMLDivElement> {}
const NavbarToggler = styled.div<NavbarTogglerProps>``;
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
