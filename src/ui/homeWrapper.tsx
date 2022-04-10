import React, { FC } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  width: 100vw;
  max-width: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0;
  h1,
  h2,
  p,
  ul,
  a,
  button,
  main,
  footer {
    position: relative;
  }
`;

export const HomeWrapper: FC = ({ children }) => (
  <Main>{children}</Main>
);
