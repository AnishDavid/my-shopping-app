import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
