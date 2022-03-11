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
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Shorten a link here..."
          data-testid="url-input"
          onChange={onUrlChange}
          onInvalid={onInvalidUrl}
          onInput={onInputUrl}
          required
        />
        <button type="submit" data-testid="button">Shorten it!</button>
      </form>
      {validity && (
        <p data-testid="error-msg">{validity}</p>
      )}
    </section>
  );
};

export default InputUrl;
