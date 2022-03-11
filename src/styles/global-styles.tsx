import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    transition:${({ theme }) => theme.transition(`background-color`)};
    color: ${({ theme }) => theme.palette.text};
    background-color: ${({ theme }) => theme.palette.bg};
    font-family: 'Poppins';
    font-size: 1.2rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    margin: 2rem 0 .5rem;
  }
  h3 {
    font-size: 1rem;
    margin: 1rem 0;
  }
  p {
    line-height: 1.5;
    margin: .3rem 0;
    max-width: 400px;
  }
  a{
    color: ${({ theme }) => theme.palette.link};
    margin: 0 0 0 .3rem;
    text-decoration: none;
    position: relative;
    background-color: transparent;
    transition:${({ theme }) => theme.transition(`background-color`, `200ms`)};
    border-radius: .3rem;
    svg {
      transition:${({ theme }) => theme.transition(`transform`, `200ms`)};
      outline: none;  
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: calc(100% + .2rem);
      background-color: ${({ theme }) => theme.palette.link};
    }
    &:hover {
      svg {
        transform: translateX(-.2rem);
      }
      background-color: ${({ theme }) => theme.palette.link}1A;
    }
  }
  a:hover, button:hover {
    cursor: pointer;
  }
  button, textarea, a {
    border: none;
    outline-width: 1px;
    outline-style: solid;
    outline-offset: 3px;
    outline-color: transparent;
  }
  button:focus {
    outline-color: ${({ theme }) => theme.palette.text};
    border-radius: .3rem;
  }
  a:focus {
    &:before {
      display: none;
    }
    border: none;
    outline-color: ${({ theme }) => theme.palette.link};
  }
  button:focus:not(:focus-visible), a:focus:not(:focus-visible) {
    outline-color: transparent;
  }
  dt {
    margin-right: .3rem;
  }
  dt, dd {
    display: inline;
    font-size: 1rem;
  }
  dl div {
    margin: .5rem 0;
  }
  hr {
    margin: 1.5rem 0;
    opacity: .2;
  }
  .wrapper {
    display: flex;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    position: relative;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

`;

export const GlobalStyles: FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
