import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import ClassName from "classnames";

import { COLORS, SHADOW, VIEWPORT } from "../../theme";

const DesktopWrapper = styled.aside`
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

    @media (max-width: ${VIEWPORT.mobile}) {
        display: none;
    }
`;

const Body = styled.div`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: list-item;
        }

        a {
            text-decoration: none;
            color: ${COLORS.text_dark};
            display: flex;
            align-items: center;
            padding: 12px 20px;
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
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`;

const MobileDrawerWrapper = styled.div`
    display: none;

    @media (max-width: ${VIEWPORT.mobile}) {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1200;
    }
`;

const DrawerHandle = styled.button`
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;

    .handle {
        width: 74px;
        height: 34px;
        border-radius: 18px 18px 0 0;
        background: ${COLORS.base};
        box-shadow: ${SHADOW.medium};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const DrawerBody = styled.div<{ open: boolean }>`
    background: ${COLORS.base};
    box-shadow: ${SHADOW.medium};
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    transition: all 0.3s ease;

    max-height: ${({ open }) => (open ? "420px" : "0px")};

    ul {
        list-style: none;
        padding: 10px 0 20px;
        margin: 0;
    }

    li {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${COLORS.text_dark};
        display: flex;
        align-items: center;
        padding: 16px 20px;
        transition: all 0.2s ease;

        &:hover {
            background: ${COLORS.baseLight};
        }

        &.active {
            background-color: ${COLORS.blue};
            color: white;
        }
    }
`;

export interface SideNavLink {
    order: number;
    active: boolean;
    onClick: (
      event: React.MouseEvent<HTMLAnchorElement>
    ) => void;
    to: string;
    icon: any;
    label: string;
}

interface SideNavProps {
    logo?: React.ReactNode;
    links: { [key: string]: SideNavLink };
}

export const SideNav: React.FC<SideNavProps> = ({
                                                    logo,
                                                    links,
                                                }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const sortedLinks = Object.entries(links).sort(
      (a, b) => a[1].order - b[1].order
    );

    return (
      <>
          {/* Desktop Sidebar */}
          <DesktopWrapper className="side-nav">
              <Header>{logo}</Header>

              <Body>
                  <ul>
                      {sortedLinks.map(([key, link]) => (
                        <li key={key}>
                            <a
                              href={link.to}
                              className={ClassName({
                                  active: link.active,
                              })}
                              onClick={link.onClick}
                            >
                                <FontAwesomeIcon
                                  icon={link.icon}
                                  style={{
                                      marginRight: "10px",
                                  }}
                                />

                                {link.label}
                            </a>
                        </li>
                      ))}
                  </ul>
              </Body>
          </DesktopWrapper>

          {/* Mobile Bottom Drawer */}
          <MobileDrawerWrapper>
              <DrawerHandle
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
              >
                  <div className="handle">
                      <FontAwesomeIcon
                        icon={
                            mobileOpen
                              ? faChevronDown
                              : faChevronUp
                        }
                      />
                  </div>
              </DrawerHandle>

              <DrawerBody open={mobileOpen}>
                  <ul>
                      {sortedLinks.map(([key, link]) => (
                        <li key={key}>
                            <a
                              href={link.to}
                              className={ClassName({
                                  active: link.active,
                              })}
                              onClick={(e) => {
                                  link.onClick(e);
                                  setMobileOpen(false);
                              }}
                            >
                                <FontAwesomeIcon
                                  icon={link.icon}
                                  style={{
                                      marginRight: "10px",
                                  }}
                                />

                                {link.label}
                            </a>
                        </li>
                      ))}
                  </ul>
              </DrawerBody>
          </MobileDrawerWrapper>
      </>
    );
};