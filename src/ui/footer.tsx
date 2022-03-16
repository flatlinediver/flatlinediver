import React, { FC } from 'react';
import styled from 'styled-components';
import { TagPrefix } from '@ui/tag-prefix';
import { CgRowLast } from 'react-icons/cg';
import { BiCheckDouble } from 'react-icons/bi';

const StyledFooter = styled.footer`
  font-size: 0.8rem;
  width: 100vw;
  max-width: 330px;
  margin: 0 0 1.3rem;
  font-style: italic;
`;

export const Footer: FC = () => (
  <StyledFooter>
    <TagPrefix offset={`.2rem`}>
      <CgRowLast size={18} />
    </TagPrefix>
    <span>See you there</span>
    <BiCheckDouble aria-hidden="true" style={{ marginLeft: `.5rem` }} />
  </StyledFooter>
);
