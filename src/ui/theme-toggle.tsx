import React, { FC } from 'react';
import { useThemeMode } from '@context/theme-mode';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

export const ThemeToggle: FC = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <button
      onClick={() => toggleMode()}
      aria-label="Dark mode"
      role="switch"
      aria-checked={mode === 'dark'}
    >
      <b className="visually-hidden">{mode === `light` ? `dark mode` : `Light mode`}</b>
      {mode === `light` ? <RiSunFill /> : <RiMoonFill />}
    </button>
  );
};
