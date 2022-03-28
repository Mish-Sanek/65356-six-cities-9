import { useEffect, useState } from 'react';
import { APIRoute } from '../consts/apiRoutes';
import { api } from '../store';
import { ICardProps } from '../types';

const useFavoriteRooms = (placeCardsData: ICardProps[]) => {
  const [favoriteCards, setFavoriteCards] = useState<ICardProps[]>([]);

  useEffect(() => {
    api.get(APIRoute.Favorite)
      .then((res) => res.data)
      .then((res) => setFavoriteCards(res));
  },[placeCardsData]);

  return favoriteCards;
};

export default useFavoriteRooms;
