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
    text: _baseColors.grey.light,
    bg: _baseColors.desert.light,
    link: _baseColors.desert.dark,
  },
  dark: {
    text: _baseColors.desert.default,
    bg: _baseColors.grey.dark,
    link: _baseColors.desert.dark,
  },
} as const;
