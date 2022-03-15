import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../consts/auth';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuth = useAppSelector((state) => state.authorizationStatus);

  return isAuth === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
