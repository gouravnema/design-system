import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmButton } from './confirm_button';
import { PrimaryButton, SecondaryButton } from './buttons';

const meta = {
  title: 'Components/Buttons/ConfirmButton',
  component: ConfirmButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ConfirmButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Delete Item',
    confirmTitle: 'Delete Confirmation',
    confirmText: 'Are you sure you want to delete this item? This action cannot be undone.',
    onConfirm: () => alert('Item deleted!'),
    onCancel: () => alert('Delete cancelled'),
  },
};

export const WithSecondaryButton: Story = {
  args: {
    label: 'Remove',
    ButtonComponent: SecondaryButton,
    confirmTitle: 'Remove Item',
    confirmText: 'This will remove the item from your list.',
    onConfirm: () => alert('Item removed!'),
    onCancel: () => alert('Action cancelled'),
  },
};

export const WithPrimaryButton: Story = {
  args: {
    label: 'Submit',
    ButtonComponent: PrimaryButton,
    confirmTitle: 'Submit Confirmation',
    confirmText: 'Are you sure you want to submit this form?',
    onConfirm: () => alert('Form submitted!'),
    onCancel: () => alert('Submission cancelled'),
  },
};

export const CustomMessages: Story = {
  args: {
    label: 'Logout',
    confirmTitle: 'Logout?',
    confirmText: 'You will be logged out. Any unsaved data will be lost.',
    onConfirm: () => alert('Logged out!'),
    onCancel: () => alert('Logout cancelled'),
  },
};

export const WithCustomCallbacks: Story = {
  args: {
    label: 'Dangerous Action',
    confirmTitle: 'Warning',
    confirmText: 'This action cannot be reversed. Please confirm.',
    onConfirm: (e) => {
      console.log('Confirmed:', e);
      alert('Action performed!');
    },
    onCancel: (e) => {
      console.log('Cancelled:', e);
      alert('Action cancelled');
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h3>Secondary Button (Default)</h3>
        <ConfirmButton
          label="Delete"
          confirmTitle="Delete Item?"
          confirmText="Are you sure?"
          onConfirm={() => alert('Deleted')}
        />
      </div>
      <div>
        <h3>Primary Button</h3>
        <ConfirmButton
          label="Submit"
          ButtonComponent={PrimaryButton}
          confirmTitle="Submit?"
          confirmText="Submit this form?"
          onConfirm={() => alert('Submitted')}
        />
      </div>
    </div>
  ),
};
