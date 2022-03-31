import { useEffect } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import { AuthorizationStatus } from '../../consts/auth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchHotelsData } from '../../store/apiActions';
import { changeAuthStatus } from '../../store/userProcess/userProcess';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import Main from '../main/Main';
import NotFound from '../notFound/notFound';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Room from '../room/room';

function App(): JSX.Element {
  const isAuth = useAppSelector((state) => state.user.authorizationStatus);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchHotelsData());
    if(isAuth !== AuthorizationStatus.Auth && !!localStorage.getItem(('x-token'))) {
      dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    }
  }, [isAuth, dispatch]);


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
