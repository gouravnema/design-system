import React from 'react';
import { PrimaryPill, SecondaryPill, TransparentPill } from './pills';

export default {
  title: 'Components/Pills',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  render: (args) => <PrimaryPill {...args} />,
  args: {
    label: 'Status',
    children: 'Active',
  },
};

export const Secondary = {
  render: (args) => <SecondaryPill {...args} />,
  args: {
    label: 'Category',
    children: 'Marketing',
  },
};

export const Transparent = {
  render: (args) => <TransparentPill {...args} />,
  args: {
    label: 'Tag',
    children: 'New Feature',
  },
};

export const WithLongContent = {
  render: (args) => <PrimaryPill {...args} />,
  args: {
    label: 'Description',
    children: 'This is a very long piece of content that should be displayed within the pill.',
  },
};
