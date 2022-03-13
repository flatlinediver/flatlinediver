import React from 'react';
import Head from 'next/head';
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
import { IconFlatlinediverLogo } from '@ui/icon-flatlinediver-logo';

const Home = () => (
  <>
    <Head>
      <title>Flatlinediver</title>
    </Head>
    <header>
      <ThemeToggle />
    </header>
    <IconFlatlinediverLogo />
    <main>
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
              <RiTwitterFill aria-hidden="true" />
            </CustomLink>
          </li>
          <li>
            <CustomLink external href={`http://github.com/flatlinediver`} label={`Github`}>
              <RiGithubFill aria-hidden="true" />
            </CustomLink>
          </li>
          <li>
            <CustomLink external href={`mailto:contact@flatlinediver.com`} label={`Mail`}>
              <RiMailOpenFill aria-hidden="true" />
            </CustomLink>
          </li>
        </ul>
      </section>
      <hr />
    </main>
    <footer>
      <TagPrefix offset={`.2rem`}>
        <CgRowLast size={18} />
      </TagPrefix>
      <span>See you there</span>
      <BiCheckDouble aria-hidden="true" style={{ marginLeft: `.5rem` }} />
    </footer>
  </>
);

export default Home;
