import React from 'react';
import PropTypes from 'prop-types';

const UrlList = ({ url }) => {
  const original = JSON.parse(sessionStorage.getItem('original'));

  return (
    <div>
      <p>{original}</p>
      <p>{url}</p>
      <button type="button" onClick={() => navigator.clipboard.writeText(`${url}`)}>Copy</button>
    </div>
  );
};

export default UrlList;

UrlList.propTypes = {
  url: PropTypes.string.isRequired,
};
