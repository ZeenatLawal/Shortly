import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UrlList = ({ url }) => {
  const original = JSON.parse(sessionStorage.getItem('original'));
  const [btn, setBtn] = useState('Copy');

  const handleClick = () => {
    navigator.clipboard.writeText(`${url}`);
    setBtn('Copied!');
  };

  return (
    <div>
      <p>{original}</p>
      <p>{url}</p>
      <button type="button" onClick={handleClick}>{btn}</button>
    </div>
  );
};

export default UrlList;

UrlList.propTypes = {
  url: PropTypes.string.isRequired,
};
