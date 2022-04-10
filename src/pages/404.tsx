import Head from 'next/head';
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

function NotFound() {
  return (
    <>
      <Head>404 - Page Not Found</Head>
      <Header />
      <BackgroundGraphic />
      <StyledMain>
        <h1>404 - Page Not Found</h1>
        <section>
          <p>The page you are looking for is not here`</p>
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

export default NotFound;
