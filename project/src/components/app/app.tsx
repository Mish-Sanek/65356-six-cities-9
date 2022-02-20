import { useEffect, useState } from 'react';
import {Route, Routes, useLocation } from 'react-router-dom';
import { ICardProps } from '../../types/CardTypes';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Login from '../login/login';
import Main from '../main/Main';
import NotFound from '../notFound/notFound';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Room from '../room/room';

interface CardProps {
  placeCardsData: Array<ICardProps>;
}

function App({placeCardsData}: CardProps): JSX.Element {

  const location = useLocation();

  const [locationState, setLocationState] = useState('/');

  useEffect(() => {
    setLocationState(location.pathname);
  }, [locationState]);


  return (
    <div className={`
      page
      ${locationState === '/' && 'page--gray page--main'}
      ${locationState === '/login' && 'page--gray page--login'}
    `}
    >
      <Header locationState={locationState} />
      <Routes>
        <Route path="/" element={<Main placeCardsData={placeCardsData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/" element={<Room />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
