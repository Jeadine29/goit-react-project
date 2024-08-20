import { Outlet } from 'react-router-dom';
import { AppBar } from '../Header/Header';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;