import React from 'react';
import '../styles/HeroHeader.css';
import working from '../images/illustration-working.svg';

const HeroHeader = () => (
  <section className="hero">
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
