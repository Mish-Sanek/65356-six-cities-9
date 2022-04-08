import { AuthorizationStatus } from '../consts/auth';
import { getData } from '../services/userData';
import useAuth from './useAuth';

const useIsAuth = () => {
  let isAuth = useAuth();
  const {token} = getData();

  if(token) {
    isAuth = AuthorizationStatus.Auth;
    return isAuth;
  }
};

export default useIsAuth;
