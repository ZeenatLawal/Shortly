import React from 'react';
import '../styles/HeroHeader.css';
import working from '../images/illustration-working.svg';

const HeroHeader = () => (
  <section className="hero main d-lg-flex flex-row-reverse">
    <img src={working} alt="brand" className="working" />
    <div>
      <h1 className="title">More than just shorter links</h1>
      <p className="text-color">
        Build your brand&apos;s recognition and get detailed
        insights on how your links are performing.
      </p>
      <button type="button" className="button">Get Started</button>
    </div>
  </section>
);

export default HeroHeader;
