import React, { SyntheticEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export type MenuItem = {
    label: string;
    icon?: IconProp;
    id: string;
    onClick: (e: SyntheticEvent) => void;
    isSelected?: boolean;
};
export type MenuCollection = {
    items: MenuItem[];
    label: string;
};
export type ItemType = Array<MenuItem | MenuCollection>;
interface ProfileData {
    name: string;
    avatarUrl?: string;
}
export interface TopNavigationProps {
    toggleShowSideNav: () => void;
    items?: ItemType;
    title?: string;
    profileData: ProfileData;
}
export declare const TopNavigation: React.FC<TopNavigationProps>;
export {};
