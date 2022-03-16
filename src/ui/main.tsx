import { TagPrefix } from '@ui/tag-prefix';
import React, { FC } from 'react';
import { RiH1, RiParagraph } from 'react-icons/ri';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  width: 100vw;
  max-width: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0;
`;

export const Main: FC = ({ children }) => (
  <StyledMain>
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
        <span> Here I host demos and side projects for now.</span>
      </p>
    </section>
    <hr />
    {children}
  </StyledMain>
);
