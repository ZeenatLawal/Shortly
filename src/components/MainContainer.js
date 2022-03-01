import React from 'react';
import { useSelector } from 'react-redux';
import InputUrl from './InputUrl';

const MainContainer = () => {
  const temp = JSON.parse(sessionStorage.getItem('urls'));
  const urls = useSelector((state) => state.urlReducer.url) || temp;

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
