import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme.constants';

export type SwitchProps = {
  defaultState?: boolean;
  onChange?: (value: boolean) => void;
};

const SwitchContainer = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 52px;
  height: 32px;
  padding: 2px;
  background-color: ${(props: any) => (props.isActive ? COLORS.green : COLORS.medium_gray)};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.1);
  }
`;

const SwitchToggle = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  left: 2px;

  ${SwitchContainer}[data-active='true'] & {
    transform: translateX(20px);
  }
`;

export const Switch = ({ defaultState = false, onChange }: SwitchProps) => {
  const [internalState, setInternalState] = React.useState(defaultState);

  const handleToggle = () => {
    const newState = !internalState;
    setInternalState(newState);
    onChange?.(newState);
  };

  return (
    <SwitchContainer
      data-active={internalState}
      onClick={handleToggle}
      role="switch"
      aria-checked={internalState}
      type="button"
    >
      <SwitchToggle />
    </SwitchContainer>
  );
};
