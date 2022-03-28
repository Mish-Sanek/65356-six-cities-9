import {Route, Routes, useLocation} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import Main from '../main/Main';
import NotFound from '../notFound/notFound';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Room from '../room/room';

function App(): JSX.Element {
  const location = useLocation();


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
