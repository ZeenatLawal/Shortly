import React from 'react';
import { useSelector } from 'react-redux';
import InputUrl from './InputUrl';
import UrlList from './UrlList';

const MainContainer = () => {
  const temp = JSON.parse(sessionStorage.getItem('urls'));
  const urls = useSelector((state) => state.urlReducer.url) || temp;

  return (
    <div>
      <InputUrl />
      {urls && urls.map((url) => (
        <UrlList key={url.name} url={url.link} />
      ))}
    </div>
  );
};

export default MainContainer;
