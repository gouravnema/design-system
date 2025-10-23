import React from 'react';
import { TopNavigation } from './top_navigation';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: #f0f2f5;
  border-bottom: 1px solid #ccc;
`;

export default {
  title: 'Widgets/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout for top navigation
  },
  tags: ['autodocs'],
  argTypes: {
    toggleShowSideNav: { action: 'toggle side nav' },
  },
};

export const Default = {
  render: (args:any) => (
    <StoryWrapper>
      <TopNavigation {...args} />
    </StoryWrapper>
  ),
  args: {
    toggleShowSideNav: () => console.log('Toggle side nav clicked'),
  },
};

export const WithCustomBrand = {
  render: (args:any) => (
    <StoryWrapper>
      <TopNavigation {...args} />
    </StoryWrapper>
  ),
  args: {
    toggleShowSideNav: () => console.log('Toggle side nav clicked'),
    // Assuming NavbarBrand can take children or a prop for custom content
    // This might require modifying the TopNavigation component itself if not already supported
    // For now, we'll simulate it or assume a default brand is rendered.
  },
};
