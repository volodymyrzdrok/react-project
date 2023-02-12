import routes from 'utils/constants';
// import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from './Loader/Loader';
// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';

// const Home = lazy(() => import('pages/Home/Home.js'));

const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  );
};
export default App;
