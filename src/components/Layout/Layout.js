import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
