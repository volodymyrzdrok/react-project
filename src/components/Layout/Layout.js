import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback={<Loader withBackdrop={true} />}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
