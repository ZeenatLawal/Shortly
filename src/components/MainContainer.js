import React from 'react';
import { useSelector } from 'react-redux';
import InputUrl from './InputUrl';

const MainContainer = () => {
  const urls = useSelector((state) => state.urlReducer.url);

  return (
    <div>
      <InputUrl />
      {urls && urls.map((url) => (
        <p key={url.link}>{url.link}</p>
      ))}
    </div>
  );
};

export default MainContainer;
