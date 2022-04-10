import React from 'react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { bundlePage } from '@home-data/bundle-home';
import { useMDXPage } from '@home-data/use-mdx-page';
import { Header } from '@ui/header';
import { BackgroundGraphic } from '@ui/background-graphic';

const HomePage = ({
  code,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { Component } = useMDXPage(code);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <BackgroundGraphic />
      <Header />
      <Component />
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  code: string;
}> = async () => {
  const props = await bundlePage();

  return {
    props,
  };
};

export default HomePage;
