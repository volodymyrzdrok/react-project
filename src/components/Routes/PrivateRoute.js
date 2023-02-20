import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthStatus,
  selectFetchingCurrentUser,
} from 'redux/session/sessionSlice';
import routes from '../../utils/routes';

export const useAuth = () => {
  const isAuth = useSelector(selectAuthStatus);
  const isFetchingUser = useSelector(selectFetchingCurrentUser);
  const shouldRedirectToPublicRoute = !isAuth && !isFetchingUser;

  return { isAuth, isFetchingUser, shouldRedirectToPublicRoute };
};

const PrivateRoute = ({ component, redirectTo = routes.login }) => {
  const { shouldRedirectToPublicRoute } = useAuth();

  return shouldRedirectToPublicRoute ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
