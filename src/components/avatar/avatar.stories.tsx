// co pilot generated this file
import React from 'react';
import { Avatar, AvatarProps } from './avatar';
export default {
  title: 'Components/Avatar',
  component: Avatar,
};
const Template = (args: AvatarProps) => <Avatar {...args} />;
export const Default = Template.bind({});
Default.args = {
  size: 40,
  src: 'https://via.placeholder.com/40',
  alt: 'User Avatar',
};
export const NoImg = Template.bind({});
NoImg.args = {
  size: 40,
  alt: 'User Avatar',
};