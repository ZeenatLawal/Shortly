import React from 'react';
import brand from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import customize from '../images/icon-fully-customizable.svg';
import '../styles/Stats.css';

const Stats = () => (
  <>
    <section className="stats text-center">
      <div className="main">
        <h3 className="title stats-title">Advanced Statistics</h3>
        <p className="text-color pb-3">
          Track how your links are performing across the
          web with our advanced statistics dashboard.
        </p>
        <div className="py-4">
          <div className="pb-5 position-relative">
            <div className="icon rounded-circle">
              <img src={brand} alt="Graph icon" />
            </div>
            <div className="stats-card rounded">
              <h4 className="stats-card-title">Brand Recognition</h4>
              <p className="text-color">
                Boost your brand recognition with each click. Generic links don&apos;t mean a thing.
                Branded links help instill confidence in your content.
              </p>
            </div>
          </div>
          <hr className="line" />
          <div className="pb-5 position-relative">
            <div className="icon rounded-circle">
              <img src={records} alt="Records icon" />
            </div>
            <div className="stats-card rounded">
              <h4 className="stats-card-title">Detailed Records</h4>
              <p className="text-color">
                Gain insights into who is clicking your links. Knowing when and where people engage
                with your content helps inform better decisions.
              </p>
            </div>
          </div>
          <hr className="line" />
          <div className="pb-5 position-relative">
            <div className="icon rounded-circle">
              <img src={customize} alt="Pens icon" />
            </div>
            <div className="stats-card rounded">
              <h4 className="stats-card-title">Fully Customizable</h4>
              <p className="text-color">
                Improve brand awareness and content discoverability through customizable links,
                supercharging audience engagement.
              </p>
            </div>
          </div>
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
