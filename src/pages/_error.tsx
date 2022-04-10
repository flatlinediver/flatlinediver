import Head from 'next/head';
import { NextPageContext } from 'next';
import { ErrorProps } from 'next/error';
import styled from 'styled-components';
import { BackgroundGraphic } from '@ui/background-graphic';
import { Header } from '@ui/header';
import { Link } from '@ui/custom-link';

const StyledMain = styled.main`
  display: flex;
  width: 100vw;
  max-width: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0;
  a {
    font-size: 1rem;
  }
`;

function Error({ statusCode }: ErrorProps) {
  const notFound = statusCode === 404;
  const errorType =
    statusCode >= 400 && statusCode < 500 ? `client` : `server`;

  return (
    <>
      <Head>{notFound ? `404 - Page Not Found` : statusCode}</Head>
      <Header />
      <BackgroundGraphic />
      <StyledMain>
        <h1>{notFound ? `404 - Page Not Found` : statusCode}</h1>
        <section>
          <p>
            {notFound
              ? `The page you are looking for is not here`
              : `An error ${
                  statusCode ?? ''
                } ocurred on the ${errorType}`}
          </p>
          <p>
            <Link label="home" href="/">
              Click here to go back to the home page
            </Link>
          </p>
        </section>
      </StyledMain>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;

  return { statusCode };
};

export default Error;
