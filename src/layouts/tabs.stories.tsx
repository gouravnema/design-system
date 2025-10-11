import React, { useState } from 'react';
import { Tabs } from './tabs';
import styled from 'styled-components';

const TabContentWrapper = styled.div`
  padding: 15px;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 8px 8px;
  background-color: #f9f9f9;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

export default {
  title: 'Layouts/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    onTabChange: { action: 'tab changed' },
    content: { control: 'object' },
  },
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState(args.initialActiveTab || 'tab1');

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
    args.onTabChange(tabValue); // Call the Storybook action
  };

  const currentContent = args.tabs.find(tab => tab.value === activeTab)?.content || 'No content for this tab.';

  return (
    <div style={{ width: '500px', height: '300px', border: '1px solid #ccc', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
      <Tabs
        {...args}
        tabs={args.tabs.map(tab => ({ ...tab, active: tab.value === activeTab }))}
        onTabChange={handleTabChange}
        content={<TabContentWrapper>{currentContent}</TabContentWrapper>}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  initialActiveTab: 'tab1',
  tabs: [
    { label: 'Tab 1', value: 'tab1', content: 'Content for Tab 1' },
    { label: 'Tab 2', value: 'tab2', content: 'Content for Tab 2' },
    { label: 'Tab 3', value: 'tab3', content: 'Content for Tab 3' },
  ],
};

export const WithLongerLabels = Template.bind({});
WithLongerLabels.args = {
  initialActiveTab: 'overview',
  tabs: [
    { label: 'Product Overview', value: 'overview', content: 'Detailed product overview information.' },
    { label: 'Technical Specifications', value: 'specs', content: 'Technical specifications and data sheets.' },
    { label: 'Customer Reviews', value: 'reviews', content: 'What customers are saying about the product.' },
  ],
};

export const DynamicContent = Template.bind({});
DynamicContent.args = {
  initialActiveTab: 'home',
  tabs: [
    { label: 'Home', value: 'home', content: <div>Welcome to the Home tab!</div> },
    { label: 'Profile', value: 'profile', content: <div>User profile details here.</div> },
    { label: 'Settings', value: 'settings', content: <div>Adjust your settings.</div> },
  ],
};
