import { IThemeMode } from '@context/theme-mode';
import { detectUserColorScheme } from '@utils/detect-user-color-scheme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const baseColors = {
  grey: {
    dark: `#1d1d1d`,
    light: `hsl(0, 0%, 100%)`,
  },
  blue: {
    dark: `hsl(226, 23%, 11%)`,
    light: `#2b79a2`,
  },
  orange: `#de935f`,
} as const;

const palettes = {
  light: {
    palette: {
      text: baseColors.grey.dark,
      bg: baseColors.grey.light,
      link: baseColors.blue.light,
    },
  },
  dark: {
    palette: {
      text: baseColors.grey.light,
      bg: baseColors.blue.dark,
      link: baseColors.orange,
    },
  },
};

interface IPalette {
  text: string;
  bg: string;
  link: string;
}

interface ThemeReturnType {
  mode: IThemeMode['mode'];
  palette: IPalette;
  baseColors: typeof baseColors;
  transition: (p: string, t?: string) => string;
}

export const theme = (mode: IThemeMode['mode'] = detectUserColorScheme()): ThemeReturnType => ({
  ...palettes[mode],
  mode,
  baseColors,
  transition: (p, t) => `${p} cubic-bezier(0, 0, 0.2, 1) ${t ?? `600ms`}`,
});

export const useTheme = () => useContext(ThemeContext);
