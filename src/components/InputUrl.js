import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shortenedUrl } from '../redux/shortUrlData/shortUrl';
import '../styles/InputUrl.css';

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
    <section className="mid-section">
      <div className="input-section rounded main">
        <form onSubmit={handleSubmit} className="row p-0">
          <div className="col-12 col-md-9 pe-md-0">
            <input
              type="url"
              placeholder="Shorten a link here..."
              data-testid="url-input"
              onChange={onUrlChange}
              onInvalid={onInvalidUrl}
              onInput={onInputUrl}
              className="mt-2 mb-3 my-md-0 form-control"
              required
            />
          </div>
          <div className="col-12 col-md-3 ps-md-0">
            <button type="submit" data-testid="button" className="shorten form-control text-center">Shorten it!</button>
          </div>
        </form>
        {validity && (
          <p data-testid="error-msg">{validity}</p>
        )}
      </div>
    </section>
  );
};

export default InputUrl;
