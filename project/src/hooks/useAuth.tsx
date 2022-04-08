import { useAppSelector } from '.';

const useAuth = () => {
  const authStatus = useAppSelector((state) => state.user.authorizationStatus);

  return authStatus;
};

export default useAuth;
