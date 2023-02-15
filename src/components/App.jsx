// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from './Loader/Loader';
// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';

import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import routes from 'utils/routes';
import Layout from 'components/Layout/Layout';
import Dashboard from './Dashboard/Dashboard';
import Statistics from './Statistics/Statistics';
import { useMediaQuery } from 'react-responsive';
import CurrentPageMobile from 'pages/CurrencyPageMobile/CurrencyPageMobile';

const HomePage = lazy(() => import('pages/HomePage/HomePage.js'));

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage.js')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.js'));
// const StatisticsPage = lazy(() =>
//   import('pages/StatisticsPage/StatisticsPage.js')
// );
// const DashboardPage = lazy(() =>
//   import('pages/DashboardPage/DashboardPage.js')
// );

export const App = () => {
  const isMobileOnly = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route path={routes.home} element={<HomePage />}>
          <Route index element={<Navigate to={routes.dashboard} />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.statistics} element={<Statistics />} />
          <Route path={routes.statistics} element={<Statistics />} />

          <Route
            path={routes.currency}
            element={
              isMobileOnly ? (
                <CurrentPageMobile />
              ) : (
                <Navigate to={routes.home} />
              )
            }
          />
        </Route>
        <Route path={routes.register} element={<RegistrationPage />} />
        <Route path={routes.login} element={<LoginPage />} />

        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  );
};
