import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthStatus } from 'redux/session/sessionSlice';
import routes from '../../utils/routes';

const PublicRoute = ({ component, redirectTo = routes.home }) => {
  const isAuth = useSelector(selectAuthStatus);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;
