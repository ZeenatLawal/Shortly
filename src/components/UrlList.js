import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/UrlList.css';

const UrlList = ({ url }) => {
  const original = JSON.parse(sessionStorage.getItem('original'));
  const [btn, setBtn] = useState('Copy');

  const handleClick = () => {
    navigator.clipboard.writeText(`${url}`);
    setBtn('Copied!');
  };

  return (
    <section className="list">
      <div className="main url-card">
        <p className="original">{original}</p>
        <div className="d-lg-none">
          <hr />
        </div>
        <p className="short-url">{url}</p>
        <button
          type="button"
          onClick={handleClick}
          className="copy"
          style={{
            backgroundColor: btn === 'Copy' ? 'var(--cyan)' : 'var(--dark-violet)',
          }}
        >
          {btn}
        </button>
      </div>
    </section>
  );
};

export default UrlList;

UrlList.propTypes = {
  url: PropTypes.string.isRequired,
};
