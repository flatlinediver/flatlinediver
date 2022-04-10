import React, { FC } from 'react';
import {
  RiH1,
  RiH2,
  RiListUnordered,
  RiParagraph,
} from 'react-icons/ri';
import styled from 'styled-components';

const Span = styled.span<{ offset?: string }>`
  position: absolute;
  top: 0;
  right: calc(100% + 0.5rem);
  transform: ${({ offset }) => `translateX(${offset ?? 0})`};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.text};
  opacity: 0.75;
  @media (max-width: 24rem) {
    right: calc(100% - 0.5rem);
  }
  @media (max-width: 375px) {
    right: calc(100% - 0.8rem);
  }
`;

const tags = {
  h1: RiH1,
  h2: RiH2,
  ul: RiListUnordered,
  p: RiParagraph,
};

export const TagPrefix: FC<{
  offset?: string;
  tag: keyof typeof tags;
}> = ({ offset, tag }) => {
  const Tag = tags[tag];
  return (
    <Span offset={offset} aria-hidden="true">
      <Tag />
    </Span>
  );
};
