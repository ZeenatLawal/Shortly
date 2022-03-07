import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => (
  <footer>
    <img src={logo} alt="Shortly Logo" />
    <div>
      <h5>Features</h5>
      <p>Link Shortening</p>
      <p>Branded Links</p>
      <p>Analytics</p>
    </div>
    <div>
      <h5>Resources</h5>
      <p>Blog</p>
      <p>Developers</p>
      <p>Support</p>
    </div>
    <div>
      <h5>Company</h5>
      <p>About</p>
      <p>Our Team</p>
      <p>Careers</p>
      <p>Contact</p>
    </div>
    <div>
      <img src={facebook} alt="Facebook icon" />
      <img src={twitter} alt="Twitter icon" />
      <img src={pinterest} alt="Pinterest icon" />
      <img src={instagram} alt="Instagram icon" />
    </div>
  </footer>
);

export default Footer;
