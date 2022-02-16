import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ICardProps } from '../../types/CardTypes';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/Main';
import NotFound from '../notFound/notFound';
import Room from '../room/room';

interface CardProps {
  placeCardsData: Array<ICardProps>;
}

function App({placeCardsData}: CardProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main placeCardsData={placeCardsData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/offer/" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
