import React from 'react';
import { H1, H4 } from './heading';

export default {
  title: 'Typography/Headings',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Heading1 = {
  render: (args) => <H1 {...args} />,
  args: {
    children: 'This is an H1 Heading',
  },
};

export const Heading4 = {
  render: (args) => <H4 {...args} />,
  args: {
    children: 'This is an H4 Heading',
  },
};

export const CustomText = {
  render: (args) => (
    <>
      <H1>Custom H1: {args.h1Text}</H1>
      <H4>Custom H4: {args.h4Text}</H4>
    </>
  ),
  args: {
    h1Text: 'My Custom Title',
    h4Text: 'My Custom Subtitle',
  },
  argTypes: {
    h1Text: { control: 'text' },
    h4Text: { control: 'text' },
  },
};
