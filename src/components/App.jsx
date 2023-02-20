import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import routes from 'utils/routes';
import Layout from 'components/Layout/Layout';
import { useMediaQuery } from 'react-responsive';
import CurrentPageMobile from 'pages/CurrencyPageMobile/CurrencyPageMobile';
import { getUserCurrent } from 'redux/session/sessionOperations.js';
import {
  resetIsRefreshing,
  selectFetchingCurrentUser,
} from '../redux/session/sessionSlice';
import Loader from './Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage.js')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.js'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard.jsx'));
const Statistics = lazy(() => import('./Statistics/Statistics.js'));

export const App = () => {
  const isMobileOnly = useMediaQuery({ query: '(max-width: 767px)' });
  const isFetchingUser = useSelector(selectFetchingCurrentUser);

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getUserCurrent());
  }, [dispatch]);

  useEffect(() => {
    if (pathname === routes.login || pathname === routes.register) {
      dispatch(resetIsRefreshing());
    }
  }, [dispatch, pathname]);

  return (
    <>
      {!isFetchingUser ? (
        <Routes>
          <Route path={routes.home} element={<Layout />}>
            <Route
              path={routes.home}
              element={<PrivateRoute component={<HomePage />} />}
            >
              <Route index element={<Navigate to={routes.dashboard} />} />
              <Route path={routes.dashboard} element={<Dashboard />} />
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
            <Route
              path={routes.register}
              element={<PublicRoute component={<RegistrationPage />} />}
            />
            <Route
              path={routes.login}
              element={<PublicRoute component={<LoginPage />} />}
            />

            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Route>
        </Routes>
      ) : (
        <Loader withBackdrop={true} />
      )}
    </>
  );
};
