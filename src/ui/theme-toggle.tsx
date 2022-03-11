import React, { FC } from 'react';
import { useThemeMode } from '@context/theme-mode';
import styled from 'styled-components';
import { IconSun } from '@ui/icon-sun';
import { IconMoon } from '@ui/icon-moon';

const Wrapper = styled.button`
  background: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 30px;
  height: 30px;
  padding: 0.2rem;
  transition: ${({ theme }) => theme.transition(`transform`)};
  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;
const VisuallyHidden = styled.b`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`;

export const ThemeToggle: FC = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <Wrapper
      onClick={() => toggleMode()}
      aria-label="Dark mode"
      role="switch"
      aria-checked={mode === 'dark'}
    >
      <VisuallyHidden>{mode === `light` ? `dark mode` : `Light mode`}</VisuallyHidden>
      {mode === `light` ? <IconSun /> : <IconMoon />}
    </Wrapper>
  );
};
