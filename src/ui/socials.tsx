import React, { FC } from 'react';
import { TagPrefix } from '@ui/tag-prefix';
import { RiGithubFill, RiH2, RiListUnordered, RiMailOpenFill, RiTwitterFill } from 'react-icons/ri';
import { Link } from '@ui/custom-link';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  li {
    list-style: none;
    margin: 0 1rem 0 0;
    display: flex;
    &:last-of-type: {
      margin: 0;
    }
  }
`;

export const Socials: FC = () => (
  <section>
    <h2>
      <TagPrefix>
        <RiH2 />
      </TagPrefix>
      You can reach me on...
    </h2>
    <List>
      <TagPrefix>
        <RiListUnordered />
      </TagPrefix>
      <li>
        <Link asButton external href={`https://twitter.com/flatlinediver`} label={`Twitter`}>
          <RiTwitterFill aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link asButton external href={`http://github.com/flatlinediver`} label={`Github`}>
          <RiGithubFill aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link asButton external href={`mailto:contact@flatlinediver.com`} label={`Mail`}>
          <RiMailOpenFill aria-hidden="true" />
        </Link>
      </li>
    </List>
  </section>
);
