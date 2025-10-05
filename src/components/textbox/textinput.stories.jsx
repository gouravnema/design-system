import React from 'react';
import { TextInput } from './textinput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
  },
};

export const Password = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const Email = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithValue = {
  args: {
    label: 'Pre-filled Value',
    value: 'example@email.com',
    type: 'email',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const ReadOnly = {
  args: {
    label: 'Read-Only Input',
    value: 'This value cannot be changed',
    readOnly: true,
  },
};
