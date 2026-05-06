import React from 'react';
import { Switch } from './switch';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 40px;
`;

const Wrapped = (props) => {
  return (
    <Wrapper>
      <Switch {...props} />
    </Wrapper>
  );
};

const meta = {
  component: Wrapped,
  title: 'Components/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultState: {
      control: 'boolean',
      description: 'Default State of Switch',
      defaultValue: false,
    },
    onChange: {
      action: 'changed',
      description: 'Callback to notify toggle of Switch',
    },
  },
};

export default meta;

export const Default = {
  args: {
    defaultState: false,
  },
};

export const Enabled = {
  args: {
    defaultState: true,
  },
};

export const WithOnChange = {
  args: {
    defaultState: false,
    onChange: (value: boolean) => console.log('Switch toggled to:', value),
  },
};
