import React from "react";
import styled from "styled-components";
import {PrimaryButton, SecondaryButton} from "./buttons";

const TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    margin: 10px;
    width: calc(100% - 20px);
    .tabs {
        padding: 5px;
        display: flex;
        gap:15px;
        button {
            width: 150px;
        }
    }
    .tab-content{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap:5px;
        overflow-y: scroll;
    }
`;

export const Tabs = ({tabs, onTabChange, content}) => {
    const tabStops = tabs.map(tab => {
        const tabClickHandler = e => {
            e.preventDefault();
            e.stopPropagation();
            onTabChange(tab.value);
        };
        return (tab.active ? <PrimaryButton onClick={tabClickHandler}>{tab.label}</PrimaryButton> :
            <SecondaryButton onClick={tabClickHandler}>{tab.label}</SecondaryButton>);
    });
    return <TabWrapper>
        <div className={'tabs'}>
            {tabStops}
        </div>
        <div className={'tab-content'}>
            {content}
        </div>
    </TabWrapper>
}