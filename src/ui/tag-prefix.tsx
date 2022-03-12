import React, { FC } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  position: absolute;
  top: 0;
  right: calc(100% + 0.5rem);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.text};
  opacity: 0.75;
`;

export const TagPrefix: FC = ({ children }) => {
  return <Span aria-hidden="true">{children}</Span>;
};
