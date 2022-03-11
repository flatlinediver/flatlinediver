import React, { FC } from 'react';
import { useTheme } from 'styled-components';

export const IconLink: FC = () => {
  const { palette } = useTheme();
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 13 13"
      width="9"
      style={{ marginLeft: '.3rem', pointerEvents: `none` }}
    >
      <polyline
        points="6 1 12 1 12 7"
        fill="none"
        stroke={palette.link}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="1"
        y1="12"
        x2="12"
        y2="1"
        fill="none"
        stroke={palette.link}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
