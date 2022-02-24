import { useEffect, useState } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import { ICardProps } from '../../types';
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
  const [favorites, setFavorites] = useState<Array<ICardProps>>([]);

  const getFavorites = () => {
    const fav = placeCardsData.filter((item) => item.isFavorite === true);
    setFavorites(fav);
  };

  useEffect(() => {
    setLocationState(location.pathname);
    getFavorites();
  }, [locationState, placeCardsData]);


  return (
    <div className={`
      page
      ${locationState === '/' ? 'page--gray page--main' : ''}
      ${locationState === '/login' ? 'page--gray page--login' : ''}
    `}
    >
      <Header locationState={locationState} />
      <Routes>
        <Route path="/" element={<Main placeCardsData={placeCardsData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/:id" element={<Room offers={placeCardsData} />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <Favorites favorites={favorites} />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
