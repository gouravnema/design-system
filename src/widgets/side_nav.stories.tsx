import React, { useState } from 'react';
import { SideNav } from './side_nav';
import { faHome, faCog, faUser, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;
`;

const ContentArea = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export default {
  title: 'Widgets/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout to demonstrate the side navigation
  },
  tags: ['autodocs'],
  argTypes: {
    logo: { control: 'text' },
    links: { control: 'object' },
  },
};

const Template = (args:any) => {
  const [activeLink, setActiveLink] = useState(Object.values(args.links).find(link => link.active)?.value || 'home');

  const handleLinkClick = (linkValue) => {
    setActiveLink(linkValue);
    // In a real app, this would navigate or update content
    console.log(`Navigated to: ${linkValue}`);
  };

  const updatedLinks = Object.fromEntries(
    Object.entries(args.links).map(([key, link]) => [
      key,
      {
        ...link,
        active: link.value === activeLink,
        onClick: (e:any) => {
          e.preventDefault();
          handleLinkClick(link.value);
        },
      },
    ])
  );

  return (
    <StoryWrapper>
      <SideNav {...args} links={updatedLinks} />
      <ContentArea>
        <h2>Current Section: {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</h2>
        <p>Content for the {activeLink} section would go here.</p>
      </ContentArea>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  logo: 'My App',
  links: {
    home: { to: '#home', label: 'Home', icon: faHome, order: 1, value: 'home', active: true },
    profile: { to: '#profile', label: 'Profile', icon: faUser, order: 2, value: 'profile' },
    settings: { to: '#settings', label: 'Settings', icon: faCog, order: 3, value: 'settings' },
  },
  initialActiveLink: 'home',
};

export const WithMoreLinks = Template.bind({});
WithMoreLinks.args = {
  logo: 'Admin Dashboard',
  links: {
    dashboard: { to: '#dashboard', label: 'Dashboard', icon: faChartBar, order: 1, value: 'dashboard', active: true },
    users: { to: '#users', label: 'Users', icon: faUser, order: 2, value: 'users' },
    messages: { to: '#messages', label: 'Messages', icon: faEnvelope, order: 3, value: 'messages' },
    settings: { to: '#settings', label: 'Settings', icon: faCog, order: 4, value: 'settings' },
  },
  initialActiveLink: 'dashboard',
};

export const NoLogo = Template.bind({});
NoLogo.args = {
  links: {
    home: { to: '#home', label: 'Home', icon: faHome, order: 1, value: 'home', active: true },
    profile: { to: '#profile', label: 'Profile', icon: faUser, order: 2, value: 'profile' },
  },
  initialActiveLink: 'home',
};
