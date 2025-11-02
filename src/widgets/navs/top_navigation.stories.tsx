import React from 'react';

import { TopNavigation, TopNavigationProps } from './top_navigation';

export default {
  title: 'Widgets/Navs/TopNavigation',
  component: TopNavigation,
};

const Template = (args: TopNavigationProps) => <TopNavigation {...args} />;

const action = (name: string) => {
  return () => console.log(`${name} action triggered`);
}

export const Default = Template.bind({});
Default.args = {
  toggleShowSideNav: ()=>{},
  title: "My Application Sample",
  profileData: {
      name: 'John Doe',
  },
  items: [
    { id: 'home', label: 'Home', onClick: action('item-click-home') },
    { id: 'settings', label: 'Settings', onClick: action('item-click-settings') },
  ],
};

export const NoItems = Template.bind({});
NoItems.args = {
  toggleShowSideNav: action('toggleShowSideNav'),
  items: [],
};

