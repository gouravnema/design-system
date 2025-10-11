import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {COLORS, SHADOW} from "./theme.constants";
import ClassName from "classnames";
import {Link} from "react-router-dom";

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {}

const Wrapper = styled.aside<WrapperProps>`
    min-width: 250px;
    background-color: ${COLORS.card_background};
    box-shadow: ${SHADOW.medium};
    padding: 20px 0;
    border-right: 1px solid ${COLORS.light_gray};
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
`;

interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const Body = styled.div<BodyProps>`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        

        li {
            max-width: 250px;
            display: list-item;
            text-align: -webkit-match-parent;
            unicode-bidi: isolate;
            a{
                img{
                    width: 100%;
                }
            }
        }

        a {
            text-decoration: none;
            color: ${COLORS.text_dark};
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: ${COLORS.light_gray};
            }

            &.active {
                background-color: ${COLORS.blue};
                color: white;
                box-shadow: ${SHADOW.light};
            }
        }
    }
`

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = styled.div<HeaderProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`;


interface SideNavLink {
    order: number;
    active: boolean;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    to: string;
    icon: any; // FontAwesomeIcon expects a specific type for icon, but 'any' is a quick fix for now.
    label: string;
}

interface SideNavProps {
    logo: React.ReactNode;
    links: { [key: string]: SideNavLink };
}

export const SideNav: React.FC<SideNavProps> = ({logo, links}) => {
    return <Wrapper>
        <Header></Header>
        <Body>
            <ul>
                <li>
                    {logo}
                </li>
                {Object.entries(links).sort((a, b) => a[1].order - b[1].order).map(([key, link]) => (
                    <li key={key}>
                        <Link
                            style={{display: 'flex', alignItems: 'center', padding: '10px 20px'}}
                            className={ClassName({active: link.active})} onClick={link.onClick}
                            to={link.to}
                        >
                            <FontAwesomeIcon icon={link.icon} style={{marginRight: '10px'}}/>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </Body>
    </Wrapper>

}
