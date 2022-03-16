import React from 'react';
import Head from 'next/head';
import { IconFlatlinediverLogo } from '@ui/icon-flatlinediver-logo';
import { Header } from '@ui/header';
import { Main } from '@ui/main';
import { Footer } from '@ui/footer';
import { Socials } from '@ui/socials';

const Home = () => (
  <>
    <Head>
      <title>Flatlinediver</title>
    </Head>
    <Header />
    <IconFlatlinediverLogo />
    <Main>
      <Socials />
      <hr />
    </Main>
    <Footer />
  </>
);

export default Home;
