import React from 'react';
import logo from '../images/logo-white.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="main d-flex flex-column align-items-center flex-lg-row align-items-lg-start">
      <img src={logo} alt="Shortly Logo" className="footer-logo" />
      <div className="d-lg-flex flex-lg-row justify-content-lg-between w-100">
        <div>
          <h6>Features</h6>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div>
          <h6>Resources</h6>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <h6>Company</h6>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="pt-4 pt-lg-0">
          <img src={facebook} alt="Facebook icon" className="pe-4 footer-icon" />
          <img src={twitter} alt="Twitter icon" className="pe-4 footer-icon" />
          <img src={pinterest} alt="Pinterest icon" className="pe-4 footer-icon" />
          <img src={instagram} alt="Instagram icon" className="footer-icon" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
