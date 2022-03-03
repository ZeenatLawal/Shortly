import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shortenedUrl } from '../redux/shortUrlData/shortUrl';

const InputUrl = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const [validity, setCustomValidity] = useState('');

  const onUrlChange = (e) => setUrl(e.target.value);
  const onInvalidUrl = () => setCustomValidity('Please add a link');
  const onInputUrl = () => setCustomValidity('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(shortenedUrl(url));
    sessionStorage.setItem('original', JSON.stringify(url));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={onUrlChange}
          onInvalid={onInvalidUrl}
          onInput={onInputUrl}
          required
        />
        <button type="submit">Shorten it!</button>
      </form>
      <p>{validity}</p>
    </div>
  );
};

export default InputUrl;
