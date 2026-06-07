import React from 'react';
import styled from 'styled-components';
import { COLORS, SHADOW } from '../../theme';

export type SwitchProps = {
  defaultState?: boolean;
  onChange?: (value: boolean) => void;
};

interface SwitchContainerProps {
  isActive?: boolean | undefined;
  'data-active'?: boolean | undefined;
}

const SwitchContainer = styled.button<SwitchContainerProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${(props: any) => (props.isActive ? COLORS.green : COLORS.base)};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${(props: any) => (props.isActive ? SHADOW.medium : SHADOW.insetLight)};

    &:hover {
        box-shadow: ${(props: any) => (props.isActive ? SHADOW.large : SHADOW.insetMedium)};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`;

const SwitchToggle = styled.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${COLORS.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${SHADOW.medium};
    left: 0;
    top: 0;

    ${SwitchContainer}[data-active='true'] & {
        transform: translateX(80%);
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
      isActive={internalState}
    >
      <SwitchToggle />
    </SwitchContainer>
  );
};
