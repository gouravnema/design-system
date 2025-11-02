import React from "react";
interface SideNavLink {
    order: number;
    active: boolean;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    to: string;
    icon: any;
    label: string;
}
interface SideNavProps {
    logo: React.ReactNode;
    links: {
        [key: string]: SideNavLink;
    };
}
export declare const SideNav: React.FC<SideNavProps>;
export {};
