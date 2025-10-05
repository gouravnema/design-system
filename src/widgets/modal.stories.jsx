import React, { useState } from 'react';
import { Modal } from './modal';
import { PrimaryButton } from '../components/buttons/buttons';
import styled from 'styled-components';

const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
  color: #333;
`;

export default {
  title: 'Widgets/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout to demonstrate modal overlay
  },
  tags: ['autodocs'],
  argTypes: {
    shouldShow: { control: 'boolean' },
    onClose: { action: 'closed' },
    children: { control: 'object' },
  },
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(args.shouldShow);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    args.onClose(); // Call the Storybook action
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <PrimaryButton onClick={handleOpen}>Open Modal</PrimaryButton>
      <Modal {...args} shouldShow={showModal} onClose={handleClose}>
        {args.children}
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  shouldShow: false,
  children: <ModalContent>This is the default modal content.</ModalContent>,
};

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
  shouldShow: false,
  children: (
    <ModalContent>
      <h2>Modal Title</h2>
      <p>This modal contains a title and some descriptive text.</p>
      <PrimaryButton onClick={() => alert('Action performed!')}>Perform Action</PrimaryButton>
    </ModalContent>
  ),
};

export const LargeContent = Template.bind({});
LargeContent.args = {
  shouldShow: false,
  children: (
    <ModalContent style={{ maxWidth: '600px' }}>
      <h2>Longer Modal Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Another paragraph of content to demonstrate how the modal handles more text.
      </p>
    </ModalContent>
  ),
};
