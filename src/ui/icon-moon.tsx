import React, { FC } from 'react';
import { useTheme } from 'styled-components';

export const IconMoon: FC = () => {
  const { palette } = useTheme();
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z"
        fill={palette.text}
      />
    </svg>
  );
};
