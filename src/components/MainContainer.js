import React from 'react';
import { useSelector } from 'react-redux';
import HeroHeader from './HeroHeader';
import InputUrl from './InputUrl';
import UrlList from './UrlList';

const MainContainer = () => {
  const temp = JSON.parse(sessionStorage.getItem('urls'));
  const urls = useSelector((state) => state.urlReducer.url) || temp;

  return (
    <main>
      <HeroHeader />
      <InputUrl />
      {urls && urls.map((url) => (
        <UrlList key={url.name} url={url.link} />
      ))}
    </main>
  );
};

export default MainContainer;
