import React from 'react';
import { Links } from '@ui/links';
import { ThemeToggle } from '@ui/theme-toggle';

const Home = () => (
  <div className={`wrapper`}>
    <ThemeToggle />

    <div>
      <h1>hi, I&#39;m Eric</h1>
      <p>a web/app developer from Argentina, based in Georgia</p>
      <p>
        <span> I host my demos and side projects here</span>
      </p>
      <hr />
      <h2>you can reach me on...</h2>
      <Links />
      <hr />
      <h3>
        see you there <span aria-hidden>&#10024;</span>
      </h3>
    </div>
  </div>
);

export default Home;
