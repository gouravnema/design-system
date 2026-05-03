import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Buttons,
  RedOutlineButton,
  BlueOutlineButton,
  PrimaryButton,
  SecondaryButton,
  TimerPlayButton,
  TimerPauseButton,
  TimerDoneButton,
} from './buttons';

const meta = {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <Buttons>Click me</Buttons>,
};

export const Primary: Story = {
  render: () => <PrimaryButton>Primary Button</PrimaryButton>,
};

export const Secondary: Story = {
  render: () => <SecondaryButton>Secondary Button</SecondaryButton>,
};

export const RedOutline: Story = {
  render: () => <RedOutlineButton>Red Outline</RedOutlineButton>,
};

export const BlueOutline: Story = {
  render: () => <BlueOutlineButton>Blue Outline</BlueOutlineButton>,
};

export const TimerButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <TimerPlayButton />
      <TimerPauseButton />
      <TimerDoneButton />
    </div>
  ),
};

export const AllButtonStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <h3>Buttons</h3>
        <Buttons>Default Button</Buttons>
      </div>
      <div>
        <h3>Primary Button</h3>
        <PrimaryButton>Primary</PrimaryButton>
      </div>
      <div>
        <h3>Secondary Button</h3>
        <SecondaryButton>Secondary</SecondaryButton>
      </div>
      <div>
        <h3>Outline Buttons</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <RedOutlineButton>Red</RedOutlineButton>
          <BlueOutlineButton>Blue</BlueOutlineButton>
        </div>
      </div>
      <div>
        <h3>Timer Buttons (Round)</h3>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <TimerPlayButton />
          <TimerPauseButton />
          <TimerDoneButton />
        </div>
      </div>
    </div>
  ),
};

export const WithOnClick: Story = {
  render: () => (
    <PrimaryButton onClick={() => alert('Button clicked!')}>
      Click me!
    </PrimaryButton>
  ),
};
