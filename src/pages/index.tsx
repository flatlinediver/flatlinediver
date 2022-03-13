import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  RiTwitterFill,
  RiGithubFill,
  RiMailOpenFill,
  RiH1,
  RiH2,
  RiParagraph,
  RiListUnordered,
} from 'react-icons/ri';
import { CgRowLast } from 'react-icons/cg';
import { BiCheckDouble } from 'react-icons/bi';
import { ThemeToggle } from '@ui/theme-toggle';
import { CustomLink } from '@ui/custom-link';
import { TagPrefix } from '@ui/tag-prefix';

const Main = styled.main`
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
  <>
    <Head>
      <title>Flatlinediver</title>
    </Head>
    <header>
      <ThemeToggle />
    </header>
    <Main>
      <h1>
        <TagPrefix>
          <RiH1 />
        </TagPrefix>
        Hi, I&#39;m Eric
      </h1>
      <section>
        <p>
          <TagPrefix>
            <RiParagraph />
          </TagPrefix>
          A web/app developer from Argentina, now based in Georgia.
        </p>
        <p>
          <TagPrefix>
            <RiParagraph />
          </TagPrefix>
          <span> I host my demos and side projects here.</span>
        </p>
      </section>
      <hr />
      <section>
        <h2>
          <TagPrefix>
            <RiH2 />
          </TagPrefix>
          You can reach me on...
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
      </section>
      <hr />
      <footer>
        <TagPrefix offset={`.2rem`}>
          <CgRowLast size={18} />
        </TagPrefix>
        <span>See you there</span> <BiCheckDouble style={{ marginLeft: `.5rem` }} />
      </footer>
    </Main>
  </>
);

export default Home;
