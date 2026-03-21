import React from "react";
interface TabItem {
    label: string;
    value: string;
    active: boolean;
}
interface TabsProps {
    tabs: TabItem[];
    onTabChange: (value: string) => void;
    content: React.ReactNode;
}
export declare const Tabs: React.FC<TabsProps>;
export {};
