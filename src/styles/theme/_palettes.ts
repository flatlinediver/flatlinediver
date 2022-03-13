import { IThemeMode } from '@context/theme-mode';
import _baseColors from './_base-colors.json';

export const _palettes: Record<
  IThemeMode['mode'],
  {
    text: string;
    bg: string;
    link: string;
  }
> = {
  light: {
    text: _baseColors.grey[300],
    bg: _baseColors.grey[100],
    link: _baseColors.accent,
  },
  dark: {
    text: _baseColors.grey[200],
    bg: _baseColors.grey[400],
    link: _baseColors.accent,
  },
} as const;
