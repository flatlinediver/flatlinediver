import React, { FC } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 0.8rem;
  a {
    font-size: 0.8rem;
    display: inline;
    padding: 0;
  }
`;

export const LastNote: FC = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};
