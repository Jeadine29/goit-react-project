import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BgImageWrapper from './BgImageWrapper';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <BgImageWrapper>
        <Outlet />
      </BgImageWrapper>
    </>
  );
};

export default SharedLayout;
