import React from 'react';
import { ThemeToggle } from '@ui/theme-toggle';
import { CustomLink } from '@ui/custom-link';
import {
  RiTwitterFill,
  RiGithubFill,
  RiMailOpenFill,
  RiH1,
  RiH2,
  RiH3,
  RiParagraph,
  RiListUnordered,
} from 'react-icons/ri';
import styled from 'styled-components';
import { TagPrefix } from '@ui/tag-prefix';

const PageWrapper = styled.main`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
  position: relative;
`;

const Home = () => (
  <PageWrapper>
    <ThemeToggle />
    <div>
      <h1>
        <TagPrefix>
          <RiH1 />
        </TagPrefix>
        hi, I&#39;m Eric
      </h1>
      <p>
        <TagPrefix>
          <RiParagraph />
        </TagPrefix>
        a web/app developer from Argentina, based in Georgia
      </p>
      <p>
        <TagPrefix>
          <RiParagraph />
        </TagPrefix>
        <span> I host my demos and side projects here</span>
      </p>
      <hr />
      <h2>
        <TagPrefix>
          <RiH2 />
        </TagPrefix>
        you can reach me on...
      </h2>
      <ul>
        <TagPrefix>
          <RiListUnordered />
        </TagPrefix>
        <li>
          <CustomLink external href={`https://twitter.com/flatlinediver`} label={`Twitter`}>
            <RiTwitterFill />
          </CustomLink>
        </li>
        <li>
          <CustomLink external href={`http://github.com/flatlinediver`} label={`Github`}>
            <RiGithubFill />
          </CustomLink>
        </li>
        <li>
          <CustomLink external href={`mailto:contact@flatlinediver.com`} label={`Mail`}>
            <RiMailOpenFill />
          </CustomLink>
        </li>
      </ul>
      <hr />
      <h3>
        <TagPrefix>
          <RiH3 />
        </TagPrefix>
        see you there
      </h3>
    </div>
  </PageWrapper>
);

export default Home;
