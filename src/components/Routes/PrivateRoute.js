import { Navigate } from 'react-router-dom';
import routes from '../../utils/routes';

const PrivateRoute = ({ component, redirectTo = routes.home }) => {
  const isAuth = 'майбтутня умова авторизації фолс чи тру';

  return isAuth ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
