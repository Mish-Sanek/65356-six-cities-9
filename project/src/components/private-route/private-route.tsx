import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../consts/auth';
import useAuth from '../../hooks/useAuth';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAuth();

  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
