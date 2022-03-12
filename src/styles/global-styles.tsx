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
    font-size: 1rem;
  }
  h1, h2, h3, p, ul, a, button {
    position: relative;
  }
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    margin: 2rem 0 2rem;
  }
  h3 {
    font-size: 1rem;
    margin: 1rem 0;
    font-style: italic;
    display: flex;
    align-items: center;
  }
  p {
    line-height: 1.5;
    margin: .3rem 0;
    max-width: 350px;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin: 0 1rem 0 0;
    display: flex;
    &:last-of-type: {
      margin: 0;
    }
  }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.palette.link};
    text-decoration: none;
    background-color: transparent;
    border-radius: .3rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  a:focus {
    border: none;
    outline-color: ${({ theme }) => theme.palette.link};
    &:before {
      display: none;
    }
  }
  button {
    background: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 30px;
    height: 30px;
    padding: 0.2rem;
    transition: ${({ theme }) => theme.transition(`transform`)};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.text};
    cursor: pointer;
  }
  button:focus {
    outline-color: ${({ theme }) => theme.palette.text};
    border-radius: .3rem;
  }
  button, a {
    border: none;
    outline-width: 1px;
    outline-style: solid;
    outline-offset: 3px;
    outline-color: transparent;
  }
  button:focus:not(:focus-visible), a:focus:not(:focus-visible) {
    outline-color: transparent;
  }
  a, button {
    :before {
      transition:${({ theme }) => theme.transition(`opacity`)};
      position: absolute;
      content: '';
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 120%;
      opacity: 0;
      background: ${({ theme }) => theme.palette.text};
      border-radius: 50%;
      z-index: -1;
    }
    &:hover {
      &:before {
        opacity: .2;
      }
    }
  }
  hr {
    opacity: .2;
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.palette.text};
  }
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
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
