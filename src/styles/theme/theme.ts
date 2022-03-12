import { IThemeMode } from '@context/theme-mode';
import { detectUserColorScheme } from '@utils/detect-user-color-scheme';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const baseColors = {
  grey: `#3d3d3d`,
  desert: `#de935f`,
  blue: `hsl(226, 23%, 11%)`,
  gold: { light: `#ebbe9e`, dark: `#c76a29` },
} as const;

const palettes = {
  light: {
    palette: {
      text: baseColors.grey,
      bg: baseColors.desert,
      link: baseColors.gold.light,
    },
  },
  dark: {
    palette: {
      text: baseColors.desert,
      bg: baseColors.blue,
      link: baseColors.gold.dark,
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
