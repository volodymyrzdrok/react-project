// import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import routes from 'utils/constants';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage.js'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage.js')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.js'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage.js')
);
const DashboardPage = lazy(() =>
  import('pages/DashboardPage/DashboardPage.js')
);
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from './Loader/Loader';
// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.register} element={<RegistrationPage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.statistics} element={<StatisticsPage />} />
        <Route path={routes.dashboard} element={<DashboardPage />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  );
};
