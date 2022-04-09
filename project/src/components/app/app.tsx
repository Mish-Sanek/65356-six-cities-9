import { useEffect } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import { AuthorizationStatus } from '../../consts/auth';
import { useAppDispatch } from '../../hooks';
import useAuth from '../../hooks/useAuth';
import useIsAuth from '../../hooks/useIsAuth';
import { checkAuthStatus, fetchHotelsData } from '../../store/apiActions';
import { changeAuthStatus } from '../../store/userProcess/userProcess';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import Main from '../main/Main';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Room from '../room/room';

function App(): JSX.Element {
  const authStatus = useAuth();
  const isAuth = useIsAuth();
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchHotelsData());
    if(isAuth) {
      dispatch(checkAuthStatus());
      dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    }
  }, [authStatus, isAuth, dispatch]);


  return (
    <div className={`page ${location.pathname === '/' ? 'page--gray page--main' : ''} ${location.pathname === '/login' ? 'page--gray page--login' : ''}`}>
      <Header locationState={location.pathname} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/:id" element={<Room />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {
        location.pathname === '/favorites' && <Footer />
      }
    </div>
  );
}

export default App;
