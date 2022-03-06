import React from 'react';
import working from '../images/illustration-working.svg';

const HeroHeader = () => (
  <section>
    <img src={working} alt="brand" />
    <div>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand&apos;s recognition and get detailed
        insights on how your links are performing.
      </p>
      <button type="button">Get Started</button>
    </div>
  </section>
);

export default HeroHeader;
