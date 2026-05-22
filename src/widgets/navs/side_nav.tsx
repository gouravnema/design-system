import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {COLORS, SHADOW} from "../../theme";
import ClassName from "classnames";

const Wrapper = styled.aside`
    min-width: 250px;
    background-color: ${COLORS.base};
    box-shadow: ${SHADOW.medium};
    padding: 20px 0;
    border-right: none;
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 900;
`;

const Body = styled.div`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: list-item;
            text-align: -webkit-match-parent;
            unicode-bidi: isolate;
        }

        a {
            text-decoration: none;
            color: ${COLORS.text_dark};
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0 10px;

            &:hover {
                background-color: ${COLORS.baseLight};
                box-shadow: ${SHADOW.light};
            }

            &.active {
                background-color: ${COLORS.blue};
                color: white;
                box-shadow: ${SHADOW.medium};
            }
        }
    }
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`;


export interface SideNavLink {
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

export const SideNav: React.FC<SideNavProps> = ({links}) => {
    return <Wrapper>
        <Header></Header>
        <Body>
            <ul>
                {Object.entries(links).sort((a, b) => a[1].order - b[1].order).map(([key, link]) => (
                    <li key={key}>
                        <a
                            href={link.to}
                            style={{display: 'flex', alignItems: 'center', padding: '10px 20px'}}
                            className={ClassName({active: link.active})} onClick={link.onClick}
                        >
                            <FontAwesomeIcon icon={link.icon} style={{marginRight: '10px'}}/>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </Body>
    </Wrapper>

}
