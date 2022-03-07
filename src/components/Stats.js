import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import customize from '../images/icon-fully-customizable.svg';

const Stats = () => (
  <>
    <section>
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the
        web with our advanced statistics dashboard.
      </p>
      <div>
        <div>
          <img src={brand} alt="Graph icon" />
          <h4>Brand recognition</h4>
          <p>
            Boost your brand recognition with each click. Generic links don&apos;t mean a thing.
            Branded links help instill confidence in your content.
          </p>
        </div>
        <div>
          <img src={records} alt="Records icon" />
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with
            your content helps inform better decisions.
          </p>
        </div>
        <div>
          <img src={customize} alt="Pens icon" />
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h3>Boost your links today</h3>
      <button type="button">Get Started</button>
    </section>
  </>
);

export default Stats;
