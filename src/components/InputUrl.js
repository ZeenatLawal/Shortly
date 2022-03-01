import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shortenedUrl } from '../redux/shortUrlData/shortUrl';

const InputUrl = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  const onUrlChange = (e) => setUrl(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(shortenedUrl(url));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onUrlChange} required />
      <button type="submit">Shorten it!</button>
    </form>
  );
};

export default InputUrl;
